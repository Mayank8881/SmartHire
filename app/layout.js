import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./Provider";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SmartHire",
  description: "Resume parsing and interview prepration platform",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider> 
          <Navbar />
          {children}
        </AuthProvider>
       
      </body>
      <Footer />
    </html>
  );
}
