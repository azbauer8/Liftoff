"use client"

import * as React from "react"
import { Button } from "@nextui-org/react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === "system") {
      setTheme(systemTheme === "light" ? "dark" : "light")
    } else {
      setTheme("system")
    }
  }

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label="Theme toggle"
      onClick={toggleTheme}
    >
      <SunIcon className="size-[1.2rem] scale-100 dark:hidden" />
      <MoonIcon className="hidden size-[1.2rem] dark:block" />
    </Button>
  )
}
