"use client";

import { Listbox } from "@headlessui/react";
import { ChevronDown, Check } from "lucide-react";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string; disabled?: boolean }[];
}

export default function CustomSelect({
  value,
  onChange,
  options,
}: CustomSelectProps) {
  // Encontre a opção que tem o mesmo "value" e mostre o seu "label"
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="w-full mb-6">
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="w-full flex justify-between items-center px-4 py-2 border border-azul rounded-lg text-black bg-white shadow-sm">
            {selectedOption ? selectedOption.label : "Selecione uma opção"}
            <ChevronDown className="w-4 h-4 text-azul" />
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-full bg-white border border-azul rounded-lg shadow-lg z-10 max-h-60 overflow-auto">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                value={option.value}
                disabled={option.disabled}
                className={({ active, selected }) =>
                  `cursor-pointer px-4 py-2 ${
                    active
                      ? "bg-azul text-white"
                      : selected
                      ? "bg-azul/70 text-white"
                      : "text-azul"
                  }`
                }
              >
                {({ selected }) => (
                  <div className="flex justify-between items-center">
                    {option.label}
                    {selected && <Check className="w-4 h-4 ml-2" />}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
