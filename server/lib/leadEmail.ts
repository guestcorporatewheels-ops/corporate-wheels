import nodemailer from "nodemailer";
import type { ChatMessage } from "@shared/chat";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured");
  }
  return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export interface ChatLead {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  from?: string;
  to?: string;
  date?: string;
  notes?: string;
  transcript: ChatMessage[];
}

export async function sendChatLeadEmail(lead: ChatLead): Promise<void> {
  const adminEmail = process.env.CHATBOT_ADMIN_EMAIL || process.env.BOOKING_ADMIN_EMAIL;
  if (!adminEmail) {
    console.warn("CHATBOT_ADMIN_EMAIL / BOOKING_ADMIN_EMAIL not configured; skipping chat lead email");
    return;
  }

  const row = (label: string, value?: string) =>
    value ? `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>` : "";

  const transcriptHtml = lead.transcript
    .map(
      (m) =>
        `${m.role === "user" ? "Visitor" : "Assistant"}: ${escapeHtml(m.content)}`,
    )
    .join("\n\n");

  const html = `
    <h2>New chat lead — Corporate Wheels website</h2>
    ${row("Name", lead.name)}
    ${row("Email", lead.email)}
    ${row("Phone", lead.phone)}
    ${row("Service", lead.service)}
    ${row("From", lead.from)}
    ${row("To", lead.to)}
    ${row("Date", lead.date)}
    ${row("Notes", lead.notes)}
    <hr />
    <h3>Conversation</h3>
    <pre style="white-space:pre-wrap;font-family:inherit">${transcriptHtml}</pre>
  `;

  const transporter = getTransporter();
  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: adminEmail,
    replyTo: lead.email || undefined,
    subject: `New website chat lead${lead.name ? ` — ${lead.name}` : ""}`,
    html,
  });
}
