import Head from "next/head";
import React from "react";
import { ProductContent } from "../../components";

export default function ProductPage() {
  return (
    <div>
      <Head>
        <title>Product - Memos</title>
        <meta name="description" content="Product Page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductContent />
      </main>
    </div>
  );
}
