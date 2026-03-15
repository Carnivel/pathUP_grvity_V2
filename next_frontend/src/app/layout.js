import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

if (!process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error("NEXT_PUBLIC_SITE_URL is required to generate absolute production URLs for metadataBase.");
}

// Configure production metadataBase to ensure canonicals and OpenGraph images resolve to absolute URLs
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "PathUp - Find Your Dream College",
    template: "%s | PathUp", // Applies "My Page | PathUp" automatically to children
  },
  description: "Find the best colleges, courses, and career paths precisely tailored to your ambitions.",
  openGraph: {
    siteName: 'PathUp',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Navbar />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
