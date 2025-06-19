import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/HomeComponents/Header";
import Footer from "@/components/HomeComponents/Footer";
// export const metadata = {
  
// }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body
      
      >
        {children}
      </body>
      <Footer/>
    </html>
  );
}
