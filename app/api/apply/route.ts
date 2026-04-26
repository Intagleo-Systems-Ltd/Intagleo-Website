import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyCaptcha } from "@/lib/verifyCaptcha";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_MIME = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

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
const CAREERS_NOTIFY = (process.env.CAREERS_NOTIFY_EMAILS ?? "arslan@intagleo.com")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

/* ── Email templates ─────────────────────────────────────────────────────── */
function confirmationHtml(name: string, role: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><title>Application Received</title></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#0d0d10;border-radius:16px;border:1px solid rgba(255,255,255,0.07);overflow:hidden;max-width:580px;">
        <tr><td style="background:#6366f1;padding:4px 0;"></td></tr>
        <tr><td style="padding:36px 40px 0;">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="background:#6366f1;border-radius:6px;width:28px;height:28px;text-align:center;vertical-align:middle;">
              <span style="color:white;font-weight:700;font-size:14px;">I</span>
            </td>
            <td style="padding-left:8px;"><span style="color:white;font-weight:600;font-size:15px;letter-spacing:-0.3px;">intagleo</span></td>
          </tr></table>
        </td></tr>
        <tr><td style="padding:32px 40px 40px;">
          <div style="display:inline-block;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);border-radius:100px;padding:4px 14px;margin-bottom:24px;">
            <span style="color:#6366f1;font-size:12px;font-weight:500;">Application Received</span>
          </div>
          <h1 style="color:white;font-size:26px;font-weight:700;margin:0 0 12px;line-height:1.2;letter-spacing:-0.5px;">
            Thanks for applying, ${name}.
          </h1>
          <p style="color:rgba(255,255,255,0.45);font-size:15px;line-height:1.6;margin:0 0 8px;">
            We've received your application for <strong style="color:rgba(255,255,255,0.7);">${role}</strong>.
          </p>
          <p style="color:rgba(255,255,255,0.45);font-size:15px;line-height:1.6;margin:0 0 28px;">
            Our team reviews every application personally. If your profile is a fit, we'll be in touch within <strong style="color:rgba(255,255,255,0.65);">5–7 business days</strong>.
          </p>
          <div style="height:1px;background:rgba(255,255,255,0.06);margin:0 0 28px;"></div>
          <p style="color:rgba(255,255,255,0.30);font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 16px;">What happens next</p>
          <table cellpadding="0" cellspacing="0" style="width:100%;">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
              <table cellpadding="0" cellspacing="0"><tr>
                <td style="width:28px;height:28px;background:rgba(255,255,255,0.04);border-radius:8px;text-align:center;vertical-align:middle;font-size:13px;color:rgba(255,255,255,0.5);">1</td>
                <td style="padding-left:12px;color:rgba(255,255,255,0.50);font-size:14px;">Our hiring team reviews your application</td>
              </tr></table>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
              <table cellpadding="0" cellspacing="0"><tr>
                <td style="width:28px;height:28px;background:rgba(255,255,255,0.04);border-radius:8px;text-align:center;vertical-align:middle;font-size:13px;color:rgba(255,255,255,0.5);">2</td>
                <td style="padding-left:12px;color:rgba(255,255,255,0.50);font-size:14px;">A brief intro call if there's a match</td>
              </tr></table>
            </td></tr>
            <tr><td style="padding:10px 0;">
              <table cellpadding="0" cellspacing="0"><tr>
                <td style="width:28px;height:28px;background:rgba(255,255,255,0.04);border-radius:8px;text-align:center;vertical-align:middle;font-size:13px;color:rgba(255,255,255,0.5);">3</td>
                <td style="padding-left:12px;color:rgba(255,255,255,0.50);font-size:14px;">Technical assessment and final interview</td>
              </tr></table>
            </td></tr>
          </table>
          <div style="margin-top:32px;">
            <a href="https://intagleo.com" style="display:inline-block;background:#6366f1;color:white;text-decoration:none;padding:12px 28px;border-radius:100px;font-size:14px;font-weight:500;">Visit our website</a>
          </div>
        </td></tr>
        <tr><td style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);">
          <p style="color:rgba(255,255,255,0.20);font-size:12px;margin:0;line-height:1.5;">
            © ${new Date().getFullYear()} Intagleo. Production-ready software for ambitious teams.<br/>
            You're receiving this because you applied for a position on our website.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function notificationHtml(fields: {
  name: string; email: string; phone: string; role: string;
  linkedin: string; portfolio: string; experience: string;
  source: string; coverLetter: string; hasResume: boolean;
}): string {
  const rows = [
    ["Role",       fields.role],
    ["Name",       fields.name],
    ["Email",      `<a href="mailto:${fields.email}" style="color:#6366f1;">${fields.email}</a>`],
    ["Phone",      fields.phone || "—"],
    ["LinkedIn",   fields.linkedin ? `<a href="${fields.linkedin}" style="color:#6366f1;">${fields.linkedin}</a>` : "—"],
    ["Portfolio",  fields.portfolio ? `<a href="${fields.portfolio}" style="color:#6366f1;">${fields.portfolio}</a>` : "—"],
    ["Experience", fields.experience || "—"],
    ["Source",     fields.source || "—"],
    ["Resume",     fields.hasResume ? "Attached to this email" : "Not provided"],
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><title>New Application</title></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#0d0d10;border-radius:16px;border:1px solid rgba(255,255,255,0.07);overflow:hidden;max-width:580px;">
        <tr><td style="background:#6366f1;padding:4px 0;"></td></tr>
        <tr><td style="padding:36px 40px 40px;">
          <h1 style="color:white;font-size:22px;font-weight:700;margin:0 0 6px;">New application: ${fields.role}</h1>
          <p style="color:rgba(255,255,255,0.35);font-size:14px;margin:0 0 28px;">
            Submitted ${new Date().toLocaleString("en-GB", { timeZone: "UTC" })} UTC
          </p>
          <table cellpadding="0" cellspacing="0" style="width:100%;border:1px solid rgba(255,255,255,0.06);border-radius:10px;overflow:hidden;">
            ${rows.map(([k, v]) => `
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
              <td style="padding:10px 14px;color:rgba(255,255,255,0.30);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;width:110px;vertical-align:top;">${k}</td>
              <td style="padding:10px 14px;color:rgba(255,255,255,0.70);font-size:14px;">${v}</td>
            </tr>`).join("")}
          </table>
          <div style="margin-top:20px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:16px;">
            <p style="color:rgba(255,255,255,0.30);font-size:11px;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 10px;">Cover Letter / About</p>
            <p style="color:rgba(255,255,255,0.65);font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap;">${fields.coverLetter || "—"}</p>
          </div>
          <div style="margin-top:24px;">
            <a href="mailto:${fields.email}?subject=Re: Your application for ${fields.role} — Intagleo"
               style="display:inline-block;background:#6366f1;color:white;text-decoration:none;padding:11px 24px;border-radius:100px;font-size:13px;font-weight:500;">
              Reply to ${fields.name}
            </a>
          </div>
        </td></tr>
        <tr><td style="padding:16px 40px;border-top:1px solid rgba(255,255,255,0.06);">
          <p style="color:rgba(255,255,255,0.20);font-size:12px;margin:0;">Intagleo internal — do not forward.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/* ── Route handler ───────────────────────────────────────────────────────── */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name         = (formData.get("name") as string | null)?.trim() ?? "";
    const email        = (formData.get("email") as string | null)?.trim() ?? "";
    const phone        = (formData.get("phone") as string | null)?.trim() ?? "";
    const role         = (formData.get("role") as string | null)?.trim() ?? "";
    const linkedin     = (formData.get("linkedin") as string | null)?.trim() ?? "";
    const portfolio    = (formData.get("portfolio") as string | null)?.trim() ?? "";
    const experience   = (formData.get("experience") as string | null)?.trim() ?? "";
    const source       = (formData.get("source") as string | null)?.trim() ?? "";
    const coverLetter  = (formData.get("coverLetter") as string | null)?.trim() ?? "";
    const captchaToken = (formData.get("captchaToken") as string | null)?.trim() ?? "";
    const resume       = formData.get("resume") as File | null;

    // Basic validation
    if (!name || !email || !role) {
      return NextResponse.json({ error: "Name, email, and role are required." }, { status: 400 });
    }

    // CAPTCHA verification
    const captchaValid = await verifyCaptcha(captchaToken || null);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Resume validation
    type Attachment = { filename: string; content: Buffer; contentType: string };
    const attachments: Attachment[] = [];
    if (resume && resume.size > 0) {
      if (!ALLOWED_MIME.includes(resume.type)) {
        return NextResponse.json(
          { error: "Resume must be a PDF or Word document (.pdf, .doc, .docx)." },
          { status: 400 }
        );
      }
      if (resume.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Resume file must be under 10 MB." },
          { status: 400 }
        );
      }
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({ filename: resume.name, content: buffer, contentType: resume.type });
    }

    const transporter = getTransporter();

    // Confirmation to applicant
    await transporter.sendMail({
      from: `Intagleo Careers <${FROM_EMAIL}>`,
      to: email,
      subject: `Application received — ${role}`,
      html: confirmationHtml(name, role),
    });

    // Notification to internal team (with resume attached)
    await transporter.sendMail({
      from: `Intagleo Careers <${FROM_EMAIL}>`,
      to: CAREERS_NOTIFY,
      replyTo: email,
      subject: `New application: ${role} — ${name}`,
      html: notificationHtml({
        name, email, phone, role, linkedin, portfolio,
        experience, source, coverLetter,
        hasResume: attachments.length > 0,
      }),
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Apply route error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
