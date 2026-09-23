"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [nearFooter, setNearFooter] = useState(false);

  // Fade the floating bubble out once the footer (or the final CTA card
  // right above it) starts entering the viewport, so it stops covering
  // the "Solicitar consulta" / "Solicitar presupuesto" buttons and the
  // footer contact info on short pages and on mobile.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: "0px 0px 160px 0px", threshold: 0 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const isFrench = pathname === "/fr" || pathname.startsWith("/fr/");

  const getConfig = () => {
    if (isEnglish) {
      if (pathname === "/en/consulta") {
        return {
          text: "Book a consultation",
          message:
            "Hello, I visited Cabinet Legal and would like to book a consultation.",
        };
      }
      if (pathname === "/en/servicios") {
        return {
          text: "Ask about our services",
          message:
            "Hello, I visited Cabinet Legal and would like guidance on your legal services.",
        };
      }
      if (pathname === "/en/inversion-extranjera") {
        return {
          text: "Ask about investing",
          message:
            "Hello, I'm a foreign investor and would like legal guidance on purchasing property in the Dominican Republic.",
        };
      }
      return {
        text: "Message us",
        message: "Hello, I visited Cabinet Legal and would like guidance.",
      };
    }

    if (isFrench) {
      if (pathname === "/fr/consulta") {
        return {
          text: "Réserver une consultation",
          message:
            "Bonjour, j'ai visité le site de Cabinet Legal et je souhaite réserver une consultation.",
        };
      }
      if (pathname === "/fr/servicios") {
        return {
          text: "Nos services",
          message:
            "Bonjour, j'ai visité le site de Cabinet Legal et je souhaite des informations sur vos services juridiques.",
        };
      }
      if (pathname === "/fr/inversion-extranjera") {
        return {
          text: "Question sur un investissement",
          message:
            "Bonjour, je suis un investisseur étranger et je souhaite obtenir un accompagnement juridique pour l'achat d'un bien immobilier en République Dominicaine.",
        };
      }
      return {
        text: "Écrivez-nous",
        message:
          "Bonjour, j'ai visité le site de Cabinet Legal et je souhaite obtenir des renseignements.",
      };
    }

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

    if (pathname === "/inversion-extranjera") {
      return {
        text: "Consultar inversión",
        message:
          "Hola, soy inversionista extranjero y me gustaría recibir orientación legal para comprar una propiedad en República Dominicana.",
      };
    }

    return {
      text: "Escríbenos",
      message:
        "Hola, visité Cabinet Legal y me gustaría recibir orientación.",
    };
  };

  const { text, message } = getConfig();

  const whatsappUrl = `https://wa.me/18295420615?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={nearFooter}
      className={`fixed bottom-4 right-4 z-50 transition-opacity duration-300 sm:bottom-6 sm:right-6 ${
        nearFooter ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
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
