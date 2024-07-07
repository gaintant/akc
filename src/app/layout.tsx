import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import FloatingNavbar from "./(components)/FloatingNavbar";

export const metadata = {
  title: "Athletic Kids Cup",
  description: "Athletic Kids Cup",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        {children}
        <FloatingNavbar />
      </body>
    </html>
  );
}
