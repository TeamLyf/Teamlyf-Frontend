"use client";
import { useState } from "react";

import "../globals.css";
import Navbar from "@/components/shared/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar";

export default function RootLayout({ children }) {
  const [isopen, setisOpen] = useState(true);
  return (
    <html lang="en">
      <body className="bg-dark-3">
        <div className="w-full h-full">
          <Navbar />
          <div className="w-full relative">
            <LeftSidebar isopen={isopen} setisOpen={setisOpen} />
            <main
              className={`absolute top-20 ${
                isopen
                  ? "w-[calc(100%-50px)] left-[50px]"
                  : "w-[calc(100%-200px)] left-[200px]"
              }`}
            >
              <section className="w-full">{children}</section>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
