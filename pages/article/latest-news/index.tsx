import React from "react";
import Head from "next/head";
import { LatestNewsContent } from "../../../components";

export default function LatestNewsPage() {
  return (
    <div>
      <Head>
        <title>Latest News - Memos</title>
        <meta name="description" content="Latest News Page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LatestNewsContent />
      </main>
    </div>
  );
}
