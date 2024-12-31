import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ArticleContent } from "../../components";

export default function ArticlePage() {
  const { t } = useTranslation("common");
  return (
    <div>
      <Head>
        <title>Topik Populer artikel memos - Memos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ArticleContent t={t} />
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
