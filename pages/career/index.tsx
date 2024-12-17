import Head from "next/head";
import React from "react";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CareerContent } from "../../components";

export default function CareerPage() {
  const { t } = useTranslation("common");
  return (
    <div>
      <Head>
        <title>Career - Memos</title>
        <meta name="description" content="Career Page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CareerContent t={t} />
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
