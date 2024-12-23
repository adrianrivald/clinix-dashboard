import { TFunction } from "i18next";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { FaqIcon } from "../Icons";

const faqData = [
  {
    question: "home.faqQ1",
    answer: "home.faqA1",
  },
  {
    question: "home.faqQ2",
    answer: "home.faqA2",
  },
  {
    question: "home.faqQ3",
    answer: "home.faqA3",
  },
  {
    question: "home.faqQ4",
    answer: "home.faqA4",
  },
  {
    question: "home.faqQ5",
    answer: "home.faqA5",
  },
  {
    question: "home.faqQ6",
    answer: "home.faqA6",
  },
];

interface FaqProps {
  t: TFunction<"common", undefined>;
}
export function Faq({ t }: FaqProps) {
  return (
    <div
      id="faq"
      className={twMerge("p-4 lg:p-16 mt-16 lg:mt-32", maxWidthContainer)}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:mx-14">
        <h2 className="text-[32px] font-bold">{t("home.faqHeading")}</h2>
        <p className="mt-4 lg:mt-0 lg:text-right text-[16px] lg:w-[30rem]">
          {t("home.faqSubHeading")}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mt-16">
        {faqData?.map((faq) => {
          return (
            <div className="bg-neutral-200 p-8">
              <div className="flex items-center gap-3">
                <FaqIcon />
                <span className="font-bold">{t(faq?.question)}</span>
              </div>
              <p className="mt-4">{t(faq?.answer)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
