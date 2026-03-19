"use client";

export default function WhatsAppButton() {
  const phone = "18093302232"; // pon tu número en formato internacional, sin + ni espacios
  const message = encodeURIComponent(
    "Hola, me gustaría agendar una consulta con Cabinet Legal."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg transition hover:scale-[1.02]"
    >
      <span className="text-sm font-semibold">WhatsApp</span>
    </a>
  );
}