"use client";

import { TextareaHTMLAttributes } from "react";

interface CustomTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function CustomTextarea({
  id,
  name,
  placeholder,
  value,
  onChange,
  ...props
}: CustomTextareaProps) {
  return (
    <div className="mb-6">
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={props.rows || 4}
        className="w-full bg-white px-4 py-2 border border-azul placeholder-azul rounded-lg"
        required
        {...props}
      />
    </div>
  );
}
