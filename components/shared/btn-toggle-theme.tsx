"use client";
import { cn } from "@/lib/utils";
import { Switch } from "../ui";
import { useState } from "react";

interface Props {
  className?: string;
}

export const BtnToggleTheme: React.FC<Props> = ({ className }) => {
  const [themeLight, setThemeLight] = useState(true);

  const toggleTheme = () => {
    setThemeLight((theme) => !theme);
  };

  return (
    <div className={cn(className, "")}>
      <Switch
        checked={themeLight}
        onCheckedChange={toggleTheme}
        aria-checked={themeLight}
      />
    </div>
  );
};
