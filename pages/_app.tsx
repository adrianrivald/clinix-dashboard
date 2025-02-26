import React, { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, MenubarBottom, Sidebar } from "../components";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { gtmVirtualPageView } from "../libs";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../utils/query-client";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../utils/auth/providers";

export function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const authorizedPage = ["/dashboard", "/workspace", "/profile"];
  const isLoggedIn =
    authorizedPage.some((page) => router.asPath.startsWith(page)) &&
    !router.asPath.includes("/subscription");
  const [isExpandedMenubar, setIsExpandedMenubar] = useState(true);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Head>
            <meta
              name="google-site-verification"
              content="RMbsBIUpcLYYwPo4uGuQf1xftz_DMnhb87bv13cscGM"
            />
          </Head>
          <section className="w-full mx-auto text-neutral-500">
            <Header setIsExpandedMenubar={setIsExpandedMenubar} />
            <div className="flex">
              {isLoggedIn && <Sidebar isExpandedMenubar={isExpandedMenubar} />}
              <div className="w-full lg:mt-0">
                <Component {...pageProps} />
              </div>
              {isLoggedIn && <MenubarBottom />}
            </div>
          </section>
          <Toaster position="top-right" />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(App);
