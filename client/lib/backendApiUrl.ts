export function getBackendApiBaseUrl(): string {
  const base = import.meta.env.VITE_API_BASE_URL?.trim();
  if (!base) {
    throw new Error("VITE_API_BASE_URL is not configured");
  }
  return base.replace(/\/$/, "");
}

export function backendApiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getBackendApiBaseUrl()}${normalized}`;
}
