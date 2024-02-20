"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";
import { Skeleton } from "@/components/ui/skeleton";

export default function ThemeSwitch() {
  const { setTheme, theme } = useTheme();
  const isClient = useIsClient();

  // create skeleton
  if (!isClient)
    return (
      // skeleton
      <Skeleton className="fixed bottom-5 right-5 w-[3rem] h-[3rem] rounded-full hover:scale-[1.15] active:scale-105 transition-all bg-black/30" />
    );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border  border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-50 border-primary"
      onClick={() => toggleTheme()}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
