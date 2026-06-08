import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Träna inför medborgarskapsprovet",
  description: "En enkel quizapp för att öva på svensk samhällskunskap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
