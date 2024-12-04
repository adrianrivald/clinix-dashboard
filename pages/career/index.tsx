import Head from "next/head";
import React from "react";
import { CareerContent } from "../../components";

export default function CareerPage() {
  return (
    <div>
      <Head>
        <title>Career - Memos</title>
        <meta name="description" content="Career Page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CareerContent />
      </main>
    </div>
  );
}
