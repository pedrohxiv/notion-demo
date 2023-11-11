import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image alt="Logo" height="40" src="/logo.svg" width="40" />
      <p className={cn("font-semibold", poppins.className)}>Notion</p>
    </div>
  );
};
