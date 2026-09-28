"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Keeps <html lang> in step with the page language during client-side
// navigation (the server always renders "es" from the root layout; /en and
// /fr pages also mark their content with a lang attribute).
export default function DocumentLang() {
  const pathname = usePathname();
  useEffect(() => {
    const lang = /^\/(en|fr)(\/|$)/.exec(pathname)?.[1] ?? "es";
    document.documentElement.lang = lang;
  }, [pathname]);
  return null;
}
