import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ArticleDetailContent } from "../../components";
import { useRouter } from "next/router";

export default function CareerDetailPage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <title>Detail Article - Memos</title>
        <meta name="description" content="Detail Article Page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ArticleDetailContent t={t} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, locale } = context;
  const slug = query.slug as string;

  return {
    props: {
      slug: slug,
      locale,
      ...(await serverSideTranslations(locale ?? "id", ["common"])),
    },
  };
};
