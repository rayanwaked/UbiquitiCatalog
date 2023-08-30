import "./globals.css";
import type {Metadata} from "next";
import React from "react";
import NavBar from "@/components/navbar/navbar";

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
            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="../public/logo_512.png"></link>
        </head>
        <body>
        <NavBar/>
        {children}
        </body>
        </html>
    )
}
