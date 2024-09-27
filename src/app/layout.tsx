"use client";
import "@/assets/css/style.scss";
import Layout from "@/components/layout";
import { queryClient } from "@/libs/react-query";
import { SWRProvider } from "@/libs/swr-provider";
import store from "@/store";
import { TranslationProvider } from "@/translations/TranslationProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Source_Sans_3 } from "next/font/google";
import React from "react";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import jsonLD from "../config/jsonLD.json";
import searchbox from "../config/searchbox.json";
import { usePathname } from "next/navigation";

config.autoAddCss = false;

const san_serif = Source_Sans_3({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />
        {pathname === "/" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(searchbox) }}
          />
        )}
      </head>
      <body className={san_serif.className}>
        <SWRProvider>
          <Provider store={store}>
            <TranslationProvider>
              <QueryClientProvider client={queryClient}>
                <Layout>{children}</Layout>
              </QueryClientProvider>
            </TranslationProvider>
          </Provider>
        </SWRProvider>
      </body>
    </html>
  );
}
