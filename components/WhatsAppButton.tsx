"use client";

export default function WhatsAppButton() {
  const phone = "18093302232"; // cambia esto por tu número real
  const message = encodeURIComponent(
    "Hola, visité Cabinet Legal y me gustaría agendar una consulta."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.03]"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/18">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/20" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative h-5 w-5 fill-current"
        >
          <path d="M19.11 17.21c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.19-.32.21-.6.07-.28-.14-1.16-.43-2.2-1.37-.81-.72-1.35-1.6-1.51-1.88-.16-.28-.02-.43.12-.57.13-.13.28-.32.41-.48.14-.16.18-.28.28-.46.09-.19.05-.35-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.52-.45-.45-.62-.46h-.53c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.19 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
          <path d="M16.03 3C8.85 3 3 8.72 3 15.79c0 2.26.61 4.46 1.78 6.39L3 29l6.99-1.82a13.18 13.18 0 0 0 6.04 1.46h.01C23.2 28.64 29 22.92 29 15.85 29 8.78 23.2 3 16.03 3zm0 23.43h-.01a10.94 10.94 0 0 1-5.57-1.52l-.4-.24-4.15 1.08 1.11-4.02-.26-.41a10.68 10.68 0 0 1-1.65-5.67c0-5.94 4.91-10.77 10.94-10.77 6.03 0 10.93 4.83 10.93 10.77 0 5.95-4.9 10.78-10.93 10.78z" />
        </svg>
      </span>

      <span className="flex flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-[0.18em] text-white/80">
          Cabinet Legal
        </span>
        <span className="text-sm font-semibold">Escríbenos</span>
      </span>
    </a>
  );
}