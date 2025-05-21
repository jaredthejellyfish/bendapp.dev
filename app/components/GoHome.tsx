import React from "react";
import { Button } from "~/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "../lib/utils";

function GoHome({ showText = false }: { showText?: boolean }) {
  return (
    <Link href="/" passHref>
      <Button
        variant="ghost"
        size={!showText ? "icon" : "default"}
        className="fixed top-4 left-4 z-50"
      >
        <ChevronLeft className="size-6" />
        <span className={cn(!showText && "sr-only")}>Go home</span>
      </Button>
    </Link>
  );
}

export default GoHome;
