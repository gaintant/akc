import "~/styles/globals.css";

export const metadata = {
  // TODO: Add metadata
  title: "AKC",
  description: "AKC",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
