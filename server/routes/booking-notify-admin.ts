import type { RequestHandler } from "express";
import nodemailer from "nodemailer";

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

export const handleBookingNotifyAdmin: RequestHandler = async (req, res) => {
  try {
    const { bookingData } = req.body as { bookingData?: Record<string, unknown> };
    if (!bookingData) {
      res.status(400).json({ error: "bookingData is required" });
      return;
    }

    const adminEmail = process.env.BOOKING_ADMIN_EMAIL;
    if (!adminEmail) {
      res.status(500).json({ error: "BOOKING_ADMIN_EMAIL is not configured" });
      return;
    }

    const customer = bookingData.customerInfo as Record<string, string> | undefined;
    const car = bookingData.selectedCar as Record<string, unknown> | undefined;
    const total = car?.total_price ?? car?.price ?? "—";

    const html = `
      <h2>New chauffeur booking</h2>
      <p><strong>Customer:</strong> ${customer?.firstName ?? ""} ${customer?.lastName ?? ""}</p>
      <p><strong>Email:</strong> ${customer?.email ?? ""}</p>
      <p><strong>Phone:</strong> ${customer?.phone ?? ""}</p>
      <p><strong>From:</strong> ${bookingData.fromLocation ?? ""}</p>
      <p><strong>To:</strong> ${JSON.stringify(bookingData.toLocation ?? "")}</p>
      <p><strong>Date:</strong> ${bookingData.date ?? ""}</p>
      <p><strong>Time:</strong> ${bookingData.time ?? ""}</p>
      <p><strong>Vehicle:</strong> ${car?.name ?? ""}</p>
      <p><strong>Total:</strong> £${total}</p>
      <p><strong>Payment:</strong> ${bookingData.paymentMethod ?? "pending"}</p>
      <pre>${JSON.stringify(bookingData, null, 2)}</pre>
    `;

    const transporter = getTransporter();
    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: adminEmail,
      subject: `New booking — ${customer?.lastName ?? "Customer"}`,
      html,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error("notify-admin error", err);
    res.status(500).json({
      error: err instanceof Error ? err.message : "Failed to send notification",
    });
  }
};
