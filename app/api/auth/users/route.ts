import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { verifyAuthCookie } from "@/lib/auth";

const USERS_FILE = path.join(process.cwd(), "data/users.json");

function ensureUsersFile() {
  const dir = path.dirname(USERS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
}

function getUsers() {
  ensureUsersFile();
  return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
}

function saveUsers(users: any) {
  ensureUsersFile();
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

export async function GET(request: NextRequest) {
  const decoded = verifyAuthCookie(request);
  if (!decoded) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (decoded.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    const users = getUsers();
    return NextResponse.json({
      users: users.map((u: any) => ({
        id: u.id, email: u.email, name: u.name, role: u.role, createdAt: u.createdAt,
      })),
    });
  } catch {
    return NextResponse.json({ error: "Failed to list users" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const decoded = verifyAuthCookie(request);
  if (!decoded) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (decoded.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    const { email, name, password, role } = await request.json();

    if (!email || !password || !name || !role) {
      return NextResponse.json({ error: "Email, name, password, and role are required" }, { status: 400 });
    }

    if (!["admin", "content_manager"].includes(role)) {
      return NextResponse.json({ error: "Role must be 'admin' or 'content_manager'" }, { status: 400 });
    }

    const users = getUsers();
    if (users.find((u: any) => u.email === email)) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 400 });
    }

    const newUser = {
      id: uuidv4(),
      email,
      name,
      password: await hash(password, 10),
      role,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsers(users);

    return NextResponse.json(
      { message: "User created successfully", user: { id: newUser.id, email: newUser.email, name: newUser.name, role: newUser.role } },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
