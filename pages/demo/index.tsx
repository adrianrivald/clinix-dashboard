import Head from "next/head";
import React from "react";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DemoContent } from "../../components";

export default function DemoPage() {
  const { t } = useTranslation("common");
  return (
    <div>
      <Head>
        <title>Hubungi Kami, tim sales siap membantu! - Memos</title>
        <meta
          name="description"
          content="Isi data diri Anda, dan tim kami akan segera memberikan informasi yang Anda butuhkan."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DemoContent t={t} />
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
