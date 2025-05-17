import React from "react";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

function GoHome() {
  return (
    <Link href="/" passHref>
      <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
        <ChevronLeft className="size-6" />
      </Button>
    </Link>
  );
}

export default GoHome;
