import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { Button } from "../../Ui";
import { ChevronLeftIcon, ChevronRightIcon } from "../../Icons";
import { hotTopics } from "./data";
import { TFunction } from "i18next";

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

interface ArticleContentProps {
  t: TFunction<"common", undefined>;
}

export function ArticleContent({ t }: ArticleContentProps) {
  const router = useRouter();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const onClickItem = (uri: string) => {
    router.push(`/article/${uri}`);
  };

  const onClickMoreLatestNews = () => {
    router.push("/article/latest-news");
  };

  return (
    <div className={twMerge("p-4 lg:p-16", maxWidthContainer)}>
      {/* Hot Topics */}

      <div id="hot-topics" className="relative">
        <h1 className="text-[32px] lg:text-[50px] font-bold">
          {t("article.hotTopic")}
        </h1>
        <Swiper
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {hotTopics.map((item) => (
            <SwiperSlide>
              <div className="flex flex-col lg:flex-row items-start gap-8 mt-4 ">
                <div className="relative rounded-md w-full min-h-[200px] lg:min-h-[400px] lg:w-[70%] lg:flex-none">
                  <Image
                    src={item?.thumbnail}
                    width={870}
                    height={400}
                    alt="featured-1"
                    className="object-cover rounded-lg w-full h-[200px] lg:h-[300px] lg:h-[400px]"
                  />
                  <div className="absolute left-4 lg:left-10 bottom-4 lg:bottom-10">
                    <h2 className="lg:w-[60%] font-bold text-[16px] lg:text-[32px] text-white">
                      {item?.title}
                    </h2>
                    <h4 className="text-[12px] lg:text-[16px] text-white font-semibold">
                      {item?.category} • {item?.createdAt}
                    </h4>
                  </div>
                </div>
                <div id="hot-topic-sum" className="hidden lg:block">
                  <p className="text-justify">
                    <span className="text-[40px] font-bold">
                      {item?.summary.split(" ")[0]}
                    </span>{" "}
                    {item?.summary.slice(item?.summary.split(" ")[0]?.length)}
                    <br />
                    <span className="text-link font-bold">read more</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={navigationPrevRef}
          className="hidden lg:block absolute -left-14 -translate-y-1/2 top-[55%] transform z-50 cursor-pointer shadow-lg flex items-center justify-center px-5 py-5 rounded-full"
        >
          <ChevronLeftIcon />
        </div>
        <div
          ref={navigationPrevRef}
          className="hidden lg:block absolute -right-14 -translate-y-1/2 top-[55%] transform z-50 cursor-pointer shadow-lg flex items-center justify-center px-5 py-5 rounded-full"
        >
          <ChevronRightIcon />
        </div>
      </div>

      {/* Latest News */}

      <div
        id="latest-news-list"
        className={twMerge("my-24", maxWidthContainer)}
      >
        <div className="text-center">
          <h2 className="text-[32px] font-bold">{t("article.latestNews")}</h2>
          <h3 className="mt-2">{t("article.forYou")}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 mt-14 gap-8">
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
          <Button
            onClick={onClickMoreLatestNews}
            isPrimary={false}
            title={t("article.seeAll")}
            className="w-36"
          />
        </div>
      </div>

      {/* Latest News */}

      <div
        id="latest-news-list"
        className={twMerge("mt-36 mb-24", maxWidthContainer)}
      >
        <div className="text-center">
          <h2 className="text-[32px] font-bold">{t("article.forYou")}</h2>
          <h3 className="mt-2">{t("article.forYou")}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 mt-14 gap-8">
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
          <Button
            isPrimary={false}
            title={t("article.seeAll")}
            className="w-36"
          />
        </div>
      </div>
    </div>
  );
}
