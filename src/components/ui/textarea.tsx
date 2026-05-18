"use client";
import * as React from "react";
import { cn } from "@/lib/cn";

type Props = {
  label: string;
  id: string;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ label, id, className, ...rest }: Props) {
  return (
    <div className={cn("relative pt-6", className)}>
      <textarea
        id={id}
        placeholder=" "
        rows={3}
        className="field-input w-full border-b-2 pb-1 text-xl leading-7 bg-transparent text-white-500 outline-none border-black-300 focus:border-black-400 resize-none"
        {...rest}
      />
      <label htmlFor={id} className="field-label">
        {label}
      </label>
    </div>
  );
}
