/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PROJECT_DATABASE_ID: process.env.PROJECT_DATABASE_ID,
    PROJECT_DATABASE_APIKEY: process.env.PROJECT_DATABASE_APIKEY,
    BLOG_DATABASE_ID: process.env.BLOG_DATABASE_ID,
    BLOG_DATABASE_APIKEY: process.env.BLOG_DATABASE_APIKEY
  },
  images: {
    domains: [
      "gateway.pinata.cloud",
      "s3.us-west-2.amazonaws.com"
    ]
  }
}

module.exports = nextConfig
