import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs Blog",
  description: "Create and Share your blogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="w-[1536px] flex flex-col justify-between  mx-auto h-screen  w-screen sm:p-0">
        <Navbar />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  );
}
