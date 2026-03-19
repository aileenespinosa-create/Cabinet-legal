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
              alt="Registro de marca en República Dominicana"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />
          </div>

          {/* Contenido */}
          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="eyebrow">Cabinet Legal</div>

            <h1 className="mt-4 text-4xl font-semibold text-[#0f2740] md:text-5xl">
              Cómo registrar una marca en República Dominicana (2026)
            </h1>

            <div className="article-content mt-8">

              <p>
                Si tienes un negocio o estás construyendo una marca, registrarla en República Dominicana no es opcional: es lo que evita que terceros utilicen tu nombre, tu identidad o incluso tu reputación.
              </p>

              <p>
                En la práctica, muchos negocios operan sin protección legal y descubren el problema cuando ya es tarde. Registrar tu marca a tiempo te permite asegurar exclusividad y evitar conflictos.
              </p>

              <h2>¿Qué es una marca y por qué debes registrarla?</h2>
              <p>
                Una marca es el signo que identifica tus productos o servicios en el mercado. Puede ser un nombre, un logo o una combinación de ambos.
              </p>

              <p>
                El registro te otorga derechos exclusivos de uso en República Dominicana y te permite impedir que terceros utilicen signos similares.
              </p>

              <h2>¿Dónde se registra una marca en República Dominicana?</h2>
              <p>
                El registro se realiza ante la Oficina Nacional de la Propiedad Industrial (ONAPI), entidad encargada de administrar los derechos de propiedad industrial en el país.
              </p>

              <h2>Requisitos para registrar una marca</h2>
              <ul>
                <li>Nombre o signo distintivo</li>
                <li>Clasificación de productos o servicios</li>
                <li>Datos del titular</li>
                <li>Pago de tasas oficiales</li>
              </ul>

              <h2>Proceso de registro paso a paso</h2>
              <ol>
                <li>Búsqueda de disponibilidad</li>
                <li>Presentación de solicitud en ONAPI</li>
                <li>Examen formal</li>
                <li>Publicación en boletín oficial</li>
                <li>Periodo de oposición</li>
                <li>Emisión del certificado</li>
              </ol>

              <h2>Errores comunes al registrar una marca</h2>
              <ul>
                <li>No verificar disponibilidad previamente</li>
                <li>Elegir mal la clasificación</li>
                <li>No responder requerimientos de ONAPI</li>
              </ul>

              <p>
                Estos errores pueden provocar rechazo o retrasos importantes en el proceso.
              </p>

              <h2>¿Necesitas asesoría legal?</h2>
              <p>
                Aunque el proceso puede iniciarse sin abogado, una asesoría adecuada reduce riesgos, evita conflictos y aumenta las probabilidades de éxito desde el inicio.
              </p>

              <div className="mt-12 rounded-2xl bg-[#0f2740] p-8 text-white">
                <h3 className="text-xl font-semibold">
                  ¿Quieres registrar tu marca correctamente desde el inicio?
                </h3>

                <p className="mt-3 text-slate-200">
                  En Cabinet Legal evaluamos tu caso, verificamos disponibilidad y gestionamos todo el proceso ante ONAPI para que tu marca esté protegida sin riesgos.
                </p>

                <div className="mt-6 flex gap-4">
                  <Link
                    href="/consulta"
                    className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0f2740]"
                  >
                    Solicitar consulta
                  </Link>

                  <Link
                    href="/blog/cuanto-cuesta-registrar-una-marca"
                    className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white"
                  >
                    Ver costos del registro
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