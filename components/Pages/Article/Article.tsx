import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { Button } from "../../Ui";

export function ArticleContent() {
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
                Dialami Min Jae
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
              condimentum imperdie read more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
