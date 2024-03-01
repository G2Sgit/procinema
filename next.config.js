/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "video.procinemastudio.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};


module.exports = nextConfig;
