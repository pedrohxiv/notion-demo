"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IconPickerProps {
  asChild?: boolean;
  children: React.ReactNode;
  onChange: (icon: string) => void;
}

export const IconPicker = ({
  asChild,
  children,
  onChange,
}: IconPickerProps) => {
  const { resolvedTheme } = useTheme();
  const themeMap = { dark: Theme.DARK, light: Theme.LIGHT };
  const theme = themeMap[(resolvedTheme || "light") as keyof typeof themeMap];

  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent className="p-0 w-full border-none shadow-none">
        <EmojiPicker
          height={350}
          onEmojiClick={(data) => onChange(data.emoji)}
          theme={theme}
        />
      </PopoverContent>
    </Popover>
  );
};
