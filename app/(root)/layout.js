import Navbar from "@/components/shared/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <LeftSidebar />
          <section>
            <div>{children}</div>
          </section>
          <RightSidebar />
        </main>
      </body>
    </html>
  );
}
