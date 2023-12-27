import { Six_Caps, Open_Sans } from "next/font/google";
import "./globals.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

//============================================ Fonts =====================================================

// to use Google Font "six caps" type in CSS-rule:   font-family: var(--six_caps)
const sixCaps = Six_Caps({
  subsets: ["latin"],
  variable: "--six_caps",
  weight: ["400"],
});

// to use Google Font "open sans" type in CSS-rule:   font-family: var(--open_sans)
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--open_sans",
  weight: ["300", "400", "500", "700"],
});

//=======================================================================================================

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex, nofollow" />
      <body className={`${sixCaps.variable}  ${openSans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
