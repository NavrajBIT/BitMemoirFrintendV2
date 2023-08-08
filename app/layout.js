"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/subcomponents/navbar/navbar";
import Footer from "@/components/subcomponents/footer/footer";
import { GoogleOAuthProvider, GoogleLogin,useGoogleLogin } from '@react-oauth/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitmemoir: Verified Certificates over Blockchain",
  description: "Transforming the education system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
      <GoogleOAuthProvider clientId="804423343303-6umuo0t8g73cbr68m867qvm8q87hjs3d.apps.googleusercontent.com">
        <Navbar />
        {children}
        <Footer />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
