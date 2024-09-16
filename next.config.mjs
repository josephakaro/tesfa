/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ripoti.net',
        port: '',
        pathname: '/newapp/assets/images/login.jpg',
      },
    ],
  },
}

export default nextConfig;
