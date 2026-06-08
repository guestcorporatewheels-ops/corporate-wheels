import { useCallback, useEffect, useState } from "react";
import { Pencil, Trash2, Plus, Loader2 } from "lucide-react";
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
  createVehicleClass,
  deleteVehicleClass,
  fetchVehicleClasses,
  updateVehicleClass,
  uploadVehicleClassImage,
  type VehicleClassRow,
} from "@/lib/adminVehicleClassApi";

const emptyForm = (): Omit<VehicleClassRow, "id"> => ({
  class_name: "",
  image_url: "",
  allow_passengers: 3,
  allow_luggage: 2,
  base_price: 0,
  base_price_per_default_miles: 20,
  extra_price_per_miles: 0,
  is_active: true,
});

export default function AdminVehicleClasses() {
  const [rows, setRows] = useState<VehicleClassRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editing, setEditing] = useState<VehicleClassRow | null>(null);
  const [form, setForm] = useState(emptyForm());
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setRows(await fetchVehicleClasses());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm());
    setDialogOpen(true);
  };

  const openEdit = (row: VehicleClassRow) => {
    setEditing(row);
    setForm({ ...row });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editing) {
        await updateVehicleClass(editing.id, form);
      } else {
        await createVehicleClass(form);
      }
      setDialogOpen(false);
      load();
    } finally {
      setSaving(false);
    }
  };

  const handleUpload = async (file: File) => {
    const url = await uploadVehicleClassImage(file);
    setForm((f) => ({ ...f, image_url: url }));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Vehicle classes</h2>
        <Button size="sm" className="btn-gradient text-primary-foreground" onClick={openCreate}>
          <Plus className="h-4 w-4 mr-1" />
          Add class
        </Button>
      </div>

      {loading ? (
        <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {rows.map((row) => (
            <Card key={row.id} className="border-border bg-card">
              <CardContent className="p-4 flex gap-4">
                {row.image_url && (
                  <img
                    src={row.image_url}
                    alt=""
                    className="w-20 h-14 object-cover rounded bg-muted"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold">{row.class_name}</p>
                  <p className="text-sm text-muted-foreground">
                    {row.allow_passengers} pax • {row.allow_luggage} luggage • £
                    {row.base_price} base
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {row.is_active ? "Active" : "Inactive"}
                  </p>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={() => openEdit(row)}>
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
        <DialogContent className="max-w-lg bg-card max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editing ? "Edit vehicle class" : "Create vehicle class"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-3">
            <Input
              placeholder="Name"
              value={form.class_name}
              onChange={(e) => setForm({ ...form, class_name: e.target.value })}
            />
            <Input
              placeholder="Image URL"
              value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleUpload(f);
              }}
            />
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="number"
                placeholder="Passengers"
                value={form.allow_passengers}
                onChange={(e) =>
                  setForm({ ...form, allow_passengers: Number(e.target.value) })
                }
              />
              <Input
                type="number"
                placeholder="Luggage"
                value={form.allow_luggage}
                onChange={(e) =>
                  setForm({ ...form, allow_luggage: Number(e.target.value) })
                }
              />
              <Input
                type="number"
                placeholder="Base price"
                value={form.base_price}
                onChange={(e) =>
                  setForm({ ...form, base_price: Number(e.target.value) })
                }
              />
              <Input
                type="number"
                placeholder="Default miles"
                value={form.base_price_per_default_miles}
                onChange={(e) =>
                  setForm({
                    ...form,
                    base_price_per_default_miles: Number(e.target.value),
                  })
                }
              />
              <Input
                type="number"
                placeholder="Extra per mile"
                value={form.extra_price_per_miles}
                onChange={(e) =>
                  setForm({
                    ...form,
                    extra_price_per_miles: Number(e.target.value),
                  })
                }
              />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={form.is_active}
                onCheckedChange={(v) =>
                  setForm({ ...form, is_active: v === true })
                }
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
            <AlertDialogTitle>Delete vehicle class?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                if (deleteId) {
                  await deleteVehicleClass(deleteId);
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
