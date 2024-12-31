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
        <title>
          Penyedia layanan kesehatan dengan teknologi terkini - Memos
        </title>
        <meta
          name="description"
          content="CRM Healthcare, Inovasi untuk efisiensi kesehatan yang lebih baik, solusi terintegrasi kami meningkatkan efisiensi rumah sakit, memudahkan tenaga medis, dan memastikan perawatan yang lebih cepat dan tepat untuk pasien."
        />
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
