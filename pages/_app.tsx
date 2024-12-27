import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Footer } from "../components";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { gtmVirtualPageView } from "../libs";

export function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    };

    gtmVirtualPageView(mainDataLayer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageProps]);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DE7E4C1K9Q"
      ></Script>
      <Script>
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-DE7E4C1K9Q');`}
      </Script>
      <section className="w-full mx-auto text-neutral-500">
        <Header />
        <div className="mt-[1.5rem] lg:mt-0">
          <Component {...pageProps} />
          <Footer />
        </div>
      </section>
    </>
  );
}

export default appWithTranslation(App);
