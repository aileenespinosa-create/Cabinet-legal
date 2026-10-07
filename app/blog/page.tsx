import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";
import { blogPath } from "@/lib/blog";
import { articleByKey } from "@/lib/blogArticles";

export const metadata: Metadata = {
  title: "Blog jurídico: guías legales en República Dominicana",
  description:
    "Guías jurídicas de Cabinet Legal para usted: registro de marcas, inversión inmobiliaria, constitución de empresas y residencia en República Dominicana.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/blog",
    languages: {
      "x-default": "https://cabinetlegal.com.do/blog",
      "es-DO": "https://cabinetlegal.com.do/blog",
      en: "https://cabinetlegal.com.do/en/blog",
      fr: "https://cabinetlegal.com.do/fr/blog",
    },
  },
};

const articles = [
  {
    href: "/blog/comprar-propiedad-republica-dominicana-extranjero",
    title: "Cómo comprar propiedad en República Dominicana siendo extranjero",
    description:
      "Requisitos, debida diligencia (due diligence) del título, cierre notarial y errores que usted debe evitar antes de firmar.",
    image: "/blog-legal.jpg",
  },
  {
    href: "/blog/residencia-por-inversion-republica-dominicana",
    title: "Residencia por inversión en República Dominicana: guía 2026",
    description:
      "Las tres vías más comunes para obtener la residencia, plazos realistas y los documentos que suelen generar demoras.",
    image: "/blog-legal.jpg",
  },
  {
    href: "/blog/abrir-empresa-republica-dominicana-extranjero",
    title: "Cómo abrir una empresa en República Dominicana siendo extranjero",
    description:
      "SRL o SA, el proceso paso a paso y los errores que encarecen la sociedad una vez constituida.",
    image: "/blog-legal.jpg",
  },
  {
    href: "/blog/como-registrar-una-marca-republica-dominicana",
    title: "Cómo registrar una marca en República Dominicana (2026)",
    description:
      "Guía práctica sobre requisitos, el procedimiento ante ONAPI, plazos, errores comunes y recomendaciones clave.",
    image: "/blog-legal.jpg",
  },
  {
    href: "/blog/cuanto-cuesta-registrar-una-marca",
    title: "Cuánto cuesta registrar una marca en República Dominicana",
    description:
      "Le explicamos por qué el costo depende del tipo de marca, el número de clases y la estructura del expediente.",
    image: "/blog-legal.jpg",
  },
];

export default function BlogPage() {
  const nuevos = [articleByKey("registro-inversion")!, articleByKey("pacto-socios")!, articleByKey("poder")!, articleByKey("titulo")!];
  const items = [
    ...nuevos.map((n) => ({ href: blogPath(n, "es"), title: n.text.es!.h1, description: n.text.es!.description })),
    ...articles.map(({ href, title, description }) => ({ href, title, description })),
  ];
  return <BlogIndex lang="es" items={items} />;
}
