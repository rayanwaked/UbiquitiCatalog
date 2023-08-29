/** @type {import('next').NextConfig} */
const nextConfig = {}
const withPWA = require('next-pwa');

module.exports = nextConfig

// module.exports = {
//     images: {
//         domains: ['static.ui.com'],
//     },
// };

module.exports = withPWA({
    pwa: {
        dest: 'public',
    },
    images: {
        domains: ['static.ui.com'],
    },
});