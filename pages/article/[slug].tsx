import React from "react";
import Head from "next/head";
import { CareerDetailContent } from "../../components";

export default function CareerDetailPage() {
  return (
    <div>
      <Head>
        <title>Career - Memos</title>
        <meta name="description" content="Career Page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CareerDetailContent />
      </main>
    </div>
  );
}
