import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Padelclass",
  description: "Plataforma educativa tipo ManageBac",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
