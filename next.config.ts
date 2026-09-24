import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The investment guide PDFs live outside /public so they can only be
  // downloaded through the signed link sent after email confirmation.
  outputFileTracingIncludes: {
    "/api/guia/archivo": ["./private/guias/**/*"],
  },
};

export default nextConfig;
