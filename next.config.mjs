const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ifxpayments.com",
      },
    ],
  },
};

export default nextConfig;
