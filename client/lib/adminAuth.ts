import { backendApiUrl } from "./backendApiUrl";

const SESSION_KEY = "cw-admin-session";

export interface AdminSession {
  accessToken: string;
  refreshToken: string;
  email: string;
  accessTokenExpiresAt: number;
}

function extractTokens(data: Record<string, unknown>): Partial<AdminSession> {
  const nested = (data.data as Record<string, unknown>) ?? data;
  const access =
    (nested.access_token as string) ??
    (nested.accessToken as string) ??
    "";
  const refresh =
    (nested.refresh_token as string) ??
    (nested.refreshToken as string) ??
    "";
  const expiresIn = Number(nested.expires_in ?? nested.expiresIn ?? 3600);
  const email = String(nested.email ?? "");
  return {
    accessToken: access,
    refreshToken: refresh,
    email,
    accessTokenExpiresAt: Date.now() + expiresIn * 1000,
  };
}

export function getAdminSession(): AdminSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AdminSession;
  } catch {
    return null;
  }
}

export function setAdminSession(session: AdminSession) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearAdminSession() {
  localStorage.removeItem(SESSION_KEY);
}

export async function loginAdmin(
  email: string,
  password: string,
): Promise<AdminSession> {
  const res = await fetch(backendApiUrl("/api/v1/admins/login"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Login failed");
  }
  const data = (await res.json()) as Record<string, unknown>;
  const tokens = extractTokens(data);
  if (!tokens.accessToken || !tokens.refreshToken) {
    throw new Error("Invalid login response");
  }
  const session: AdminSession = {
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken,
    email: tokens.email || email,
    accessTokenExpiresAt: tokens.accessTokenExpiresAt ?? Date.now() + 3600_000,
  };
  setAdminSession(session);
  return session;
}

export async function refreshAdminTokenIfNeeded(): Promise<AdminSession | null> {
  const session = getAdminSession();
  if (!session) return null;
  const bufferMs = 15_000;
  if (Date.now() < session.accessTokenExpiresAt - bufferMs) {
    return session;
  }
  const res = await fetch(backendApiUrl("/api/v1/admins/refresh-token"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: session.refreshToken }),
  });
  if (!res.ok) {
    clearAdminSession();
    return null;
  }
  const data = (await res.json()) as Record<string, unknown>;
  const tokens = extractTokens(data);
  const updated: AdminSession = {
    ...session,
    accessToken: tokens.accessToken || session.accessToken,
    refreshToken: tokens.refreshToken || session.refreshToken,
    accessTokenExpiresAt:
      tokens.accessTokenExpiresAt ?? Date.now() + 3600_000,
  };
  setAdminSession(updated);
  return updated;
}

export async function getValidAdminAccessToken(): Promise<string | null> {
  const session = await refreshAdminTokenIfNeeded();
  return session?.accessToken ?? null;
}

export async function ensureAdminSession(): Promise<boolean> {
  const session = getAdminSession();
  if (!session) return false;
  const refreshed = await refreshAdminTokenIfNeeded();
  return !!refreshed?.accessToken;
}
