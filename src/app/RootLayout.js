import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { inter } from "./layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
