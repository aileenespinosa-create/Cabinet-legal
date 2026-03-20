import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1720",
          color: "#f6f1e8",
          padding: "60px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "28px",
            border: "1px solid rgba(198,166,107,0.75)",
            borderRadius: "28px",
          }}
        />

        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c6a66b",
          }}
        >
          Cabinet Legal
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 600,
            }}
          >
            Asesoría legal estratégica para decisiones de alto impacto
          </div>

          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(246,241,232,0.88)",
            }}
          >
            Firma boutique para empresas, inversionistas y clientes privados en
            República Dominicana.
          </div>
        </div>

        <div
          style={{
            fontSize: 22,
            color: "#c6a66b",
          }}
        >
          www.cabinetlegal.com.do
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}