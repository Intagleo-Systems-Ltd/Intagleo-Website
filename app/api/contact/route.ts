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

const TYPE_ENV_MAP: Record<string, string> = {
  "general":               "CONTACT_NOTIFY_EMAILS",
  "start-project":         "CONTACT_START_PROJECT_EMAILS",
  "technical-call":        "CONTACT_TECHNICAL_CALL_EMAILS",
  "ai-strategy":           "CONTACT_AI_STRATEGY_EMAILS",
  "staff-augmentation":    "CONTACT_STAFF_AUG_EMAILS",
  "legacy-modernization":  "CONTACT_LEGACY_MOD_EMAILS",
  "mobile-dev":            "CONTACT_MOBILE_DEV_EMAILS",
  "cloud-devops":          "CONTACT_CLOUD_DEVOPS_EMAILS",
  "ai-ml":                 "CONTACT_AI_ML_EMAILS",
  "custom-software":       "CONTACT_CUSTOM_SOFTWARE_EMAILS",
  "us-sled":               "CONTACT_US_SLED_EMAILS",
};

function getNotifyEmails(type?: string): string[] {
  const envKey = type ? (TYPE_ENV_MAP[type] ?? "CONTACT_NOTIFY_EMAILS") : "CONTACT_NOTIFY_EMAILS";
  const raw = process.env[envKey] ?? process.env.CONTACT_NOTIFY_EMAILS ?? "arslan@intagleo.com";
  return raw.split(",").map((e) => e.trim()).filter(Boolean);
}

/* ── HTML helpers ────────────────────────────────────────────────────────── */
function confirmationHtml(name: string, badge: string): string {
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We've received your message</title>
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
                <span style="color:#3B82F6;font-size:12px;font-weight:600;">${badge}</span>
              </div>

              <!-- Heading -->
              <h1 style="color:#111827;font-size:24px;font-weight:700;margin:0 0 14px;line-height:1.3;letter-spacing:-0.4px;">
                Your request has been received, ${name}.
              </h1>

              <!-- Body copy -->
              <p style="color:#6b7280;font-size:15px;line-height:1.7;margin:0 0 32px;">
                Thank you for reaching out to Intagleo. A member of our team will review your message and respond personally within <strong style="color:#111827;font-weight:600;">24 hours</strong>.
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
                    <p style="color:#374151;font-size:14px;line-height:1.6;margin:0;font-weight:500;">We review your submission in detail</p>
                    <p style="color:#9ca3af;font-size:13px;line-height:1.5;margin:2px 0 0;">Understanding your requirements and context</p>
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
                    <p style="color:#374151;font-size:14px;line-height:1.6;margin:0;font-weight:500;">A senior engineer or strategist contacts you</p>
                    <p style="color:#9ca3af;font-size:13px;line-height:1.5;margin:2px 0 0;">Directly, by email or a scheduled call</p>
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
                    <p style="color:#374151;font-size:14px;line-height:1.6;margin:0;font-weight:500;">We build a tailored plan around your goals</p>
                    <p style="color:#9ca3af;font-size:13px;line-height:1.5;margin:2px 0 0;">No unnecessary delays, no long onboarding</p>
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
                You received this because you submitted a contact form at intagleo.com.
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
    ["Type",    fields.badge],
    ["Name",    fields.name],
    ["Email",   `<a href="mailto:${fields.email}" style="color:#3B82F6;text-decoration:none;font-weight:500;">${fields.email}</a>`],
    ["Company", fields.company || "—"],
    ...(fields.context ? [["Context", fields.context]] : []),
  ];

  const submitted = new Date().toLocaleString("en-GB", { timeZone: "UTC" });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New submission: ${fields.badge}</title>
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
                    <span style="display:inline-block;background:#fef3c7;border:1px solid #fde68a;border-radius:100px;padding:4px 12px;color:#92400e;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">New Submission</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Title + timestamp -->
          <tr>
            <td style="padding:0 40px 24px;">
              <h1 style="color:#111827;font-size:20px;font-weight:700;margin:0 0 6px;letter-spacing:-0.3px;">${fields.badge}</h1>
              <p style="color:#9ca3af;font-size:13px;margin:0;">Received ${submitted} UTC</p>
            </td>
          </tr>

          <!-- Details table -->
          <tr>
            <td style="padding:0 40px 24px;">
              <table cellpadding="0" cellspacing="0" border="0" style="width:100%;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
                ${rows.map(([k, v], idx) => `
                <tr style="background:${idx % 2 === 0 ? "#ffffff" : "#f9fafb"};">
                  <td style="padding:12px 16px;color:#9ca3af;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;width:90px;vertical-align:top;white-space:nowrap;">${k}</td>
                  <td style="padding:12px 16px;color:#111827;font-size:14px;font-weight:500;border-left:1px solid #f3f4f6;">${v}</td>
                </tr>`).join("")}
              </table>
            </td>
          </tr>

          <!-- Message block -->
          <tr>
            <td style="padding:0 40px 32px;">
              <p style="color:#9ca3af;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 12px;">Message</p>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-left:3px solid #3B82F6;border-radius:0 8px 8px 0;padding:16px 20px;">
                <p style="color:#374151;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${fields.message}</p>
              </div>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="padding:0 40px 36px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#111827;border-radius:8px;">
                    <a href="mailto:${fields.email}?subject=Re: Your inquiry - Intagleo" style="display:inline-block;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:0.01em;">
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
    const notifyEmails = getNotifyEmails(type);

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
      to: notifyEmails,
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
