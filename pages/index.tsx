import Head from "next/head";
import { Client, Hero, Products, Testimoni, WhyUs } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Memos</title>
        <meta name="description" content="Landing page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <WhyUs />
        <Products />
        <Client />
        <Testimoni />
      </main>
    </div>
  );
}
