import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Roboto_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Razvita | Learn IT Skills That Matter",
    description:
        "Practical tech courses in programming, cybersecurity, and app development — designed for real-world success. Learn in small groups, guided by experts.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-32x32.png",
        apple: "/apple-touch-icon.png",
    },
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* <title>Razvita | Learn IT Skills That Matter</title> */}
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* <meta
                    name="description"
                    content="Practical tech courses in programming, cybersecurity, and app development — designed for real-world success. Learn in small groups, guided by experts."
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                /> */}
                {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}

                <link rel="stylesheet" href="/css/vendors.min.css" />
                <link rel="stylesheet" href="/css/icon.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/responsive.css" />
                <link rel="stylesheet" href="/demos/elearning/elearning.css" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable}`}
                data-mobile-nav-trigger-alignment="right"
                data-mobile-nav-style="modern"
                data-mobile-nav-bg-color="#313e3b"
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
