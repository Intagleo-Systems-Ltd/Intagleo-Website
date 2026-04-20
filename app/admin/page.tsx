"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "content_manager";
  createdAt: string;
}

type ContentType = "blog" | "case-studies" | "testimonials";

interface ContentItem {
  slug: string;
  title?: string;
  name?: string;
  [key: string]: any;
}

// ─── Field schemas per content type ──────────────────────────────────────────

// ─── Page options for multi-select ───────────────────────────────────────────

const PAGE_OPTIONS = [
  // Industries
  { value: "digital-signage", label: "Digital Signage", group: "Industry" },
  { value: "facilities-management", label: "Facilities Management", group: "Industry" },
  { value: "ecommerce-retail", label: "E-Commerce & Retail", group: "Industry" },
  { value: "healthcare", label: "Healthcare", group: "Industry" },
  { value: "transportation", label: "Transportation", group: "Industry" },
  { value: "edtech", label: "EdTech", group: "Industry" },
  { value: "real-estate", label: "Real Estate", group: "Industry" },
  { value: "travel", label: "Travel", group: "Industry" },
  { value: "smart-cities", label: "Smart Cities & IoT", group: "Industry" },
  { value: "fintech", label: "Fintech", group: "Industry" },
  { value: "hr-recruitment", label: "HR & Recruitment", group: "Industry" },
  // Services
  { value: "ai-transformation", label: "AI Transformation", group: "Service" },
  { value: "data-analytics", label: "Data & Analytics", group: "Service" },
  { value: "custom-software", label: "Custom Software Dev", group: "Service" },
  { value: "mobile-dev", label: "Mobile Development", group: "Service" },
  { value: "embedded-iot", label: "Embedded & IoT", group: "Service" },
  { value: "cloud-devops", label: "Cloud & DevOps", group: "Service" },
  { value: "legacy-modernization", label: "Legacy Modernisation", group: "Service" },
  { value: "qa-services", label: "QA & Testing", group: "Service" },
  { value: "staff-augmentation", label: "Staff Augmentation", group: "Service" },
];

const SCHEMAS: Record<ContentType, { key: string; label: string; widget: "string" | "text" | "markdown" | "boolean" | "date" | "image" | "pages-select" }[]> = {
  blog: [
    { key: "title", label: "Title", widget: "string" },
    { key: "date", label: "Date", widget: "date" },
    { key: "author", label: "Author", widget: "string" },
    { key: "cover_image", label: "Cover Image URL", widget: "image" },
    { key: "excerpt", label: "Excerpt", widget: "text" },
    { key: "show_on_homepage", label: "Show on Homepage", widget: "boolean" },
    { key: "pages", label: "Show on Pages", widget: "pages-select" },
    { key: "seo_description", label: "SEO Description", widget: "text" },
    { key: "content", label: "Body (Markdown)", widget: "markdown" },
  ],
  "case-studies": [
    { key: "title", label: "Title", widget: "string" },
    { key: "client", label: "Client Name", widget: "string" },
    { key: "industry", label: "Industry", widget: "string" },
    { key: "cover_image", label: "Cover Image URL", widget: "image" },
    { key: "rive_url", label: "Rive Animation URL", widget: "string" },
    { key: "challenge", label: "Challenge", widget: "text" },
    { key: "solution", label: "Solution", widget: "text" },
    { key: "results", label: "Results", widget: "text" },
    { key: "show_on_homepage", label: "Show on Homepage", widget: "boolean" },
    { key: "pages", label: "Show on Pages", widget: "pages-select" },
    { key: "seo_description", label: "SEO Description", widget: "text" },
    { key: "content", label: "Body (Markdown)", widget: "markdown" },
  ],
  testimonials: [
    { key: "name", label: "Name", widget: "string" },
    { key: "title", label: "Job Title / Role", widget: "string" },
    { key: "company", label: "Company", widget: "string" },
    { key: "quote", label: "Quote", widget: "text" },
    { key: "photo", label: "Photo URL", widget: "image" },
    { key: "show_on_homepage", label: "Show on Homepage", widget: "boolean" },
  ],
};

