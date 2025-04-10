"use client";

import { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInput({
  id,
  name,
  placeholder,
  value,
  onChange,
  ...props
}: CustomInputProps) {
  return (
    <div className="mb-6">
      <input
        type={props.type || "text"}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-white px-4 py-2 border border-azul placeholder-azul rounded-lg"
        required
        {...props}
      />
    </div>
  );
}
