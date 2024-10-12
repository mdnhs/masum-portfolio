/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mdnhs.github.io",
        port: "",
        pathname: "/masum-json/**",
      },
    ],
  },
};

export default nextConfig;
