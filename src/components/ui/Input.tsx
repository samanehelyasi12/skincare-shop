import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  /** Optional helper or validation text rendered below the field. */
  hint?: ReactNode;
  /** Visible error text; also marks the field as invalid for assistive tech. */
  error?: string;
  id: string;
}

export function Input({
  label,
  hint,
  error,
  id,
  className,
  ...props
}: InputProps) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-neutral-800"
      >
        {label}
      </label>

      <input
        id={id}
        aria-describedby={describedBy}
        aria-invalid={error ? true : undefined}
        className={cn(
          "h-11 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900",
          "placeholder:text-neutral-400",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700",
          error && "border-red-500",
          className,
        )}
        {...props}
      />

      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-sm text-neutral-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}