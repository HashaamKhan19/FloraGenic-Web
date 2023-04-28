/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "images.unsplash.com",
      "i.imgur.com",
    ],
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY:
      "pk_test_51MnjE4Avea6OUZkeRwqYuSnjKiHXg4t930iUe5MncU7qutZFiI6rOiUcqhvgMQ0JW80upnRkXgOT7ChrXDYOnmXD00SYlp8Djc",
  },
};

module.exports = nextConfig;
