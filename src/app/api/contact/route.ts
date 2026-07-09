import nodemailer from "nodemailer";

// Contact form endpoint. Receives the JSON payload from <ContactForm>, does
// light validation + spam filtering, and delivers it over SMTP (Google
// Workspace / Gmail by default). All credentials come from env vars — nothing
// secret is hard-coded. See .env.local.example.
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  industry?: string;
  subject?: string;
  message?: string;
  botcheck?: string; // honeypot — must stay empty
};

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success so bots
  // don't learn they were caught.
  if (data.botcheck) {
    return Response.json({ ok: true });
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return Response.json({ error: "validation" }, { status: 422 });
  }

  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FROM ?? user;
  const to = process.env.CONTACT_TO ?? user;

  if (!user || !pass || !from || !to) {
    console.error("[contact] SMTP env not configured");
    return Response.json({ error: "not_configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = implicit TLS, 587 = STARTTLS
    auth: { user, pass },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Company", data.company?.trim() ?? "—"],
    ["Email", email],
    ["Phone", data.phone?.trim() ?? "—"],
    ["Industry", data.industry?.trim() ?? "—"],
    ["Topic", data.subject?.trim() ?? "—"],
  ];

  const textBody =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessage:\n${message}`;

  const htmlBody = `
    <div style="font-family:system-ui,-apple-system,sans-serif;color:#161b26;max-width:600px">
      <h2 style="margin:0 0 16px">New website enquiry</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#647089;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`
          )
          .join("")}
      </table>
      <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e2e8f0">
        <div style="color:#647089;margin-bottom:6px">Message</div>
        <div style="white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</div>
      </div>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"KNT Website" <${from}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `Website enquiry${data.subject ? ` — ${data.subject}` : ""} (${name})`,
      text: textBody,
      html: htmlBody,
    });
  } catch (err) {
    console.error("[contact] sendMail failed:", err);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
