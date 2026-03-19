"use client";

import { useState } from "react";

export function ImageWithFallback({
  src,
  alt,
  className,
  fallback,
}: {
  src: string;
  alt: string;
  className: string;
  fallback: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

export function LogoFallback() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#D9BE3F] bg-[#fffdf5] text-xl font-semibold text-[#0A3A5A]">
        CL
      </div>
      <div>
        <div className="text-xl font-semibold tracking-wide text-[#0A3A5A]">Cabinet Legal</div>
        <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Attorneys at law</div>
      </div>
    </div>
  );
}

export function PortraitFallback({ label }: { label: string }) {
  return (
    <div className="mx-auto flex aspect-[4/5] w-full max-w-[320px] items-center justify-center rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 text-center text-sm text-slate-400">
      {label}
    </div>
  );
}