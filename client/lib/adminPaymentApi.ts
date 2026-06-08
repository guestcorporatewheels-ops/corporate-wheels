import { backendApiUrl } from "./backendApiUrl";
import { authorizedJsonFetch } from "./authorizedJsonFetch";

export interface QrPaymentSettings {
  qr_image_url: string;
  payment_instructions: string;
}

export async function fetchQrPaymentSettings(): Promise<QrPaymentSettings> {
  return authorizedJsonFetch(backendApiUrl("/api/v1/payments/qr-settings"));
}

export async function updateQrPaymentSettings(
  body: QrPaymentSettings,
): Promise<QrPaymentSettings> {
  return authorizedJsonFetch(backendApiUrl("/api/v1/payments/qr-settings"), {
    method: "PUT",
    body: JSON.stringify(body),
  });
}

export async function uploadPaymentQr(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const data = await authorizedJsonFetch<{ url: string; qr_image_url: string }>(
    backendApiUrl("/api/v1/payments/qr-upload"),
    { method: "POST", body: form },
  );
  return data.qr_image_url ?? data.url;
}
