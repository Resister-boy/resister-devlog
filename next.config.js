/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PROJECT_DATABASE_ID: process.env.PROJECT_DATABASE_ID,
    PROJECT_DATABASE_APIKEY: process.env.PROJECT_DATABASE_APIKEY
  }
}

module.exports = nextConfig
