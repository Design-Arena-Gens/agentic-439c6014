import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "أكاديمية المنتجات الرقمية - من الصفر إلى الاحتراف",
  description: "دليلك الشامل لتعلم صناعة وبيع المنتجات الرقمية من البداية حتى الاحتراف",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
