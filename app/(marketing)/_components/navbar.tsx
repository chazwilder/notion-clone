"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

import Logo from "./logo";
import { ModeToggle } from "@/components/ui/mode-toggle";

const NavBar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex w-full p-7",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2 ">
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
