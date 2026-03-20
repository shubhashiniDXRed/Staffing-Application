"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FilterTabsProps<T extends string> {
  options: { value: T; label: string }[]
  defaultValue: T
  onChange?: (value: T) => void
}

export function FilterTabs<T extends string>({
  options,
  defaultValue,
  onChange,
}: FilterTabsProps<T>) {
  const [active, setActive] = useState<T>(defaultValue)

  const handleChange = (value: T) => {
    setActive(value)
    onChange?.(value)
  }

  return (
    <div className="flex gap-2">
      {options.map((opt) => (
        <Button
          key={opt.value}
          variant={active === opt.value ? "default" : "outline"}
          size="sm"
          onClick={() => handleChange(opt.value)}
        >
          {opt.label}
        </Button>
      ))}
    </div>
  )
}
