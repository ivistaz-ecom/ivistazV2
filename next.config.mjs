/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["docs.ivistaz.com"], // Add the external domain here
    },
};

export default nextConfig;