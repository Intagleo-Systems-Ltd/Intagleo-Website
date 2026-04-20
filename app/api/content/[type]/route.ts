import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { verifyAuthCookie } from "@/lib/auth";

const CONTENT_ROOT = path.join(process.cwd(), "content");
const VALID_TYPES = ["blog", "case-studies", "testimonials"];

// GET /api/content/[type] - list all items
export async function GET(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  const user = verifyAuthCookie(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { type } = params;
  if (!VALID_TYPES.includes(type))
    return NextResponse.json({ error: "Invalid content type" }, { status: 400 });

  const dir = path.join(CONTENT_ROOT, type);
  if (!fs.existsSync(dir)) return NextResponse.json({ items: [] });

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const items = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    return { slug, ...data };
  });

  return NextResponse.json({ items });
}

// POST /api/content/[type] - create new item
export async function POST(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  const user = verifyAuthCookie(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { type } = params;
  if (!VALID_TYPES.includes(type))
    return NextResponse.json({ error: "Invalid content type" }, { status: 400 });

  const body = await request.json();
  const { slug, content, ...frontmatter } = body;

  if (!slug) return NextResponse.json({ error: "slug is required" }, { status: 400 });

  const dir = path.join(CONTENT_ROOT, type);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(dir, `${slug}.md`);
  const fileContent = matter.stringify(content || "", frontmatter);
  fs.writeFileSync(filePath, fileContent);

  return NextResponse.json({ success: true, slug });
}
