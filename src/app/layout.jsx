import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: {
        default: 'Beranda | Teknik Komputer ITS',
        template: '%s | Teknik Komputer ITS',
    },
    description:
        'Teknik Komputer ITS mengajarkan disiplin ilmu yang memadukan software dari bidang ilmu komputer dengan hardware dari bidang komputer, elektronika, dan telekomunikasi untuk diaplikasikan pada sistem komputasi modern (Cloud Computing, Wireless Sensor Network, IoT/ Internet of Things, Wearable Device, dan Embedded System) maupun pada peralatan yang dikontrol oleh komputer, dan jaringan dari perangkat cerdas, serta Robotika. Teknik Komputer juga mempelajari pengolahan data skala besar (big data), keamanan data dan jaringan (network security), dan komputasi multimedia.',
    icons: {
        icon: [
            {
                url: '/favicon/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                url: '/favicon/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/favicon/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                url: '/favicon/favicon.ico',
                sizes: 'any',
            },
        ],
        apple: {
            url: '/favicon/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
