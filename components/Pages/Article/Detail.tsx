import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";

export function ArticleDetailContent() {
  const router = useRouter();

  return (
    <div className={twMerge("p-8 lg:p-16", maxWidthContainer)}>
      {/* Article Detail */}
      <div id="article-detail" className="mx-36">
        {/* Article Title */}
        <h1 className="text-[32px] lg:text-[50px] font-bold">
          Studi Temukan Efek Buruk Bagi Mereka yang Pernah Kena COVID, Bikin
          Otak Jadi Gini
        </h1>
        {/* Date Post */}
        <div className="flex justify-between items-center mt-8 py-6 border-t-2 border-b-2 border-dashed">
          <span>Dipublish 24 September 2024</span>
          <div className="flex items-center gap-4"></div>
        </div>
      </div>
    </div>
  );
}
