import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";

export function Client() {
  return (
    <div
      id="client"
      className={twMerge(
        "mt-32 flex flex-col p-8 justify-center items-center gap-5",
        maxWidthContainer
      )}
    >
      <h2 className="text-[32px] font-bold">Telah Beroperasi dan Dipercaya</h2>
      <p className="w-full lg:w-1/2 text-center text-base">
        Sistem kami telah dipercaya untuk beroperasi pada klien kami. Utilisasi
        dari sistem kami terbukti meningkatkan efisiensi operasional pelayanan
        dan administrasi klien kami
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
