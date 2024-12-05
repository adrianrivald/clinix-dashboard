import React from "react";
import Head from "next/head";
import { ArticleDetailContent } from "../../components";
import { useRouter } from "next/router";

export default function CareerDetailPage() {
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
        <ArticleDetailContent />
      </main>
    </div>
  );
}
