import { useCallback, useEffect, useState } from "react";
import { Loader2, RefreshCw, Eye, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  fetchAdminOrders,
  updateAdminOrder,
  formatOrderStatusLabel,
  type AdminOrderRow,
  type OrderStatus,
} from "@/lib/adminOrdersApi";
import { formatGbp } from "@/lib/priceBreakdownDisplay";
import Seo from "@/components/Seo";

const STATUSES: OrderStatus[] = [
  "not started",
  "started",
  "completed",
  "cancelled",
];

export default function AdminBookingData() {
  const [orders, setOrders] = useState<AdminOrderRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewOrder, setViewOrder] = useState<AdminOrderRow | null>(null);

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

  const handleStatusChange = async (order: AdminOrderRow, status: OrderStatus) => {
    const updated = await updateAdminOrder(order.id, { ...order, status });
    setOrders((prev) => prev.map((o) => (o.id === updated.id ? updated : o)));
  };

  return (
    <div className="space-y-4">
      <Seo title="Booking Data" description="Corporate Wheels admin panel." noindex />
      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={load} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-1 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {loading && (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      <div className="hidden md:block overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground border-b bg-muted/30">
              <th className="p-3">Pickup</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Vehicle</th>
              <th className="p-3">Total</th>
              <th className="p-3">Paid</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-border/50">
                <td className="p-3">
                  {o.pickup_date}
                  <br />
                  <span className="text-xs text-muted-foreground">
                    {o.pickup_time?.slice(0, 16)}
                  </span>
                </td>
                <td className="p-3">
                  {o.first_name} {o.last_name}
                </td>
                <td className="p-3">{o.email}</td>
                <td className="p-3">{o.phonenumber}</td>
                <td className="p-3">{o.vehicle_class_name || o.vehicle_class}</td>
                <td className="p-3">{formatGbp(o.total_price ?? 0)}</td>
                <td className="p-3">{o.is_payment_paid ? "Yes" : "No"}</td>
                <td className="p-3">
                  <Select
                    value={o.status}
                    onValueChange={(v) =>
                      handleStatusChange(o, v as OrderStatus)
                    }
                  >
                    <SelectTrigger className="w-[130px] h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUSES.map((s) => (
                        <SelectItem key={s} value={s}>
                          {formatOrderStatusLabel(s)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-3 flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setViewOrder(o)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {orders.map((o) => (
          <Card key={o.id} className="border-border">
            <CardContent className="p-4 space-y-2 text-sm">
              <p className="font-medium">
                {o.first_name} {o.last_name}
              </p>
              <p className="text-muted-foreground">{o.pickup_date}</p>
              <p>{formatGbp(o.total_price ?? 0)}</p>
              <Badge>{formatOrderStatusLabel(o.status)}</Badge>
              <Button size="sm" variant="outline" onClick={() => setViewOrder(o)}>
                View
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!viewOrder} onOpenChange={() => setViewOrder(null)}>
        <DialogContent className="max-w-3xl bg-card">
          <DialogHeader>
            <DialogTitle>Order details</DialogTitle>
          </DialogHeader>
          {viewOrder && (
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                ["From", viewOrder.from?.address],
                ["To", viewOrder.to?.address],
                ["Stops", viewOrder.stops?.map((s) => s.address).join(", ")],
                ["Customer", `${viewOrder.first_name} ${viewOrder.last_name}`],
                ["Email", viewOrder.email],
                ["Phone", viewOrder.phonenumber],
                ["Vehicle", viewOrder.vehicle_class_name || viewOrder.vehicle_class],
                ["Total", formatGbp(viewOrder.total_price ?? 0)],
                ["Paid", viewOrder.is_payment_paid ? "Yes" : "No"],
                ["Status", formatOrderStatusLabel(viewOrder.status)],
                [
                  "Pricing breakdown",
                  JSON.stringify(viewOrder.pricing_breakdown ?? {}),
                ],
              ].map(([label, val]) => (
                <div key={String(label)} title={String(val ?? "")}>
                  <p className="text-muted-foreground text-xs">{label}</p>
                  <p className="truncate">{val || "—"}</p>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
