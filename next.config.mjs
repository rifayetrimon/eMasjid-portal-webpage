/** @type {import('next').NextConfig} */
const nextConfig = {
  //   basePath: "/masjid",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  output: "standalone",
};

export default nextConfig;
