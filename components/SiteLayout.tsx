import Navbar from "./Navbar";
import Footer from "./Footer";
import CryptoTicker from "./CryptoTicker";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <CryptoTicker />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
