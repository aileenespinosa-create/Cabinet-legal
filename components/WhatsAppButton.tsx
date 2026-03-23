"use client";

import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();

  const getConfig = () => {
    if (pathname === "/consulta") {
      return {
        text: "Agendar consulta",
        message:
          "Hola, visité Cabinet Legal y me gustaría agendar una consulta.",
      };
    }

    if (pathname === "/registro-de-marcas") {
      return {
        text: "Consultar marca",
        message:
          "Hola, visité Cabinet Legal y me gustaría recibir orientación sobre registro de marcas.",
      };
    }

    if (pathname === "/servicios") {
      return {
        text: "Consultar servicios",
        message:
          "Hola, visité Cabinet Legal y me gustaría recibir orientación sobre sus servicios legales.",
      };
    }

    return {
      text: "Escríbenos",
      message:
        "Hola, visité Cabinet Legal y me gustaría recibir orientación.",
    };
  };

  const { text, message } = getConfig();

  const whatsappUrl = `https://wa.me/18494603517?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
    >
      <div className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:gap-3 sm:px-5">
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></span>

        <div className="relative flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white sm:h-9 sm:w-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="h-4 w-4 text-green-600 sm:h-5 sm:w-5"
            >
              <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2 7.7L0 32l8.6-2.3c2.2 1.2 4.7 1.9 7.4 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-5.1 1.3 1.4-5-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.3 6-13.3 13.3-13.3S29.3 8.7 29.3 16 23.3 28.9 16 28.9zm7.3-9.8c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.7-.2-1 .2s-1.1 1.3-1.4 1.6c-.3.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.7.2-.3.1-.5 0-.7-.1-.2-1-2.3-1.4-3.1-.4-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.4 1.4-1.4 3.3 0 1.9 1.4 3.7 1.6 4 .2.3 2.8 4.3 6.9 6 .9.4 1.7.6 2.3.8 1 .3 1.9.2 2.6.1.8-.1 2.4-1 2.8-2 .3-1 .3-1.8.2-2-.1-.2-.4-.3-.8-.5z" />
            </svg>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/80 sm:block">
              CABINET LEGAL
            </span>
            <span className="text-xs font-semibold text-white sm:text-sm">
              {text}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}