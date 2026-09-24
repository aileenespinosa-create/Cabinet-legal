import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The investment guide PDFs live outside /public so they can only be
  // downloaded through the signed link sent after email confirmation.
  async redirects() {
    return [
      { source: "/litigios-inversionistas-extranjeros", destination: "/servicios/litigacion-y-defensa-judicial", permanent: true },
    ];
  },
  outputFileTracingIncludes: {
    "/api/guia/archivo": ["./private/guias/**/*"],
  },
};

export default nextConfig;
