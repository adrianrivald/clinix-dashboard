import { TFunction } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { ArrowRightBlueIcon } from "../../Icons";

interface ProductContentProps {
  t: TFunction<"common", undefined>;
}

export function ProductContent({ t }: ProductContentProps) {
  return (
    <div
      id="product-list"
      className={twMerge("mb-24 p-4 lg:p-16", maxWidthContainer)}
    >
      <div className="lg:mx-36">
        <h2 className="text-[32px] font-bold text-center">
          {t("product.productHeading")}
        </h2>
        <div className="mt-12 flex flex-col lg:flex-row justify-center items-center gap-4">
          <Link
            href="https://notes.co.id"
            rel="noopener noreferrer"
            target="_blank"
            className="w-full lg:w-1/2 p-3 pb-8 rounded-lg flex flex-col gap-6 cursor-pointer border border-neutral-250 hover:border-primary-200"
          >
            <Image
              src="/assets/images/product-notes.png"
              width={456}
              height={240}
              alt="product-notes"
              className="w-full rounded-lg"
            />
            <div className="mx-4">
              <h2 className="text-neutral-500 text-[20px] font-bold">Notes</h2>
              <h3>{t("product.notesDesc")}</h3>
              <div className="mt-8 flex justify-between items-center">
                <h5 className="text-link">{t("product.learnMore")}</h5>
                <ArrowRightBlueIcon />
              </div>
            </div>
          </Link>
          <Link
            href="https://clinix.id"
            rel="noopener noreferrer"
            target="_blank"
            className="w-full lg:w-1/2 p-3 pb-8 rounded-lg flex flex-col gap-6 cursor-pointer border border-neutral-250 hover:border-primary-200"
          >
            <Image
              src="/assets/images/product-clinix.png"
              width={456}
              height={240}
              alt="product-clinix"
              className="w-full rounded-lg"
            />
            <div className="mx-4">
              <h2 className="text-neutral-500 text-[20px] font-bold">Clinix</h2>
              <h3>{t("product.clinixDesc")}</h3>
              <div className="mt-8 flex justify-between items-center">
                <h5 className="text-link">{t("product.learnMore")}</h5>
                <ArrowRightBlueIcon />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
