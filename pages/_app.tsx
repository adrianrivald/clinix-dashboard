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
      <Head>
        <meta
          name="google-site-verification"
          content="RMbsBIUpcLYYwPo4uGuQf1xftz_DMnhb87bv13cscGM"
        />
      </Head>
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

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KWNGP2MC');
        `}
      </Script>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWNGP2MC" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
      <section className="w-full mx-auto text-neutral-500">
        <Header />
        <div className="flex">
          {isLoggedIn && <Sidebar />}
          <div className="mt-[1.5rem] w-full lg:mt-0">
            <Component {...pageProps} />
          </div>
          {isLoggedIn && <MenubarBottom />}
        </div>
      </section>
    </>
  );
}

export default appWithTranslation(App);
