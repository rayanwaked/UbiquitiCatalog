import "./globals.css"
import type {Metadata} from "next"

export const metadata: Metadata = {
    title: "Ubiquiti Catalog",
    description: "Browse and learn about Ubiquiti's products",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>Ubiquiti Catalog</title>
            <link rel="manifest" href="/manifest.json"/>
        </head>
        <body>{children}</body>
        </html>
    )
}
