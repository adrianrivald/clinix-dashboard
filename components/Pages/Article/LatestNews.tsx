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

export function LatestNewsContent() {
  const router = useRouter();
  const onClickItem = (uri: string) => {
    router.push(`/article/${uri}`);
  };
  return (
    <div className={twMerge("p-4 lg:p-16", maxWidthContainer)}>
      {/* Latest News */}

      <div
        id="latest-news-list"
        className={twMerge("mb-24", maxWidthContainer)}
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
      </div>
    </div>
  );
}
