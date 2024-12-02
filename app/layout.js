import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "-x-font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Abhyanjana - Natural Hair Care",
  description: "Natural hair care products crafted with love and tradition",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
        bg-gradient-to-br from-lime-50 via-lime-100 to-lime-200 
        min-h-screen selection:bg-lime-300 selection:text-lime-900`}
        style={{
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="min-h-screen backdrop-blur-[2px]">
          {children}
        </div>
      </body>
    </html>
  );
}
