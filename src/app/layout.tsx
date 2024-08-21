import { Plus_Jakarta_Sans } from "next/font/google";
import FloatingNavbar from "./(components)/FloatingNavbar";
import Header from "./(components)/LandingPageHeader";
import Footer from "./(components)/Footer";
import BottomSheetNavBar from "./(components)/BottomSheetNavBar";

import "~/styles/globals.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import { Toaster } from "react-hot-toast";
import { Metadata } from 'next';
 
// export const metadata: Metadata = {
//   title: {
//     template: '%s | Athletics Kids Cup',
//     default: 'AKC',
//   },
//   description: "The Athletics Kids Cup moves the kids! The three basic movement forms that are required in almost every sport are the basis of this unique sports initiative in India. Let's move the children together and encourage their personal development.",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.className}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="keywords" content="AKC, Athletics Kids Cup" />
        <meta name="google-site-verification" content="Lhy44OuGx6B8ak9oizLVQ_YDxSQiYOBEJgPAXhOZc-c" />
        <link rel="icon" href="/favicon.ico" />
        <title>Athletics Kids Cup</title>
      </head>
      <body className="overflow-x-hidden">
        <div className="flex w-screen justify-center">
          <div className="flex flex-1 flex-col items-center">
            <Header />
            {children}
            {/* <BottomSheetNavBar /> */}
            {/* <FloatingNavbar /> */}
            <Footer />
            <Toaster position="top-center" />
          </div>
        </div>
      </body>
    </html>
  );
}
