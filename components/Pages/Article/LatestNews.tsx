import { TFunction } from "i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";
import { articles } from "../../../constants/article";
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
interface LatestNewsContentProps {
  t: TFunction<"common", undefined>;
  locale: string | undefined;
}

export function LatestNewsContent({ t, locale }: LatestNewsContentProps) {
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
          <h2 className="text-[32px] font-bold">{t("article.latestNews")}</h2>
          <h3 className="mt-2">{t("article.forYou")}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 mt-14 gap-8">
          {articles?.map((article, index) => (
            <div
              onClick={() =>
                onClickItem(
                  locale === "id"
                    ? article?.language?.id?.slug
                    : article?.language?.en?.slug
                )
              }
              key={index}
              className="hover:shadow-xl p-3 pb-8 shadow-md rounded-lg flex flex-col gap-6 cursor-pointer"
            >
              <Image
                src={article.image}
                width={360}
                height={200}
                alt={
                  locale === "id"
                    ? article?.language?.id?.slug
                    : article?.language?.en?.slug
                }
                className="w-full rounded-lg"
              />
              <div className="mx-4">
                <span className="text-neutral-300 font-bold">
                  {article?.category} • {article?.createdAt}
                </span>
              </div>
              <h3 className="mx-4 font-bold text-[24px]">
                {locale === "id"
                  ? article?.language?.id?.title
                  : article?.language?.en?.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
