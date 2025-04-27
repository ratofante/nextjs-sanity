import { Anaheim, Roboto } from "next/font/google";
import "./scss/app.scss";

const anaheim = Anaheim({
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anaheim.className} ${roboto.className}`}>
      <body className="body">{children}</body>
    </html>
  );
}
