"use client";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span className="absolute flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#1E2A56] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
          <FaMoon className="text-bold text-[#1E2A56]" />
        </span>
        <MdLightMode className="absolute cursor-pointer rotate-90 scale-0 text-[#f5f0ea] transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ThemeButton;
