import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ProductContent } from "../../components";

export default function ProductPage() {
  const { t } = useTranslation("common");
  return (
    <div>
      <Head>
        <title>
          Produk Memos untuk kebutuhan Sistem CRM Healthcara Rumah sakit dan
          Klinik anda - Memos
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductContent t={t} />
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
