import Head from "next/head";
import React from "react";
import { DemoContent } from "../../components";

export default function DemoPage() {
  return (
    <div>
      <Head>
        <title>Demo - Memos</title>
        <meta name="description" content="Demo Page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DemoContent />
      </main>
    </div>
  );
}
