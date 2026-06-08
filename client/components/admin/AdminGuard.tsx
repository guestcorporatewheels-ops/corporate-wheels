import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ensureAdminSession } from "@/lib/adminAuth";
import { Loader2 } from "lucide-react";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<"loading" | "ok" | "fail">("loading");

  useEffect(() => {
    ensureAdminSession().then((ok) => setState(ok ? "ok" : "fail"));
  }, []);

  if (state === "loading") {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-muted">
        <p className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          Checking admin session…
        </p>
      </div>
    );
  }
  if (state === "fail") {
    return <Navigate to="/admin-panel/login" replace />;
  }
  return <>{children}</>;
}
