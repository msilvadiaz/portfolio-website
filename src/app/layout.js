import "./globals.css";
import Navbar from "./components/Navbar";
import { seo } from "@/data/data";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";
import { Dancing_Script, Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
    preload: true,
});

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    variable: "--font-script",
    display: "swap",
    preload: true,
    weight: ["500", "600", "700"],
});

export const metadata = {
    title: `${seo.title}`,
    icons: {
        icon: [{ url: "/favicon.ico" }],
    },
    description: `${seo.description}`,
    keywords: `${seo.keywords}`,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light" data-scroll-behavior="smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={`${inter.variable} ${dancingScript.variable} antialiased overflow-auto`}>
                <PageTransition>
                    <div className="w-[100%] md:w-[700px] m-auto">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </PageTransition>
            </body>
        </html>
    );
}
