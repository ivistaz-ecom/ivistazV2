/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["docs.ivistaz.com"], // Add the external domain here
    },
    async redirects() {
      return [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "www.ivistaz.com",
            },
          ],
          destination: "https://ivistaz.com/:path*",
          permanent: true,
        },
      ];
    },
};

export default nextConfig;