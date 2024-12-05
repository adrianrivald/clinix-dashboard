import React from "react";
import Head from "next/head";
import { ArticleContent } from "../../components";

export default function ArticlePage() {
  return (
    <div>
      <Head>
        <title>Article - Memos</title>
        <meta name="description" content="Article Page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ArticleContent />
      </main>
    </div>
  );
}
