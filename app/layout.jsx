import { GoogleTagManager } from '@next/third-parties/google'
import { Six_Caps, Open_Sans } from "next/font/google";
import "./globals.scss";
import localFont from "next/font/local";

import Footer from "@/components/Footer/Footer";
import Providers from "@/services/providers";

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

// to use Local Font "Contax Sans" type in CSS-rule:   font-family: var(--contax-sans)
const contaxSans = localFont({
  src: [
    {
      path: "./localFonts/contaxSans/Contax Sans 35 Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./localFonts/contaxSans/Contax Sans 55.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./localFonts/contaxSans/Contax Sans 65 Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./localFonts/contaxSans/Contax Sans 75 Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  // subsets: ["latin"],
  // variable: "--open_sans",
  // weight: ["300", "400", "500", "700"],
});

//=======================================================================================================

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <meta name="robots" content="index, follow" />
      <body
        className={`${sixCaps.variable}  ${openSans.variable} ${contaxSans.className}`}
      >
        <Providers>
          {modal}
          {children}
        </Providers>
        <Footer />
      </body>
      <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
      <GoogleTagManager gtmId="G-8REW3DCGB6" />
    </html>
  );
}
