import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'mQuizz',
        short_name: 'mQ',
        description: 'A Progressive mQuizz.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon-144x144.png',
                sizes: '144x144',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        screenshots: [
            {
                src: "/mq-pi.vercel.app_.png",
                sizes: "800x1680",
                type: "image/png",
                form_factor: 'wide',
            }
        ]
    }
}