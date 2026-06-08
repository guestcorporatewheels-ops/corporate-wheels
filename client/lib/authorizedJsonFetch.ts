import { clearAdminSession, getValidAdminAccessToken } from "./adminAuth";

export async function authorizedJsonFetch<T = unknown>(
  url: string,
  init: RequestInit = {},
): Promise<T> {
  const token = await getValidAdminAccessToken();
  if (!token) {
    clearAdminSession();
    throw new Error("Admin session expired. Please log in again.");
  }

  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${token}`);
  if (!headers.has("Content-Type") && init.body && !(init.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const res = await fetch(url, { ...init, headers });
  if (res.status === 401) {
    clearAdminSession();
    throw new Error("Unauthorized. Please log in again.");
  }
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed (${res.status})`);
  }
  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}
