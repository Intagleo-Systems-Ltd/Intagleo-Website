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
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Application Received</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f4f6;padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- Accent bar -->
          <tr>
            <td style="background:#3B82F6;height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Logo -->
          <tr>
            <td style="padding:32px 40px 24px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#3B82F6;border-radius:8px;width:32px;height:32px;text-align:center;vertical-align:middle;">
                    <span style="color:#ffffff;font-weight:700;font-size:15px;line-height:32px;">I</span>
                  </td>
                  <td style="padding-left:10px;">
                    <span style="color:#111827;font-weight:700;font-size:16px;letter-spacing:-0.3px;">Intagleo</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:0 40px 40px;">

              <!-- Badge -->
              <div style="display:inline-block;background:#eff6ff;border:1px solid #bfdbfe;border-radius:100px;padding:4px 14px;margin-bottom:24px;">
                <span style="color:#3B82F6;font-size:12px;font-weight:600;">Application Received</span>
              </div>

              <!-- Heading -->
              <h1 style="color:#111827;font-size:24px;font-weight:700;margin:0 0 14px;line-height:1.3;letter-spacing:-0.4px;">
                Thanks for applying, ${name}.
              </h1>

              <!-- Body copy -->
              <p style="color:#6b7280;font-size:15px;line-height:1.7;margin:0 0 8px;">
                We've received your application for <strong style="color:#111827;font-weight:600;">${role}</strong>.
              </p>
              <p style="color:#6b7280;font-size:15px;line-height:1.7;margin:0 0 32px;">
                Our team reviews every application personally. If your profile is a strong fit, we'll be in touch within <strong style="color:#111827;font-weight:600;">5 to 7 business days</strong>.
              </p>

              <!-- Divider -->
              <div style="height:1px;background:#f3f4f6;margin-bottom:28px;"></div>

              <!-- Steps label -->
              <p style="color:#9ca3af;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 20px;">What happens next</p>

              <!-- Step 1 -->
              <table cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-bottom:14px;">
                <tr>
                  <td style="vertical-align:top;width:36px;padding-top:2px;">
                    <div style="width:28px;height:28px;background:#eff6ff;border-radius:8px;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#3B82F6;">1</div>
                  </td>
                  <td style="padding-left:14px;vertical-align:top;padding-top:5px;">
                    <p style="color:#374151;font-size:14px;line-height:1.6;margin:0;font-weight:500;">Our hiring team reviews your application</p>
                    <p style="color:#9ca3af;font-size:13px;line-height:1.5;margin:2px 0 0;">Every submission is read by a real person</p>
                  </td>
                </tr>
              </table>

              <!-- Step 2 -->
              <table cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-bottom:14px;">
                <tr>
                  <td style="vertical-align:top;width:36px;padding-top:2px;">
                    <div style="width:28px;height:28px;background:#eff6ff;border-radius:8px;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#3B82F6;">2</div>
                  </td>
                  <td style="padding-left:14px;vertical-align:top;padding-top:5px;">
                    <p style="color:#374151;font-size:14px;line-height:1.6;margin:0;font-weight:500;">A brief intro call if there's a match</p>
                    <p style="color:#9ca3af;font-size:13px;line-height:1.5;margin:2px 0 0;">Casual conversation to get to know each other</p>
                  </td>
                </tr>
              </table>

              <!-- Step 3 -->
              <table cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-bottom:36px;">
                <tr>
                  <td style="vertical-align:top;width:36px;padding-top:2px;">
                    <div style="width:28px;height:28px;background:#eff6ff;border-radius:8px;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#3B82F6;">3</div>
                  </td>
                  <td style="padding-left:14px;vertical-align:top;padding-top:5px;">
                    <p style="color:#374151;font-size:14px;line-height:1.6;margin:0;font-weight:500;">Technical assessment and final interview</p>
                    <p style="color:#9ca3af;font-size:13px;line-height:1.5;margin:2px 0 0;">Role-specific, focused, and respectful of your time</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#3B82F6;border-radius:8px;">
                    <a href="https://intagleo.com" style="display:inline-block;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:0.01em;">
                      Visit intagleo.com
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #f3f4f6;background:#f9fafb;">
              <p style="color:#9ca3af;font-size:12px;margin:0;line-height:1.6;">
                &copy; ${year} Intagleo. Production-ready software for ambitious teams.<br/>
                You received this because you submitted a job application at intagleo.com.
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
  name: string; email: string; phone: string; role: string;
  linkedin: string; portfolio: string; experience: string;
  source: string; coverLetter: string; hasResume: boolean;
}): string {
  const rows = [
    ["Role",       fields.role],
    ["Name",       fields.name],
    ["Email",      `<a href="mailto:${fields.email}" style="color:#3B82F6;text-decoration:none;font-weight:500;">${fields.email}</a>`],
    ["Phone",      fields.phone || "—"],
    ["LinkedIn",   fields.linkedin ? `<a href="${fields.linkedin}" style="color:#3B82F6;text-decoration:none;">${fields.linkedin}</a>` : "—"],
    ["Portfolio",  fields.portfolio ? `<a href="${fields.portfolio}" style="color:#3B82F6;text-decoration:none;">${fields.portfolio}</a>` : "—"],
    ["Experience", fields.experience || "—"],
    ["Source",     fields.source || "—"],
    ["Resume",     fields.hasResume ? "Attached to this email" : "Not provided"],
  ];

  const submitted = new Date().toLocaleString("en-GB", { timeZone: "UTC" });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New application: ${fields.role}</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f4f6;padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- Accent bar -->
          <tr>
            <td style="background:#3B82F6;height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header row: logo + badge -->
          <tr>
            <td style="padding:28px 40px 20px;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background:#3B82F6;border-radius:8px;width:32px;height:32px;text-align:center;vertical-align:middle;">
                          <span style="color:#ffffff;font-weight:700;font-size:15px;line-height:32px;">I</span>
                        </td>
                        <td style="padding-left:10px;">
                          <span style="color:#111827;font-weight:700;font-size:16px;letter-spacing:-0.3px;">Intagleo</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background:#fef3c7;border:1px solid #fde68a;border-radius:100px;padding:4px 12px;color:#92400e;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">New Application</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Title + timestamp -->
          <tr>
            <td style="padding:0 40px 24px;">
              <h1 style="color:#111827;font-size:20px;font-weight:700;margin:0 0 6px;letter-spacing:-0.3px;">${fields.role}</h1>
              <p style="color:#9ca3af;font-size:13px;margin:0;">Received ${submitted} UTC</p>
            </td>
          </tr>

          <!-- Details table -->
          <tr>
            <td style="padding:0 40px 24px;">
              <table cellpadding="0" cellspacing="0" border="0" style="width:100%;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
                ${rows.map(([k, v], idx) => `
                <tr style="background:${idx % 2 === 0 ? "#ffffff" : "#f9fafb"};">
                  <td style="padding:12px 16px;color:#9ca3af;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;width:100px;vertical-align:top;white-space:nowrap;">${k}</td>
                  <td style="padding:12px 16px;color:#111827;font-size:14px;font-weight:500;border-left:1px solid #f3f4f6;">${v}</td>
                </tr>`).join("")}
              </table>
            </td>
          </tr>

          <!-- Cover letter block -->
          <tr>
            <td style="padding:0 40px 32px;">
              <p style="color:#9ca3af;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 12px;">Cover Letter / About</p>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-left:3px solid #3B82F6;border-radius:0 8px 8px 0;padding:16px 20px;">
                <p style="color:#374151;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${fields.coverLetter || "No cover letter provided."}</p>
              </div>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="padding:0 40px 36px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#111827;border-radius:8px;">
                    <a href="mailto:${fields.email}?subject=Re: Your application for ${fields.role} - Intagleo" style="display:inline-block;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:0.01em;">
                      Reply to ${fields.name}
                    </a>
                  </td>
                  <td style="padding-left:14px;">
                    <span style="color:#6b7280;font-size:13px;">${fields.email}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 40px;border-top:1px solid #f3f4f6;background:#f9fafb;">
              <p style="color:#9ca3af;font-size:12px;margin:0;line-height:1.5;">
                Intagleo internal notification. Do not forward outside the team.
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
