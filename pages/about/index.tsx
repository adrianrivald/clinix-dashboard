import Head from "next/head";
import React from "react";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AboutContent } from "../../components";

export default function AboutPage() {
  const { t } = useTranslation("common");
  return (
    <div>
      <Head>
        <title>About - Memos</title>
        <meta name="description" content="About Page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AboutContent t={t} />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    locale,
    ...(await serverSideTranslations(locale ?? "id", ["common"])),
  },
});
