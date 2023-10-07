/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: {
            domains: ["cdn.imagin.studio"]
        },
        typedRoutes: true
      },
    
}

module.exports = nextConfig