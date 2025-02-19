import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, MenubarBottom, Sidebar } from "../components";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { gtmVirtualPageView } from "../libs";

export function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const authorizedPage = ["/dashboard", "/workspace"];
  const isLoggedIn =
    authorizedPage.some((page) => router.asPath.startsWith(page)) &&
    !router.asPath.includes("/subscription");

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="RMbsBIUpcLYYwPo4uGuQf1xftz_DMnhb87bv13cscGM"
        />
      </Head>
      <section className="w-full mx-auto text-neutral-500">
        <Header />
        <div className="flex">
          {isLoggedIn && <Sidebar />}
          <div className="lg:mt-[1.5rem] w-full lg:mt-0">
            <Component {...pageProps} />
          </div>
          {isLoggedIn && <MenubarBottom />}
        </div>
      </section>
    </>
  );
}

export default appWithTranslation(App);
