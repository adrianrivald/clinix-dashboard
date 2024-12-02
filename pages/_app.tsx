import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // max-w-[100rem]
    <section className=" w-full mx-auto text-neutral-500">
      <Header />
      <main className="mt-24">
        <Component {...pageProps} />
      </main>
    </section>
  );
}
