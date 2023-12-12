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
        <div className="w-full relative min-h-screen">
          <LeftSidebar isopen={isopen} setisOpen={setisOpen} />
          <main
            className={`absolute top-0 min-h-screen ${
              isopen
                ? "w-[calc(100%-40px)] left-[40px]"
                : "w-[calc(100%-150px)] left-[150px]"
            }`}
          >
            <Navbar isopen={isopen} />
            <section className="pt-[100px] w-full">{children}</section>
          </main>
        </div>
      </body>
    </html>
  );
}