const COLLECTION_LABELS: Record<ContentType, string> = {
  blog: "Blog Posts",
  "case-studies": "Case Studies",
  testimonials: "Testimonials",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"cms" | "users">("cms");

  // CMS state
  const [contentType, setContentType] = useState<ContentType>("blog");
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loadingItems, setLoadingItems] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null); // null = list, "new" = new item
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [saving, setSaving] = useState(false);
  const [cmsMessage, setCmsMessage] = useState("");

  // Pages select dropdown open state
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  // Image upload
  const markdownTextareaRef = useRef<HTMLTextAreaElement>(null);
  const inlineUploadRef = useRef<HTMLInputElement>(null);
  const fieldUploadRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const [uploadingField, setUploadingField] = useState<string | null>(null);

  // User management state
  const [users, setUsers] = useState<User[]>([]);
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState<"admin" | "content_manager">("content_manager");
  const [userLoading, setUserLoading] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [updateUserId, setUpdateUserId] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");

  // ── Auth check ──
  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => { setCurrentUser(d.user); fetchUsers(); })
      .catch(() => router.push("/admin/login"));
  }, [router]);

  // ── Fetch content list ──
  const fetchItems = useCallback(async (type: ContentType) => {
    setLoadingItems(true);
    setEditingSlug(null);
    try {
      const res = await fetch(`/api/content/${type}`);
      const data = await res.json();
      setItems(data.items ?? []);
    } finally {
      setLoadingItems(false);
    }
  }, []);

  useEffect(() => {
    if (currentUser) fetchItems(contentType);
  }, [contentType, currentUser, fetchItems]);

  // ── Open editor ──
  const openNew = () => {
    setFormData({ show_on_homepage: false });
    setEditingSlug("new");
    setCmsMessage("");
  };

  const openEdit = async (slug: string) => {
    setCmsMessage("");
    const res = await fetch(`/api/content/${contentType}/${slug}`);
    const data = await res.json();
    setFormData({ ...data.frontmatter, content: data.content });
    setEditingSlug(slug);
  };

  // ── Save ──
  const handleSave = async () => {
    setSaving(true);
    setCmsMessage("");
    try {
      const slug = editingSlug === "new" ? (formData.slug || formData.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-")) : editingSlug;
      if (!slug) { setCmsMessage("❌ Please provide a slug or title."); setSaving(false); return; }

      const method = editingSlug === "new" ? "POST" : "PUT";
      const url = editingSlug === "new"
        ? `/api/content/${contentType}`
        : `/api/content/${contentType}/${slug}`;

      const payload = editingSlug === "new" ? { ...formData, slug } : formData;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setCmsMessage("✅ Saved successfully!");
        fetchItems(contentType);
        if (editingSlug === "new") setEditingSlug(slug);
      } else {
        const err = await res.json();
        setCmsMessage(`❌ ${err.error}`);
      }
    } finally {
      setSaving(false);
    }
  };

  // ── Delete ──
  const handleDelete = async (slug: string) => {
    if (!confirm(`Delete "${slug}"? This cannot be undone.`)) return;
    await fetch(`/api/content/${contentType}/${slug}`, { method: "DELETE" });
    fetchItems(contentType);
  };

  // ── Users ──
  const fetchUsers = async () => {
    const res = await fetch("/api/auth/users");
    if (res.ok) { const d = await res.json(); setUsers(d.users); }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserLoading(true); setUserMessage("");
    const res = await fetch("/api/auth/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: newUserEmail, name: newUserName, password: newUserPassword, role: newUserRole }),
    });
    const d = await res.json();
    if (res.ok) {
      setUserMessage(`✅ User ${newUserEmail} created!`);
      setNewUserEmail(""); setNewUserName(""); setNewUserPassword(""); setNewUserRole("content_manager");
      fetchUsers();
    } else { setUserMessage(`❌ ${d.error}`); }
    setUserLoading(false);
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserLoading(true); setUserMessage("");
    const res = await fetch(`/api/auth/users/${updateUserId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: updatePassword }),
    });
    const d = await res.json();
    setUserMessage(res.ok ? "✅ Password updated!" : `❌ ${d.error}`);
    setUpdateUserId(""); setUpdatePassword("");
    setUserLoading(false);
  };

  const handleDeleteUser = async (userId: string, email: string) => {
    if (!confirm(`Delete user ${email}?`)) return;
    const res = await fetch(`/api/auth/users/${userId}`, { method: "DELETE" });
    const d = await res.json();
    setUserMessage(res.ok ? "✅ User deleted." : `❌ ${d.error}`);
    fetchUsers();
  };

  // ── Upload image and insert markdown at cursor ──
  const uploadFile = async (file: File, targetField?: string): Promise<string | null> => {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/content/upload", {
      method: "POST",
      body: fd,
    });
    if (!res.ok) {
      const err = await res.json();
      setCmsMessage(`❌ Upload failed: ${err.error}`);
      return null;
    }
    const { url } = await res.json();
    return url;
  };

  const handleInlineImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingField("inline");
    const url = await uploadFile(file);
    setUploadingField(null);
    if (!url) return;
    // Insert at cursor position in the markdown textarea
    const ta = markdownTextareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart ?? 0;
    const end = ta.selectionEnd ?? 0;
    const altText = file.name.replace(/\.[^.]+$/, "");
    const insertion = `![${altText}](${url})`;
    const current = formData.content ?? "";
    const updated = current.slice(0, start) + insertion + current.slice(end);
    setFormData((p) => ({ ...p, content: updated }));
    // Restore cursor after insertion
    setTimeout(() => {
      ta.focus();
      ta.setSelectionRange(start + insertion.length, start + insertion.length);
    }, 0);
    e.target.value = "";
  };

  const handleFieldImageUpload = async (fieldKey: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingField(fieldKey);
    const url = await uploadFile(file);
    setUploadingField(null);
    if (url) setFormData((p) => ({ ...p, [fieldKey]: url }));
    e.target.value = "";
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (!currentUser) return null;

  // ── Helpers ──
  const displayName = (item: ContentItem) => item.title || item.name || item.slug;

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* ── Top bar ── */}
      <div className="bg-[#161b22] border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-white font-semibold text-lg">Intagleo CMS</span>
          <span className="text-white/30 text-sm">·</span>
          <span className="text-white/50 text-sm">{currentUser.name}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${currentUser.role === "admin" ? "bg-red-500/20 text-red-300" : "bg-blue-500/20 text-blue-300"}`}>
            {currentUser.role === "admin" ? "Admin" : "Editor"}
          </span>
        </div>
        <button onClick={handleLogout} className="text-sm text-white/40 hover:text-white transition-colors">
          Sign out
        </button>
      </div>

      {/* ── Tab nav ── */}
      <div className="bg-[#161b22] border-b border-white/10 px-6 flex gap-6">
        {(["cms", "users"] as const).map((tab) => {
          if (tab === "users" && currentUser.role !== "admin") return null;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab ? "border-white text-white" : "border-transparent text-white/40 hover:text-white/70"
              }`}
            >
              {tab === "cms" ? "Content" : "Users"}
            </button>
          );
        })}
      </div>

      {/* ══════════ CONTENT TAB ══════════ */}
      {activeTab === "cms" && (
        <div className="flex h-[calc(100vh-96px)]">

          {/* ── Left sidebar: collections + item list ── */}
          <div className="w-72 border-r border-white/10 bg-[#0d1117] flex flex-col overflow-hidden">
            {/* Collection picker */}
            <div className="p-4 border-b border-white/10 space-y-1">
              {(Object.keys(COLLECTION_LABELS) as ContentType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setContentType(type)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    contentType === type ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {COLLECTION_LABELS[type]}
                </button>
              ))}
            </div>

            {/* Item list */}
            <div className="flex-1 overflow-y-auto p-3">
              <button
                onClick={openNew}
                className="w-full mb-3 py-2 text-sm rounded-lg border border-dashed border-white/20 text-white/40 hover:border-white/40 hover:text-white transition-colors"
              >
                + New {COLLECTION_LABELS[contentType].replace(/s$/, "")}
              </button>

              {loadingItems ? (
                <p className="text-white/30 text-xs text-center py-4">Loading…</p>
              ) : items.length === 0 ? (
                <p className="text-white/30 text-xs text-center py-4">No items yet.</p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.slug}
                    className={`group flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm mb-1 transition-colors ${
                      editingSlug === item.slug ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => openEdit(item.slug)}
                  >
                    <span className="truncate">{displayName(item)}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(item.slug); }}
                      className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 text-xs px-1 transition-opacity"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* ── Editor pane ── */}
          <div className="flex-1 overflow-y-auto">
            {editingSlug === null ? (
              <div className="flex items-center justify-center h-full text-white/20 text-sm">
                Select an item or create a new one
              </div>
            ) : (
              <div className="max-w-3xl mx-auto px-8 py-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-white font-medium">
                    {editingSlug === "new" ? `New ${COLLECTION_LABELS[contentType].replace(/s$/, "")}` : editingSlug}
                  </h2>
                  <div className="flex items-center gap-3">
                    {cmsMessage && (
                      <span className={`text-sm ${cmsMessage.startsWith("✅") ? "text-green-400" : "text-red-400"}`}>
                        {cmsMessage}
                      </span>
                    )}
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 disabled:opacity-50 transition-colors"
                    >
                      {saving ? "Saving…" : "Save"}
                    </button>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Slug field for new items */}
                  {editingSlug === "new" && (
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Slug (URL identifier)</label>
                      <input
                        type="text"
                        value={formData.slug ?? ""}
                        onChange={(e) => setFormData((p) => ({ ...p, slug: e.target.value }))}
                        placeholder="my-post-slug"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30 font-mono"
                      />
                    </div>
                  )}

                  {SCHEMAS[contentType].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">
                        {field.label}
                      </label>

                      {field.widget === "string" ? (
                        <input
                          type="text"
                          value={formData[field.key] ?? ""}
                          onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                        />
                      ) : field.widget === "image" ? (
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={formData[field.key] ?? ""}
                              onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                              placeholder="https://… or upload below"
                              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                            />
                            <button
                              type="button"
                              onClick={() => fieldUploadRefs.current[field.key]?.click()}
                              disabled={uploadingField === field.key}
                              className="px-4 py-2.5 bg-white/8 hover:bg-white/15 border border-white/10 rounded-lg text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 disabled:opacity-50"
                            >
                              {uploadingField === field.key ? (
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              ) : (
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                  <path d="M7.5 1v9M4 4.5L7.5 1 11 4.5M2 11h11v3H2v-3z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                              Upload
                            </button>
                            <input
                              ref={(el) => { fieldUploadRefs.current[field.key] = el; }}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleFieldImageUpload(field.key, e)}
                            />
                          </div>
                          {formData[field.key] && (
                            <img
                              src={formData[field.key]}
                              alt="preview"
                              className="h-24 rounded-lg object-cover border border-white/10"
                            />
                          )}
                        </div>
                      ) : field.widget === "date" ? (
                        <input
                          type="date"
                          value={formData[field.key] ?? ""}
                          onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                        />
                      ) : field.widget === "boolean" ? (
                        <label className="flex items-center gap-3 cursor-pointer">
                          <div
                            onClick={() => setFormData((p) => ({ ...p, [field.key]: !p[field.key] }))}
                            className={`relative w-10 h-5 rounded-full transition-colors ${formData[field.key] ? "bg-white" : "bg-white/20"}`}
                          >
                            <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-black transition-transform ${formData[field.key] ? "translate-x-5" : ""}`} />
                          </div>
                          <span className="text-sm text-white/60">{formData[field.key] ? "Yes" : "No"}</span>
                        </label>
                      ) : field.widget === "pages-select" ? (
                        <div className="relative">
                          {/* Trigger */}
                          <button
                            type="button"
                            onClick={() => setPagesDropdownOpen((p) => !p)}
                            className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-left hover:border-white/20 transition-colors focus:outline-none focus:border-white/30"
                          >
                            <span className="text-white/70">
                              {(formData[field.key] as string[] | undefined)?.length
                                ? `${(formData[field.key] as string[]).length} page${(formData[field.key] as string[]).length !== 1 ? "s" : ""} selected`
                                : <span className="text-white/30">No pages selected</span>}
                            </span>
                            <svg className={`w-4 h-4 text-white/30 transition-transform ${pagesDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {/* Selected pills */}
                          {(formData[field.key] as string[] | undefined)?.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {(formData[field.key] as string[]).map((v) => {
                                const opt = PAGE_OPTIONS.find((o) => o.value === v);
                                return (
                                  <span key={v} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70">
                                    {opt?.label ?? v}
                                    <button
                                      type="button"
                                      onClick={() => setFormData((p) => ({ ...p, [field.key]: (p[field.key] as string[] ?? []).filter((x: string) => x !== v) }))}
                                      className="text-white/40 hover:text-white ml-0.5"
                                    >×</button>
                                  </span>
                                );
                              })}
                            </div>
                          )}

                          {/* Dropdown panel */}
                          {pagesDropdownOpen && (
                            <div className="absolute z-50 mt-1 w-full bg-[#1c2128] border border-white/15 rounded-xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto">
                              {["Industry", "Service"].map((group) => (
                                <div key={group}>
                                  <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/30 bg-white/[0.03] border-b border-white/[0.06]">
                                    {group} Pages
                                  </div>
                                  {PAGE_OPTIONS.filter((o) => o.group === group).map((opt) => {
                                    const selected = (formData[field.key] as string[] ?? []).includes(opt.value);
                                    return (
                                      <label
                                        key={opt.value}
                                        className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-white/5 transition-colors"
                                      >
                                        <input
                                          type="checkbox"
                                          checked={selected}
                                          onChange={() => {
                                            const current: string[] = formData[field.key] ?? [];
                                            setFormData((p) => ({
                                              ...p,
                                              [field.key]: selected
                                                ? current.filter((x) => x !== opt.value)
                                                : [...current, opt.value],
                                            }));
                                          }}
                                          className="w-4 h-4 accent-white rounded"
                                        />
                                        <span className="text-sm text-white/70">{opt.label}</span>
                                      </label>
                                    );
                                  })}
                                </div>
                              ))}
                              <div className="px-4 py-3 border-t border-white/[0.06] flex justify-end">
                                <button
                                  type="button"
                                  onClick={() => setPagesDropdownOpen(false)}
                                  className="text-xs text-white/50 hover:text-white px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                  Done
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : field.widget === "text" ? (
                        <textarea
                          rows={3}
                          value={formData[field.key] ?? ""}
                          onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30 resize-y"
                        />
                      ) : field.widget === "markdown" ? (
                        <div>
                          {/* Toolbar */}
                          <div className="flex items-center gap-2 mb-1.5 px-1">
                            <button
                              type="button"
                              onClick={() => inlineUploadRef.current?.click()}
                              disabled={uploadingField === "inline"}
                              className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition-colors disabled:opacity-50"
                            >
                              {uploadingField === "inline" ? (
                                <span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                              ) : (
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                  <rect x="1" y="3" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                                  <circle cx="4.5" cy="6.5" r="1" fill="currentColor"/>
                                  <path d="M1 9.5l3-2.5 2.5 2 2-1.5L12 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                              Insert Image
                            </button>
                            <span className="text-white/20 text-xs">Upload an image and insert it inline at cursor position</span>
                          </div>
                          <input
                            ref={inlineUploadRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleInlineImageUpload}
                          />
                          <textarea
                            ref={markdownTextareaRef}
                            rows={18}
                            value={formData[field.key] ?? ""}
                            onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-white/30 resize-y"
                            placeholder="Write markdown here…"
                          />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══════════ USERS TAB ══════════ */}
      {activeTab === "users" && currentUser.role === "admin" && (
        <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
          {userMessage && (
            <div className={`px-4 py-3 rounded-lg text-sm ${userMessage.startsWith("✅") ? "bg-green-500/10 text-green-300 border border-green-500/20" : "bg-red-500/10 text-red-300 border border-red-500/20"}`}>
              {userMessage}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Create user */}
            <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-medium mb-5">Create User</h3>
              <form onSubmit={handleCreateUser} className="space-y-4">
                {[
                  { label: "Name", key: "name", val: newUserName, set: setNewUserName, type: "text" },
                  { label: "Email", key: "email", val: newUserEmail, set: setNewUserEmail, type: "email" },
                  { label: "Password", key: "password", val: newUserPassword, set: setNewUserPassword, type: "password" },
                ].map(({ label, key, val, set, type }) => (
                  <div key={key}>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">{label}</label>
                    <input type={type} value={val} onChange={(e) => set(e.target.value)} required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Role</label>
                  <select value={newUserRole} onChange={(e) => setNewUserRole(e.target.value as any)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30">
                    <option value="content_manager">Content Manager</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <button type="submit" disabled={userLoading}
                  className="w-full py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 disabled:opacity-50 transition-colors">
                  {userLoading ? "Creating…" : "Create User"}
                </button>
              </form>
            </div>

            {/* Update password */}
            <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-medium mb-5">Update Password</h3>
              <form onSubmit={handleUpdatePassword} className="space-y-4">
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">User</label>
                  <select value={updateUserId} onChange={(e) => setUpdateUserId(e.target.value)} required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30">
                    <option value="">Select a user…</option>
                    {users.map((u) => <option key={u.id} value={u.id}>{u.name} ({u.email})</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">New Password</label>
                  <input type="password" value={updatePassword} onChange={(e) => setUpdatePassword(e.target.value)} required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30" />
                </div>
                <button type="submit" disabled={userLoading || !updateUserId}
                  className="w-full py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 disabled:opacity-50 transition-colors">
                  {userLoading ? "Updating…" : "Update Password"}
                </button>
              </form>
            </div>
          </div>

          {/* Users table */}
          <div className="bg-[#161b22] border border-white/10 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10">
              <h3 className="text-white font-medium">All Users</h3>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/40 text-xs uppercase tracking-wider">
                  {["Name", "Email", "Role", "Created", ""].map((h) => (
                    <th key={h} className="px-6 py-3 text-left font-normal">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                    <td className="px-6 py-3 text-white">{u.name}</td>
                    <td className="px-6 py-3 text-white/60">{u.email}</td>
                    <td className="px-6 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${u.role === "admin" ? "bg-red-500/20 text-red-300" : "bg-blue-500/20 text-blue-300"}`}>
                        {u.role === "admin" ? "Admin" : "Editor"}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-white/40">{new Date(u.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-3">
                      <button onClick={() => handleDeleteUser(u.id, u.email)}
                        className="text-red-400 hover:text-red-300 transition-colors text-xs">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
