import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ArticleDetailContent } from "../../components";
import { useRouter } from "next/router";
import { articles } from "../../constants/article";

export default function CareerDetailPage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { query, locale } = router;
  const articleSlug = query?.slug ?? "";
  const articleData = articles?.find((article) =>
    locale === "id"
      ? article?.language?.id?.slug === articleSlug
      : article?.language?.en?.slug === articleSlug
  );

  console.log(articleData, "articleData");

  return (
    <div>
      <Head>
        <title>
          {locale === "id"
            ? articleData?.language?.id?.title
            : articleData?.language?.en?.title}{" "}
          - Memos
        </title>
        <meta
          name="description"
          content={
            locale === "id"
              ? articleData?.language?.id?.meta_desc
              : articleData?.language?.en?.meta_desc
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ArticleDetailContent locale={locale} articleData={articleData} t={t} />
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
