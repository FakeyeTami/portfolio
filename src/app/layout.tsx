import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-bricolage",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Tamilore Fakeye | Portfolio",
    description: "Showcasing my skills in web development.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${bricolage.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
