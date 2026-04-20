import { NextRequest, NextResponse } from "next/server";
import { verifyAuthCookie } from "@/lib/auth";
import fs from "fs";
import path from "path";

const USERS_FILE = path.join(process.cwd(), "data/users.json");

export async function GET(request: NextRequest) {
  const decoded = verifyAuthCookie(request);
  if (!decoded) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
    const user = users.find((u: any) => u.id === decoded.id);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    });
  } catch {
    return NextResponse.json({ error: "Failed to load user" }, { status: 500 });
  }
}
