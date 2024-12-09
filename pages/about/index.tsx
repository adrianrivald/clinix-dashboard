import Head from "next/head";
import React from "react";
import { AboutContent } from "../../components";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About - Memos</title>
        <meta name="description" content="About Page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AboutContent />
      </main>
    </div>
  );
}
