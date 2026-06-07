import { useCallback, useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  fetchQrPaymentSettings,
  updateQrPaymentSettings,
  uploadPaymentQr,
} from "@/lib/adminPaymentApi";
import {
  createExtraPickupType,
  deleteExtraPickupType,
  fetchExtraPickupTypes,
  updateExtraPickupType,
  type ExtraPickupTypeRow,
} from "@/lib/adminExtraPickupTypesApi";
import { Textarea } from "@/components/ui/textarea";

const empty = (): Omit<ExtraPickupTypeRow, "id"> => ({
  pickup_type: "",
  additional_pricing_type: "flat",
  base_price: 0,
  notes: "",
  is_active: true,
});

export default function AdminSettings() {
  const [rows, setRows] = useState<ExtraPickupTypeRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editing, setEditing] = useState<ExtraPickupTypeRow | null>(null);
  const [form, setForm] = useState(empty());
  const [saving, setSaving] = useState(false);
  const [qrUrl, setQrUrl] = useState("");
  const [qrInstructions, setQrInstructions] = useState("");
  const [qrSaving, setQrSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [types, qr] = await Promise.all([
        fetchExtraPickupTypes(),
        fetchQrPaymentSettings(),
      ]);
      setRows(types);
      setQrUrl(qr.qr_image_url);
      setQrInstructions(qr.payment_instructions);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const activeCount = rows.filter((r) => r.is_active).length;

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editing) await updateExtraPickupType(editing.id, form);
      else await createExtraPickupType(form);
      setDialogOpen(false);
      load();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="border-border bg-card">
        <CardContent className="p-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Payment QR code</h2>
            <p className="text-sm text-muted-foreground">
              Upload your live payment QR. A placeholder is used until you replace it.
            </p>
          </div>
          {qrUrl && (
            <img
              src={qrUrl}
              alt="Payment QR"
              className="w-40 h-40 rounded-lg border border-border bg-white p-2"
            />
          )}
          <Input
            placeholder="QR image URL (optional if uploading)"
            value={qrUrl}
            onChange={(e) => setQrUrl(e.target.value)}
          />
          <Textarea
            placeholder="Payment instructions shown to customers"
            value={qrInstructions}
            onChange={(e) => setQrInstructions(e.target.value)}
            rows={3}
          />
          <div className="flex flex-wrap gap-2">
            <input
              type="file"
              accept="image/*"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setQrSaving(true);
                try {
                  const url = await uploadPaymentQr(file);
                  setQrUrl(url);
                } finally {
                  setQrSaving(false);
                }
              }}
            />
            <Button
              className="btn-gradient text-primary-foreground"
              disabled={qrSaving}
              onClick={async () => {
                setQrSaving(true);
                try {
                  await updateQrPaymentSettings({
                    qr_image_url: qrUrl,
                    payment_instructions: qrInstructions,
                  });
                } finally {
                  setQrSaving(false);
                }
              }}
            >
              {qrSaving ? "Saving…" : "Save QR settings"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Extra pickup types</h2>
          <p className="text-sm text-muted-foreground">
            {activeCount} active type{activeCount !== 1 ? "s" : ""}
          </p>
        </div>
        <Button
          size="sm"
          className="btn-gradient text-primary-foreground"
          onClick={() => {
            setEditing(null);
            setForm(empty());
            setDialogOpen(true);
          }}
        >
          <Plus className="h-4 w-4 mr-1" />
          Add type
        </Button>
      </div>

      {loading ? (
        <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
      ) : (
        <div className="grid gap-3">
          {rows.map((row) => (
            <Card key={row.id} className="border-border bg-card">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{row.pickup_type}</p>
                  <p className="text-sm text-muted-foreground">
                    {row.additional_pricing_type} • £{row.base_price}
                  </p>
                  {row.notes && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {row.notes}
                    </p>
                  )}
                </div>
                <div className="flex gap-1 items-center">
                  <span className="text-xs mr-2">
                    {row.is_active ? "Active" : "Off"}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setEditing(row);
                      setForm({ ...row });
                      setDialogOpen(true);
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDeleteId(row.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <DialogTitle>
              {editing ? "Edit pickup type" : "Create pickup type"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-3">
            <Input
              placeholder="Pickup type (e.g. airport)"
              value={form.pickup_type}
              onChange={(e) => setForm({ ...form, pickup_type: e.target.value })}
            />
            <Input
              placeholder="Pricing type"
              value={form.additional_pricing_type}
              onChange={(e) =>
                setForm({ ...form, additional_pricing_type: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Price"
              value={form.base_price}
              onChange={(e) =>
                setForm({ ...form, base_price: Number(e.target.value) })
              }
            />
            <Input
              placeholder="Notes"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
            <label className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={form.is_active}
                onCheckedChange={(v) => setForm({ ...form, is_active: v === true })}
              />
              Active
            </label>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              className="btn-gradient text-primary-foreground"
              disabled={saving}
              onClick={handleSave}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete pickup type?</AlertDialogTitle>
            <AlertDialogDescription>
              This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                if (deleteId) {
                  await deleteExtraPickupType(deleteId);
                  setDeleteId(null);
                  load();
                }
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
