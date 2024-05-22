import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '700'] })

export const metadata: Metadata = {
    title: 'Ale',
    description: 'Portfólio de Alexandre Rodrigues Macedo de Oliveira',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    )
}
