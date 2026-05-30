const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows any HTTPS hostname
      },
      {
        protocol: "http",
        hostname: "**", // Allows any HTTP hostname
      },
    ],
  },
};

export default nextConfig;
