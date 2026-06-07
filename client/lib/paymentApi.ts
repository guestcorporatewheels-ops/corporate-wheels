import { backendApiUrl } from "./backendApiUrl";

export interface PaymentQrInfo {
  qr_image_url: string;
  payment_instructions: string;
  is_placeholder: boolean;
}

export async function fetchPaymentQr(amount?: number): Promise<PaymentQrInfo> {
  const query = amount != null ? `?amount=${amount}` : "";
  const res = await fetch(backendApiUrl(`/api/v1/payments/qr${query}`));
  if (!res.ok) {
    throw new Error("Failed to load payment QR code");
  }
  return res.json();
}
