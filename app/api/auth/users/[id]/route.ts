import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import fs from "fs";
import path from "path";
import { verifyAuthCookie } from "@/lib/auth";

const USERS_FILE = path.join(process.cwd(), "data/users.json");

function getUsers() {
  return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
}

function saveUsers(users: any) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const decoded = verifyAuthCookie(request);
  if (!decoded) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (decoded.role !== "admin" && decoded.id !== params.id) {
    return NextResponse.json({ error: "You can only update your own password" }, { status: 403 });
  }

  try {
    const { password, name } = await request.json();
    if (!password && !name) {
      return NextResponse.json({ error: "At least password or name must be provided" }, { status: 400 });
    }

    const users = getUsers();
    const idx = users.findIndex((u: any) => u.id === params.id);
    if (idx === -1) return NextResponse.json({ error: "User not found" }, { status: 404 });

    if (password) users[idx].password = await hash(password, 10);
    if (name) users[idx].name = name;
    saveUsers(users);

    return NextResponse.json({
      message: "User updated successfully",
      user: { id: users[idx].id, email: users[idx].email, name: users[idx].name, role: users[idx].role },
    });
  } catch {
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const decoded = verifyAuthCookie(request);
  if (!decoded) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (decoded.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    const users = getUsers();
    const idx = users.findIndex((u: any) => u.id === params.id);
    if (idx === -1) return NextResponse.json({ error: "User not found" }, { status: 404 });

    if (users[idx].role === "admin" && users.filter((u: any) => u.role === "admin").length === 1) {
      return NextResponse.json({ error: "Cannot delete the last admin user" }, { status: 400 });
    }

    const deleted = users.splice(idx, 1)[0];
    saveUsers(users);

    return NextResponse.json({
      message: "User deleted successfully",
      user: { id: deleted.id, email: deleted.email, name: deleted.name },
    });
  } catch {
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
