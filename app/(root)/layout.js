import "../globals.css";
import Navbar from "@/components/shared/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark-3">
        <div className="max-w-7xl">
          <Navbar />
          <main className="main-container">
            <LeftSidebar />
            <section>
              <div className="w-full max-w-4xl">{children}</div>
              <RightSidebar />
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}
