import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/header";
import bg from "../public/images/bg.png"
import Image from "next/image";

export const metadata = {
  title: "Khoa Vu",
  description: "Porfolio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover'
      }}>
        <Header />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
