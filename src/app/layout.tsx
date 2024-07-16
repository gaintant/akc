import { Plus_Jakarta_Sans } from 'next/font/google'
import FloatingNavbar from "./(components)/FloatingNavbar";

import "~/styles/globals.css";
import '@fontsource/plus-jakarta-sans/300.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/700.css';
import Header from './(components)/LandingPageHeader';
import Footer from './(components)/Footer';

export const metadata = {
  title: "Athletic Kids Cup",
  description: "Athletic Kids Cup",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.className}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className="overflow-x-hidden">
        <div className="flex w-screen justify-center">
          <div className="container flex-1 flex flex-col">
            <Header />
            {children}
            <FloatingNavbar />
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
