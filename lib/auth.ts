import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export function verifyAuthCookie(request: NextRequest): { id: string; email: string; role: string } | null {
  const secret = process.env.JWT_SECRET;
  if (!secret) return null;
  const token = request.cookies.get("admin_token")?.value;
  if (!token) return null;
  try {
    return jwt.verify(token, secret) as { id: string; email: string; role: string };
  } catch {
    return null;
  }
}
