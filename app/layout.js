import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/HomeComponents/Header";
import Footer from "@/components/HomeComponents/Footer";
export const metadata = {
  //metadataBase: new URL("https://www.nautilusshipping.com"),
  robots: "index, follow",
  // title:
  //   "Ship Management Company, Vessel Management Services | Nautilus Shipping",
  // description: "Delivering excellence in technical and crew management",
  // verification: {
  //   google: "googled87b13e1b76e2421", // ✅ This is the cleanest way
  // },
  // alternates: {
  //   canonical: "https://www.nautilusshipping.com", // Add the canonical URL here
  // },
}
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
