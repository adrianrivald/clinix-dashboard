import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";

interface ClientProps {
  t: TFunction<"common", undefined>;
}

export function Client({ t }: ClientProps) {
  return (
    <div
      id="client"
      className={twMerge(
        "mt-32 flex flex-col p-8 justify-center items-center gap-5",
        maxWidthContainer
      )}
    >
      <h2 className="text-[24px] lg:text-[32px] font-bold text-center lg:text-left">
        {t("home.provenTrusted")}
      </h2>
      <p className="w-full lg:w-1/2 text-center text-[20px] lg:text-base">
        {t("home.provenTrustedContent")}
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <Image
          src="/assets/images/clients/rs-sapta-medika.png"
          width={328}
          height={104}
          alt="RS Sapta Medika"
        />
        <Image
          src="/assets/images/clients/rs-setio-husodo.png"
          width={376}
          height={136}
          alt="RS Setio Husodo"
        />
      </div>
    </div>
  );
}
