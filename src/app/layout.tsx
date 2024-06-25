import "~/styles/globals.css";
import Header from "./(components)/Header";
import { GeistSans } from "geist/font/sans";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
