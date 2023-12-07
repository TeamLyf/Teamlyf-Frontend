import "../globals.css";
import Navbar from "@/components/shared/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className="bg-dark-3">
        <div className="max-w-7xl">
          <Navbar />
          <main className="main-container">
            <LeftSidebar />
            <section className='pt-20 w-full'>
              {children}
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}
