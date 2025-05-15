'use client';

import Hero from "@/components/Navbar/page";
import { usePathname } from "next/navigation";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const disableNavbar = ["/input", "/inp", "/inp/galley"];

  if (disableNavbar.includes(pathname.toLowerCase())) {
    return null;
  }

  return <Hero />;
}
