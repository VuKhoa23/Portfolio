import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/header";

export const metadata = {
  title: "Khoa Vu",
  description: "Porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children} 
        <BootstrapClient />
      </body>
    </html>
  );
}
