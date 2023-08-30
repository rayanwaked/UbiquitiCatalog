import "./globals.css";
import type {Metadata} from "next";
import NavBar from "@/components/navbar/navbar";
import React from "react";

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
        <div style={{position: "sticky", top: 0, zIndex: 100}}>
            <NavBar/>
        </div>
        {children}
        </body>
        </html>
    )
}
