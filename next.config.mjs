/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    PORT: process.env.PORT,
    URL_API: process.env.URL_API,
  },
}

export default nextConfig
