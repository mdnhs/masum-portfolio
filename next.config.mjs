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
      {
        protocol: "https",
        hostname: "kyjrlrpxvybmzcxj.public.blob.vercel-storage.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

export default nextConfig;
