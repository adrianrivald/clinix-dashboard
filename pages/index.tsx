import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";

export default function HomePage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const onClickToDemo = () => {
    router.push("/demo");
  };
  const onClickMailTo = () => {
    router.push("mailto:info@notes.co.id");
    // window.location.href = "mailto:info@notes.co.id";
  };
  return (
    <div>
      <Head>
        <title>Memos</title>
        <meta name="description" content="Landing page of Memos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-[1.5rem]">
        <Hero
          t={t}
          onClickToDemo={onClickToDemo}
          onClickMailTo={onClickMailTo}
        />
        <WhyUs t={t} />
        <Products t={t} />
        <Client t={t} />
        {/* <Testimoni t={t} /> */}
        <Faq t={t} />
        <Contact t={t} />
        <Banner t={t} onClickToDemo={onClickToDemo} />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    locale,
    ...(await serverSideTranslations(locale ?? "id", ["common"])),
  },
});
