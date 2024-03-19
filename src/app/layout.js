"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "~/components/Navbar/Navbar";
import { useState } from "react";
import { UserContext } from "~/support/context/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Footer from "~/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex min-h-screen  w-full flex-col justify-between">
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
            <div className="flex h-max items-center justify-center bg-pampas lg:px-20">
              <ToastContainer />
              {children}
            </div>
            {/* <div className="bottom-0 w-[100%]">
            <Footer />
          </div> */}
          </div>
        </body>
      </html>
    </UserContext.Provider>
  );
}
