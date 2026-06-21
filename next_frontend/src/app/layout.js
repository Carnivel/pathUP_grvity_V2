import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

// Configure production metadataBase to ensure canonicals and OpenGraph images resolve to absolute URLs
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'))),
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
        <SpeedInsights />
      </body>
    </html>
  );
}
