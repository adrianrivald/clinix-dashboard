import { TFunction } from "i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import {
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  TwitterIcon,
  WhatsappIcon,
} from "../../Icons";

import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { articles } from "../../../constants/article";
interface ArticleDetailContentProps {
  t: TFunction<"common", undefined>;
  articleData: any;
  locale: string | undefined;
}

export function ArticleDetailContent({
  t,
  articleData,
  locale,
}: ArticleDetailContentProps) {
  return (
    <div className={twMerge("p-4 lg:p-16 mb-12", maxWidthContainer)}>
      {/* Article Detail */}
      <div id="article-detail" className="lg:mx-36">
        {/* Article Title */}
        <h1 className="text-[20px] text-center lg:text-left lg:text-[50px] font-bold">
          {locale === "id"
            ? articleData?.language?.id?.title
            : articleData?.language?.en?.title}
        </h1>
        {/* Date Post */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mt-4 lg:mt-6 py-6 border-t-2 border-b-2 border-dashed">
          <span>
            {t("article.publishedAt")} {articleData?.createdAt}
          </span>
          <div className="flex items-center gap-4">
            <WhatsappIcon />
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkIcon />
          </div>
        </div>

        {/* Content Post */}
        <div className="mt-4 lg:mt-6">
          <Image
            src={articleData?.image}
            width={824}
            height={450}
            alt="pic"
            className="w-full rounded-xl"
          />
          <div id="content" className="mt-8 text-justify">
            {parse(
              (locale === "id"
                ? articleData?.language?.id?.content
                : articleData?.language?.en?.content ?? ""
              )
                ?.replaceAll(`<a `, `<a target="_blank" style="color:blue"`)
                ?.replaceAll("<p", "<br/><p")
                ?.replaceAll("<img", "<br/><img")
                ?.replaceAll("<ol", "<br/><ol")
                ?.replaceAll("<hr", "<br/><hr")
                ?.replaceAll("<h1", "<br/><h1")
                // ?.replaceAll("<h2", "<br/><h2")
                // ?.replaceAll("<h3", "<br/><h3")
                // ?.replaceAll("<h4", "<br/><h4")
                ?.replaceAll(
                  "<ul",
                  `<ul style="list-style-type:disc;list-style-position:inside"`
                )
                ?.replaceAll(
                  "<ol",
                  `<ol style="list-style-type:decimal;list-style-position:inside"`
                )
              // ?.replaceAll("<li><br/><p>", "<br/><li>")
              // ?.replaceAll("</p></li>", "</li>")
              // ?.replaceAll("</li><li", "</li><br/><li")
              // ?.replaceAll(
              //   "<h1",
              //   `<h1 style="font-size:3rem;font-weight:bold" `
              // )
              // ?.replaceAll(
              //   "<h2",
              //   `<h2 style="font-size:1.875rem;font-weight:bold" `
              // )
              // ?.replaceAll(
              //   "<h3",
              //   `<h3 style="font-size:1.5rem;font-weight:bold" `
              // )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
