import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { Button } from "../../Ui";

const newsData = [
  {
    uri: "understanding-diabetes",
    image: "/assets/images/news-1.jpg",
    category: "Article",
    createdAt: "12 Jan 2024",
    title: "Understanding diabetes and its impact on public health..",
  },
  {
    uri: "understanding-diabetes-2",
    image: "/assets/images/news-2.jpg",
    category: "Article",
    createdAt: "12 Jan 2024",
    title: "Understanding diabetes and its impact on public health..",
  },
  {
    uri: "understanding-diabetes-3",
    image: "/assets/images/news-3.jpg",
    category: "Article",
    createdAt: "12 Jan 2024",
    title: "Understanding diabetes and its impact on public health..",
  },
  {
    uri: "understanding-diabetes",
    image: "/assets/images/news-1.jpg",
    category: "Article",
    createdAt: "12 Jan 2024",
    title: "Understanding diabetes and its impact on public health..",
  },
  {
    uri: "understanding-diabetes-2",
    image: "/assets/images/news-2.jpg",
    category: "Article",
    createdAt: "12 Jan 2024",
    title: "Understanding diabetes and its impact on public health..",
  },
  {
    uri: "understanding-diabetes-3",
    image: "/assets/images/news-3.jpg",
    category: "Article",
    createdAt: "12 Jan 2024",
    title: "Understanding diabetes and its impact on public health..",
  },
];

export function ArticleContent() {
  const router = useRouter();
  const onClickItem = (uri: string) => {
    router.push(`/article/${uri}`);
  };
  return (
    <div className={twMerge("p-8 lg:p-16", maxWidthContainer)}>
      {/* Hot Topics */}
      <div id="hot-topics">
        <h1 className="text-[32px] lg:text-[50px] font-bold">Hot Topics</h1>
        <div className="flex flex-col lg:flex-row items-start gap-8 mt-4 ">
          <div className="relative rounded-md w-full min-h-[400px] lg:w-[70%] lg:flex-none">
            <Image
              src="/assets/images/hot-topic-1.jpg"
              width={870}
              height={400}
              alt="featured-1"
              className="object-cover rounded-lg w-full h-[400px]"
            />
            <div className="absolute left-10 bottom-10">
              <h2 className="lg:w-[60%] font-bold text-[32px] text-white">
                Dokter Ungkap Gejala Henti Jantung Mendadak di Usia Muda seperti
                Dialami Min Jae{" "}
              </h2>
            </div>
          </div>
          <div id="hot-topic-sum">
            <p className="text-lg">
              Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
              adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
              vivamus pharetra. Velit, dui, egestas nisi, elementum mattis
              mauris, magnis. Massa tortor nibh nulla condimentum imperdiet
              scelerisque...attis mauris, magnis. Massa tortor nibh nulla
              condimentum imperdie
              <br />
              <span className="text-link font-bold">read more</span>
            </p>
          </div>
        </div>
      </div>

      {/* Latest News */}

      <div
        id="latest-news-list"
        className={twMerge("my-24", maxWidthContainer)}
      >
        <div className="text-center">
          <h2 className="text-[32px] font-bold">Latest News</h2>
          <h3 className="mt-2">Info buat kamu</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-8">
          {newsData?.map((news, index) => (
            <div
              onClick={() => onClickItem(news?.uri)}
              key={index}
              className="hover:shadow-xl p-3 pb-8 shadow-md rounded-lg flex flex-col gap-6 cursor-pointer"
            >
              <Image
                src={news.image}
                width={360}
                height={200}
                alt={news.uri}
                className="w-full rounded-lg"
              />
              <div className="mx-4">
                <span className="text-neutral-300 font-bold">
                  {news?.category} • {news?.createdAt}
                </span>
              </div>
              <h3 className="mx-4 font-bold text-[24px]">{news?.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <Button isPrimary={false} title="Lihat Semua" className="w-36" />
        </div>
      </div>

      {/* Latest News */}

      <div
        id="latest-news-list"
        className={twMerge("my-24", maxWidthContainer)}
      >
        <div className="text-center">
          <h2 className="text-[32px] font-bold">Info Buat Kamu</h2>
          <h3 className="mt-2">Info buat kamu</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-8">
          {newsData?.slice(0, 3).map((news, index) => (
            <div
              onClick={() => onClickItem(news?.uri)}
              key={index}
              className="hover:shadow-xl p-3 pb-8 shadow-md rounded-lg flex flex-col gap-6 cursor-pointer"
            >
              <Image
                src={news.image}
                width={360}
                height={200}
                alt={news.uri}
                className="w-full rounded-lg"
              />
              <div className="mx-4">
                <span className="text-neutral-300 font-bold">
                  {news?.category} • {news?.createdAt}
                </span>
              </div>
              <h3 className="mx-4 font-bold text-[24px]">{news?.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <Button isPrimary={false} title="Lihat Semua" className="w-36" />
        </div>
      </div>
    </div>
  );
}
