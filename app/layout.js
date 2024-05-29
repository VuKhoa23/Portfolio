import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/header";
import backgroundImg from "../public/bg.png"
import Image from "next/image";

export const metadata = {
  title: "Khoa Vu",
  description: "Porfolio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg">
          <Image
            src={backgroundImg}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <Header />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
