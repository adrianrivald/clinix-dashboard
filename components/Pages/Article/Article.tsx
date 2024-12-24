import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { Button } from "../../Ui";
import { ChevronLeftIcon, ChevronRightIcon } from "../../Icons";
import { TFunction } from "i18next";
import { articles } from "../../../constants/article";

interface ArticleContentProps {
  t: TFunction<"common", undefined>;
}

export function ArticleContent({ t }: ArticleContentProps) {
  const router = useRouter();
  const { locale } = router;
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const onClickItem = (uri: string) => {
    router.push(`/article/${uri}`);
  };

  const onClickMoreLatestNews = () => {
    router.push("/article/latest-news");
  };

  return (
    <div
    // className={twMerge("p-4 lg:p-16", maxWidthContainer)}>
    >
      {/* Hot Topics */}
      <div id="hot-topics">
        <h1
          className={twMerge(
            "text-[32px] lg:text-[50px] font-bold px-4 lg:px-16 mt-8",
            maxWidthContainer
          )}
        >
          {t("article.hotTopic")}
        </h1>
        <Swiper
          className={twMerge(maxWidthContainer)}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
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
          {articles?.slice(0, 4).map((item) => (
            <SwiperSlide>
              <div className="flex flex-col lg:flex-row items-start gap-8 mt-4 px-4 pb-10 lg:pb-16 lg:px-16">
                <div className="relative rounded-md w-full min-h-[200px] lg:min-h-[400px] lg:w-[70%] lg:flex-none">
                  <Image
                    src={item?.image}
                    width={870}
                    height={400}
                    alt="featured-1"
                    className="object-cover rounded-lg w-full h-[200px] md:h-[300px] lg:h-[400px]"
                  />
                  <div className="absolute left-4 lg:left-10 bottom-4 lg:bottom-10">
                    <h2 className="lg:w-[60%] font-bold text-[16px] lg:text-[32px] text-white">
                      {locale === "id"
                        ? item?.language?.id?.title
                        : item?.language?.en?.title}
                    </h2>
                    <h4 className="text-[12px] lg:text-[16px] text-white font-semibold">
                      {item?.category} • {item?.createdAt}
                    </h4>
                  </div>
                </div>
                <div id="hot-topic-sum" className="hidden lg:block">
                  <p className="text-justify">
                    <span className="text-[40px] font-bold">
                      {locale === "id"
                        ? item?.language?.id?.summary.split(" ")[0]
                        : item?.language?.en?.summary.split(" ")[0]}
                    </span>{" "}
                    {locale === "id"
                      ? item?.language?.id?.summary.slice(
                          item?.language?.id?.summary.split(" ")[0]?.length
                        )
                      : item?.language?.en?.summary.slice(
                          item?.language?.en?.summary.split(" ")[0]?.length
                        )}
                    <br />
                    <span
                      onClick={() =>
                        onClickItem(
                          locale === "id"
                            ? item?.language?.id?.slug
                            : item?.language?.en?.slug
                        )
                      }
                      className="text-link font-bold cursor-pointer"
                    >
                      read more
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            ref={navigationPrevRef}
            className="hidden lg:block absolute bg-white left-0 -translate-y-1/2 top-[45%] transform z-50 cursor-pointer shadow-lg flex items-center justify-center px-5 py-5 rounded-full"
          >
            <ChevronLeftIcon />
          </div>
          <div
            ref={navigationNextRef}
            className="hidden lg:block absolute bg-white right-0 -translate-y-1/2 top-[45%] transform z-50 cursor-pointer shadow-lg flex items-center justify-center px-5 py-5 rounded-full"
          >
            <ChevronRightIcon />
          </div>
        </Swiper>
      </div>

      {/* Latest News */}

      <div
        id="latest-news-list"
        className={twMerge("p-4 lg:p-16 my-8", maxWidthContainer)}
      >
        <div className="text-center">
          <h2 className="text-[32px] font-bold">{t("article.latestNews")}</h2>
          <h3 className="mt-2">{t("article.forYou")}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 mt-2 lg:mt-14 gap-8">
          {articles?.slice(0, 6).map((article, index) => (
            <div
              onClick={() =>
                onClickItem(
                  locale === "id"
                    ? article?.language?.id?.slug
                    : article?.language?.en?.slug
                )
              }
              key={index}
              className="hover:shadow-xl p-3 pb-8 shadow-md rounded-lg flex flex-col gap-4 lg:gap-6 cursor-pointer"
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
              <div className="ml-0 lg:mx-4">
                <span className="text-neutral-300 font-bold">
                  {article?.category} • {article?.createdAt}
                </span>
              </div>
              <h3 className="ml-0 lg:mx-4 font-bold text-[16px] lg:text-[24px]">
                {locale === "id"
                  ? article?.language?.id?.title
                  : article?.language?.en?.title}
              </h3>
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
        className={twMerge("p-4 lg:p-16 mt-20 mb-24", maxWidthContainer)}
      >
        <div className="text-center">
          <h2 className="text-[32px] font-bold">{t("article.forYou")}</h2>
          <h3 className="mt-2">{t("article.forYou")}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 mt-14 gap-8">
          {articles?.slice(6).map((article, index) => (
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
        <div className="flex justify-center mt-14">
          <Button
            onClick={onClickMoreLatestNews}
            isPrimary={false}
            title={t("article.seeAll")}
            className="w-36"
          />
        </div>
      </div>
    </div>
  );
}
