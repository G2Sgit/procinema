import { Sora, Roboto } from "next/font/google";
import "./globals.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

//============================================ Fonts =====================================================

// to use Google Font "Sora" type in CSS-rule:   font-family: var(--sora)
const sora = Sora({
  subsets: ["latin"],
  variable: "--sora",
  weight: ["400", "500", "600", "700", "800"]
});

// to use Google Font "Roboto" type in CSS-rule:   font-family: var(--roboto)
const roboto = Roboto({ 
  subsets: ["latin"],
  variable: "--roboto",
  weight: ["400", "500", "700", "900"]
});

//=======================================================================================================

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex, nofollow"/>
      <body className={`${sora.variable} ${roboto.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
