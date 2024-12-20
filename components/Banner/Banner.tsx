import { t, TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { Button } from "../Ui";

interface BannerProps {
  onClickToDemo: () => void;
  t: TFunction<"common", undefined>;
}

export function Banner({ onClickToDemo, t }: BannerProps) {
  return (
    <div className="w-full h-[350px] bg-primary-500 mt-24 relative">
      <Image
        src="/assets/images/banner.png"
        width={1440}
        height={274}
        alt="banner"
        className="h-full object-cover w-full opacity-50 lg:object-middle-bottom"
        // style={{
        //   objectPosition: "0px -210px",
        // }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform z-10 flex flex-col justify-center items-center gap-4">
        <h2 className="text-[24px] lg:text-[30px] text-white text-center font-bold">
          {t("home.bannerHeading")}
        </h2>
        <Button isPrimary title={t("home.tryDemo")} onClick={onClickToDemo} />
      </div>
    </div>
  );
}
