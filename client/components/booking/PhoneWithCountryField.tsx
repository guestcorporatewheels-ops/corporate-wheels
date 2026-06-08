import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const COUNTRIES = [
  { code: "+44", label: "UK (+44)" },
  { code: "+1", label: "US (+1)" },
  { code: "+353", label: "IE (+353)" },
  { code: "+33", label: "FR (+33)" },
  { code: "+49", label: "DE (+49)" },
];

interface PhoneWithCountryFieldProps {
  dialCode: string;
  localNumber: string;
  onDialCodeChange: (code: string) => void;
  onLocalNumberChange: (num: string) => void;
  error?: string;
}

export function toE164(dialCode: string, localNumber: string): string {
  const digits = localNumber.replace(/\D/g, "");
  return `${dialCode}${digits}`;
}

export default function PhoneWithCountryField({
  dialCode,
  localNumber,
  onDialCodeChange,
  onLocalNumberChange,
  error,
}: PhoneWithCountryFieldProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-foreground">Phone</label>
      <div className="flex gap-2">
        <Select value={dialCode} onValueChange={onDialCodeChange}>
          <SelectTrigger className="w-[130px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {COUNTRIES.map((c) => (
              <SelectItem key={c.code} value={c.code}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="tel"
          value={localNumber}
          onChange={(e) => onLocalNumberChange(e.target.value)}
          placeholder="7123 456789"
          className="flex-1"
        />
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
