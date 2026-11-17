/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/121customsdirect', destination: '/', permanent: true },
      { source: '/121customsdirect/about', destination: '/about', permanent: true },
      { source: '/121customsdirect/contact', destination: '/contact', permanent: true },
      { source: '/121customsdirect/solutions', destination: '/solutions', permanent: true },
      {
        source: '/121customsdirect/solutions/customsdirect',
        destination: '/solutions/customsdirect',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
