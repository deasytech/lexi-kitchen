"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import Navbar from "@src/components/Navbar/Navbar";
import { Footer } from "@src/components/Footer/Footer";
import AppContextProvider from "@src/context/AppContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Lexi Kitchen</title>
        <meta
          title="descriptions"
          content="Lexi kitchen for all your delicious home cooked meals"
        ></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <AppContextProvider>
              <Navbar />
              {children}
              <Footer />
            </AppContextProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
