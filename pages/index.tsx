import Head from "next/head";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const onClickToDemo = () => {
    router.push("/demo");
  };
  return (
    <div>
      <Head>
        <title>Memos</title>
        <meta name="description" content="Landing page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-[5.5rem]">
        <Hero onClickToDemo={onClickToDemo} />
        <WhyUs />
        <Products />
        <Client />
        <Testimoni />
        <Faq />
        <Contact />
        <Banner onClickToDemo={onClickToDemo} />
      </main>
    </div>
  );
}
