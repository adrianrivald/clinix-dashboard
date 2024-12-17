import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LatestNewsContent } from "../../../components";

export default function LatestNewsPage() {
  const { t } = useTranslation("common");
  return (
    <div>
      <Head>
        <title>Latest News - Memos</title>
        <meta name="description" content="Latest News Page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LatestNewsContent t={t} />
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
