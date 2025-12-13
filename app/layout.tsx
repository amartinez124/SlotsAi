import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "agentkit Amazing",
  description: "agentkit Amazing - Powered by ChatKit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="beforeInteractive"
          public-key="domain_pk_693cba887a5c8193a3569c7342f23b1bfac09b7c4e7056f3f0c896f6c12d06b6"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
