import Image from "next/image";
import Link from "next/link";

export default function Article() {
  return (
    <main className="min-h-screen">
      <article className="container-legal py-16 md:py-20">
        <div className="card-legal overflow-hidden">

          {/* Imagen */}
          <div className="relative h-[280px] md:h-[360px]">
            <Image
              src="/legal-hero.jpg"
              alt="Costo de registrar una marca en República Dominicana"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />
          </div>

          {/* Contenido */}
          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="eyebrow">Cabinet Legal</div>

            <h1 className="mt-4 text-4xl font-semibold text-[#0f2740] md:text-5xl">
              Cuánto cuesta registrar una marca en República Dominicana
            </h1>

            <div className="article-content mt-8">

              <p>
                Una de las preguntas más frecuentes al iniciar el proceso de registro de una marca en República Dominicana es cuánto cuesta. Sin embargo, a diferencia de otros trámites, el costo no es fijo.
              </p>

              <p>
                El valor del registro depende de varios factores específicos de cada caso, por lo que es importante analizar correctamente la situación antes de iniciar el proceso.
              </p>

              <h2>¿De qué depende el costo del registro?</h2>

              <p>
                El costo de registrar una marca ante la Oficina Nacional de la Propiedad Industrial (ONAPI) varía principalmente en función de los siguientes elementos:
              </p>

              <ul>
                <li>
                  <strong>Tipo de marca:</strong> si se trata de una marca denominativa, mixta o figurativa.
                </li>
                <li>
                  <strong>Cantidad de clases:</strong> cada clase adicional implica un costo independiente.
                </li>
                <li>
                  <strong>Actividad comercial:</strong> la clasificación correcta influye directamente en el alcance del registro.
                </li>
                <li>
                  <strong>Complejidad del caso:</strong> posibles oposiciones o requerimientos de ONAPI pueden generar costos adicionales.
                </li>
              </ul>

              <h2>Costos oficiales y consideraciones</h2>

              <p>
                ONAPI establece tasas oficiales para la solicitud, publicación y emisión del certificado de registro. No obstante, el costo total del proceso dependerá de cómo se estructure la solicitud y del número de clases involucradas.
              </p>

              <p>
                Una estrategia mal definida puede generar gastos adicionales o incluso el rechazo del registro.
              </p>

              <h2>¿Por qué no es recomendable estimar el costo sin evaluación?</h2>

              <p>
                Intentar determinar el costo sin una revisión previa puede llevar a errores en la clasificación, duplicidad de registros o conflictos con marcas existentes.
              </p>

              <p>
                Por esta razón, es recomendable realizar una evaluación legal antes de iniciar el proceso.
              </p>

              <h2>Recomendación profesional</h2>

              <p>
                Cada marca requiere un análisis individual. Evaluar correctamente el tipo de marca, la actividad comercial y el alcance de protección es lo que permite determinar el costo real del registro.
              </p>

              {/* BLOQUE DE CONVERSIÓN */}
              <div className="mt-12 rounded-2xl bg-[#0f2740] p-8 text-white">

                <h3 className="text-xl font-semibold">
                  ¿Quieres conocer el costo exacto de registrar tu marca?
                </h3>

                <p className="mt-3 text-slate-200">
                  En Cabinet Legal analizamos tu caso, verificamos la disponibilidad de tu marca y te indicamos el costo real del proceso según tu actividad y el alcance de protección que necesitas.
                </p>

                <div className="mt-6 flex gap-4">
                  <Link
                    href="/consulta"
                    className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0f2740]"
                  >
                    Solicitar evaluación
                  </Link>

                  <Link
                    href="/blog/como-registrar-una-marca-republica-dominicana"
                    className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white"
                  >
                    Ver guía completa
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </article>
    </main>
  );
}