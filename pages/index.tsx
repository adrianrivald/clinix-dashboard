import Head from "next/head";
import {
  Client,
  Contact,
  Faq,
  Hero,
  Products,
  Testimoni,
  WhyUs,
  Banner,
} from "../components";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Memos</title>
        <meta name="description" content="Landing page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-[5.5rem]">
        <Hero />
        <WhyUs />
        <Products />
        <Client />
        <Testimoni />
        <Faq />
        <Contact />
        <Banner />
      </main>
    </div>
  );
}
