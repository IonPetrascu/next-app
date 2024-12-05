"use client";
import { Search } from "lucide-react";
import { Input } from "../ui";
import React from "react";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [query, setQuery] = React.useState<string>("");
  const [focused, setFocused] = React.useState<boolean>(false);

  return (
    <div
      className={cn(
        className,
        "flex items-center gap-3 py-2 px-4 w-[166px] rounded bg-[#f4f4f5]"
      )}
    >
      <Input
        className="outline-none w-full bg-[#f4f4f5]"
        type="text"
        placeholder="Search"
        onFocus={() => setFocused(true)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Search size={16} />
    </div>
  );
};
