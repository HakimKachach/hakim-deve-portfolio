import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hakim Deve | Full Stack Developer Morocco",
  description:
    "Moroccan Full Stack Developer specializing in React.js, Node.js, and WordPress. Building websites, e-commerce platforms, and web apps.",
  keywords: "Moroccan Web Developer, Full Stack Developer Morocco, React Developer Morocco, Web Development",
  openGraph: {
    title: "Hakim Deve | Full Stack Developer Morocco",
    description: "Transforming Ideas into Digital Experiences",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
