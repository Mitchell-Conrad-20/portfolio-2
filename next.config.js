/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    output: 'export',
    webpack: (config) => {
        config.resolve.alias.canvas = false;
    
        return config;
    },
}