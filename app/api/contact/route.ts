import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getContactConfig } from "@/lib/contactConfigs";
import { verifyCaptcha } from "@/lib/verifyCaptcha";

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

const FROM_EMAIL = process.env.SMTP_FROM ?? process.env.SMTP_USER ?? "noreply@intagleo.com";
const NOTIFY_EMAILS = (process.env.CONTACT_NOTIFY_EMAILS ?? "arslan@intagleo.com")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

/* ── HTML helpers ────────────────────────────────────────────────────────── */
function confirmationHtml(name: string, badge: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We've received your request</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="background:#0d0d10;border-radius:16px;border:1px solid rgba(255,255,255,0.07);overflow:hidden;max-width:580px;">

          <!-- Header bar -->
          <tr>
            <td style="background:#6366f1;padding:4px 0;"></td>
          </tr>

          <!-- Logo -->
          <tr>
            <td style="padding:36px 40px 0;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#6366f1;border-radius:6px;width:28px;height:28px;text-align:center;vertical-align:middle;">
                    <span style="color:white;font-weight:700;font-size:14px;">I</span>
                  </td>
                  <td style="padding-left:8px;">
                    <span style="color:white;font-weight:600;font-size:15px;letter-spacing:-0.3px;">intagleo</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px 40px;">
              <!-- Badge -->
              <div style="display:inline-block;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);border-radius:100px;padding:4px 14px;margin-bottom:24px;">
                <span style="color:#6366f1;font-size:12px;font-weight:500;">${badge}</span>
              </div>

              <h1 style="color:white;font-size:26px;font-weight:700;margin:0 0 12px;line-height:1.2;letter-spacing:-0.5px;">
                We've received your request, ${name}.
              </h1>
              <p style="color:rgba(255,255,255,0.45);font-size:15px;line-height:1.6;margin:0 0 28px;">
                Thank you for reaching out. A member of our team will review your message and get back to you personally <strong style="color:rgba(255,255,255,0.65);">within 24 hours</strong>.
              </p>

              <!-- Divider -->
              <div style="height:1px;background:rgba(255,255,255,0.06);margin:0 0 28px;"></div>

              <!-- What's next -->
              <p style="color:rgba(255,255,255,0.30);font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 16px;">What happens next</p>
              <table cellpadding="0" cellspacing="0" style="width:100%;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:28px;height:28px;background:rgba(255,255,255,0.04);border-radius:8px;text-align:center;vertical-align:middle;font-size:13px;">📋</td>
                        <td style="padding-left:12px;color:rgba(255,255,255,0.50);font-size:14px;">We review your submission in detail</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:28px;height:28px;background:rgba(255,255,255,0.04);border-radius:8px;text-align:center;vertical-align:middle;font-size:13px;">👋</td>
                        <td style="padding-left:12px;color:rgba(255,255,255,0.50);font-size:14px;">A senior engineer or strategist reaches out</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:28px;height:28px;background:rgba(255,255,255,0.04);border-radius:8px;text-align:center;vertical-align:middle;font-size:13px;">🚀</td>
                        <td style="padding-left:12px;color:rgba(255,255,255,0.50);font-size:14px;">We build a plan around your goals</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA button -->
              <div style="margin-top:32px;">
                <a href="https://intagleo.com" style="display:inline-block;background:#6366f1;color:white;text-decoration:none;padding:12px 28px;border-radius:100px;font-size:14px;font-weight:500;">
                  Visit our website
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="color:rgba(255,255,255,0.20);font-size:12px;margin:0;line-height:1.5;">
                © ${new Date().getFullYear()} Intagleo. Production-ready software for ambitious teams.<br/>
                You're receiving this because you submitted a contact request on our website.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function notificationHtml(fields: {
  name: string;
  email: string;
  company: string;
  context: string;
  message: string;
  type: string;
  badge: string;
}): string {
  const rows = [
    ["Type", fields.badge],
    ["Name", fields.name],
    ["Email", `<a href="mailto:${fields.email}" style="color:#6366f1;">${fields.email}</a>`],
    ["Company", fields.company || "-"],
    ...(fields.context ? [["Context", fields.context]] : []),
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><title>New contact submission</title></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="background:#0d0d10;border-radius:16px;border:1px solid rgba(255,255,255,0.07);overflow:hidden;max-width:580px;">
          <tr><td style="background:#6366f1;padding:4px 0;"></td></tr>
          <tr>
            <td style="padding:36px 40px 40px;">
              <h1 style="color:white;font-size:22px;font-weight:700;margin:0 0 6px;">
                New contact: ${fields.badge}
              </h1>
              <p style="color:rgba(255,255,255,0.35);font-size:14px;margin:0 0 28px;">
                Submitted on ${new Date().toLocaleString("en-GB", { timeZone: "UTC" })} UTC
              </p>

              <!-- Field table -->
              <table cellpadding="0" cellspacing="0" style="width:100%;border:1px solid rgba(255,255,255,0.06);border-radius:10px;overflow:hidden;">
                ${rows
                  .map(
                    ([k, v]) => `
                <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                  <td style="padding:10px 14px;color:rgba(255,255,255,0.30);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;width:100px;vertical-align:top;">${k}</td>
                  <td style="padding:10px 14px;color:rgba(255,255,255,0.70);font-size:14px;">${v}</td>
                </tr>`
                  )
                  .join("")}
              </table>

              <!-- Message -->
              <div style="margin-top:20px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:16px;">
                <p style="color:rgba(255,255,255,0.30);font-size:11px;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 10px;">Message</p>
                <p style="color:rgba(255,255,255,0.65);font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap;">${fields.message}</p>
              </div>

              <!-- Reply CTA -->
              <div style="margin-top:24px;">
                <a href="mailto:${fields.email}?subject=Re: Your inquiry - Intagleo" style="display:inline-block;background:#6366f1;color:white;text-decoration:none;padding:11px 24px;border-radius:100px;font-size:13px;font-weight:500;">
                  Reply to ${fields.name}
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 40px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="color:rgba(255,255,255,0.20);font-size:12px;margin:0;">
                Intagleo internal notification - do not forward.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* ── Route handler ───────────────────────────────────────────────────────── */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, context, message, type, captchaToken } = body as {
      name: string;
      email: string;
      company?: string;
      context?: string;
      message: string;
      type?: string;
      captchaToken?: string;
    };

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // CAPTCHA verification
    const captchaValid = await verifyCaptcha(captchaToken ?? null);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    const config = getContactConfig(type);
    const badge = config.badge;

    const transporter = getTransporter();

    // ── 1. Confirmation email → submitter ────────────────────────────────
    await transporter.sendMail({
      from: `Intagleo <${FROM_EMAIL}>`,
      to: email,
      subject: `We've received your request - Intagleo`,
      html: confirmationHtml(name, badge),
    });

    // ── 2. Notification email → internal team ────────────────────────────
    await transporter.sendMail({
      from: `Intagleo Contact <${FROM_EMAIL}>`,
      to: NOTIFY_EMAILS,
      replyTo: email,
      subject: `New contact: ${badge} - ${name}${company ? ` (${company})` : ""}`,
      html: notificationHtml({
        name,
        email,
        company: company ?? "",
        context: context ?? "",
        message,
        type: type ?? "general",
        badge,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
