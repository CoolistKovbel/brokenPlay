/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'ipfs.io',
          },
        ]
    }
}

module.exports = nextConfig
