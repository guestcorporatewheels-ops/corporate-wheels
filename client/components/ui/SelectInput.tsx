import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "./select";

type Option = { value: string; label: string };

type Props = {
  options: Option[];
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  name?: string;
  className?: string;
};

export default function SelectInput({
  options,
  value,
  onChange,
  placeholder = "Select",
  ariaLabel,
  name,
  className,
}: Props) {
  return (
    <Select
      onValueChange={(v) => onChange && onChange(v)}
      defaultValue={value}
      value={value}
    >
      <SelectTrigger className={className} aria-label={ariaLabel} name={name}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{placeholder}</SelectLabel>
          {options.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
