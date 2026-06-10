import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      const dark = savedTheme === "dark";

      setIsDarkMode(dark);

      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setIsDarkMode(prefersDark);

      if (prefersDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;

    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={cn(
        "h-10 w-10 rounded-full",
        "border border-border",
        "bg-card/80 backdrop-blur-md",
        "flex items-center justify-center",
        "transition-all duration-300",
        "hover:scale-110 hover:border-primary",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun
          size={22}
          className="text-yellow-400 transition-transform duration-300 rotate-0"
        />
      ) : (
        <Moon
          size={22}
          className="text-blue-500 transition-transform duration-300"
        />
      )}
    </button>
  );
};