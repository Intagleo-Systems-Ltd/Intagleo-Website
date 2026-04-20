import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { verifyAuthCookie } from "@/lib/auth";

const CONTENT_ROOT = path.join(process.cwd(), "content");
const VALID_TYPES = ["blog", "case-studies", "testimonials"];

// GET /api/content/[type]/[slug]
export async function GET(
  request: NextRequest,
  { params }: { params: { type: string; slug: string } }
) {
  const user = verifyAuthCookie(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { type, slug } = params;
  if (!VALID_TYPES.includes(type))
    return NextResponse.json({ error: "Invalid content type" }, { status: 400 });

  const filePath = path.join(CONTENT_ROOT, type, `${slug}.md`);
  if (!fs.existsSync(filePath))
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return NextResponse.json({ slug, frontmatter: data, content });
}

// PUT /api/content/[type]/[slug] - update
export async function PUT(
  request: NextRequest,
  { params }: { params: { type: string; slug: string } }
) {
  const user = verifyAuthCookie(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { type, slug } = params;
  if (!VALID_TYPES.includes(type))
    return NextResponse.json({ error: "Invalid content type" }, { status: 400 });

  const body = await request.json();
  const { content, ...frontmatter } = body;

  const dir = path.join(CONTENT_ROOT, type);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(dir, `${slug}.md`);
  const fileContent = matter.stringify(content || "", frontmatter);
  fs.writeFileSync(filePath, fileContent);

  return NextResponse.json({ success: true, slug });
}

// DELETE /api/content/[type]/[slug]
export async function DELETE(
  request: NextRequest,
  { params }: { params: { type: string; slug: string } }
) {
  const user = verifyAuthCookie(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { type, slug } = params;
  if (!VALID_TYPES.includes(type))
    return NextResponse.json({ error: "Invalid content type" }, { status: 400 });

  const filePath = path.join(CONTENT_ROOT, type, `${slug}.md`);
  if (!fs.existsSync(filePath))
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  fs.unlinkSync(filePath);
  return NextResponse.json({ success: true });
}
