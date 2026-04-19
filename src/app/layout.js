import "./globals.css";
import { Marck_Script } from "next/font/google";
import Navbar from "./components/Navbar";
import { seo } from "@/data/data";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";


const marckScript = Marck_Script({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
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
            <body className={`${marckScript.className} antialiased overflow-auto`}>
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
