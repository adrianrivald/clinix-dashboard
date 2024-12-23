import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { ArrowRightUpIcon } from "../Icons";

interface ProductsProps {
  t: TFunction<"common", undefined>;
}

export function Products({ t }: ProductsProps) {
  return (
    <div
      id="products"
      className="mt-[200px] lg:mt-[400px] bg-primary-500 min-h-[400px] relative py-16"
    >
      <div className="flex justify-center -mt-[10rem] lg:-mt-[20rem]">
        <Image
          src="/assets/images/product.png"
          width={870}
          height={357}
          alt="products"
          className="scale-[75%] lg:scale-100"
        />
      </div>
      <div className="w-full px-8 text-left lg:text-center pt-4 lg:pt-12 flex justify-center text-white text-[32px] font-bold">
        {t("home.providingSolutions")}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 lg:mt-16 justify-between items-center max-w-[72rem] mx-auto px-8 lg:px-32">
        <div className="min-h-[140px] bg-white rounded-md p-5 hover:bg-primary-100 hover:text-primary-500 cursor-pointer">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-3/4">
              <Image
                src="/assets/images/products/memos.png"
                width={112}
                height={32}
                alt="memos"
              />

              <div>{t("home.memosSolution")}</div>
            </div>
            <ArrowRightUpIcon />
          </div>
        </div>
        <div className="min-h-[140px] bg-white rounded-md p-5 hover:bg-primary-100 hover:text-primary-500 cursor-pointer">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-3/4">
              <Image
                src="/assets/images/products/notes.png"
                width={112}
                height={32}
                alt="notes"
              />

              <div>{t("home.notesSolution")}</div>
            </div>
            <ArrowRightUpIcon />
          </div>
        </div>
        <div className="min-h-[140px] bg-white rounded-md p-5 hover:bg-primary-100 hover:text-primary-500 cursor-pointer">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-3/4">
              <Image
                src="/assets/images/products/clinix.png"
                width={112}
                height={32}
                alt="clinix"
              />

              <div>{t("home.clinixSolution")}</div>
            </div>
            <ArrowRightUpIcon />
          </div>
        </div>
        {/* <div className="bg-white rounded-md p-8 hover:bg-primary-100 hover:text-primary-500 cursor-pointer">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-3/4">
              <Image
                src="/assets/images/products/lamina.png"
                width={112}
                height={32}
                alt="lamina"
              />

              <div>Sistem Encounter Rumah Sakit</div>
            </div>
            <ArrowRightUp />
          </div>
        </div> */}
      </div>
    </div>
  );
}
