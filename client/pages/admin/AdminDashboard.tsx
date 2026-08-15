import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  fetchAdminOrders,
  formatOrderStatusLabel,
  normalizeOrderStatus,
  type AdminOrderRow,
  type OrderStatus,
} from "@/lib/adminOrdersApi";
import { formatGbp } from "@/lib/priceBreakdownDisplay";
import Seo from "@/components/Seo";

export default function AdminDashboard() {
  const [orders, setOrders] = useState<AdminOrderRow[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setOrders(await fetchAdminOrders());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(() => {
      if (document.visibilityState === "visible") load();
    }, 25_000);
    return () => clearInterval(id);
  }, [load]);

  const counts: Record<OrderStatus, number> = {
    "not started": 0,
    started: 0,
    completed: 0,
    cancelled: 0,
  };
  orders.forEach((o) => {
    counts[normalizeOrderStatus(o.status)] += 1;
  });

  const recent = [...orders]
    .sort((a, b) => (b.pickup_date ?? "").localeCompare(a.pickup_date ?? ""))
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <Seo title="Admin Dashboard" description="Corporate Wheels admin panel." noindex />
      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={load} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-1 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: "Total orders", value: orders.length },
          { label: "Not started", value: counts["not started"] },
          { label: "Started", value: counts.started },
          { label: "Completed", value: counts.completed },
          { label: "Cancelled", value: counts.cancelled },
        ].map((stat) => (
          <Card key={stat.label} className="border-border bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
              ) : (
                <p className="text-2xl font-bold">{stat.value}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent orders</CardTitle>
          <Link
            to="/admin-panel/booking-data"
            className="text-sm text-primary hover:underline"
          >
            View all
          </Link>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b">
                <th className="pb-2 pr-4">Date / time</th>
                <th className="pb-2 pr-4">Customer</th>
                <th className="pb-2 pr-4">Vehicle</th>
                <th className="pb-2 pr-4">Status</th>
                <th className="pb-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((o) => (
                <tr key={o.id} className="border-b border-border/50">
                  <td className="py-3 pr-4">
                    {o.pickup_date} {o.pickup_time?.slice(11, 16)}
                  </td>
                  <td className="py-3 pr-4">
                    {o.first_name} {o.last_name}
                  </td>
                  <td className="py-3 pr-4">
                    {o.vehicle_class_name || o.vehicle_class}
                  </td>
                  <td className="py-3 pr-4">
                    <Badge variant="outline">
                      {formatOrderStatusLabel(o.status)}
                    </Badge>
                  </td>
                  <td className="py-3">{formatGbp(o.total_price ?? 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
