import Image from "next/image";
import React from "react";
import { Button } from "../Ui";

export function Banner() {
  return (
    <div className="w-full h-[350px] bg-primary-500 my-24 relative">
      <Image
        src="/assets/images/banner.png"
        width={1440}
        height={274}
        alt="banner"
        className="h-full object-cover w-full opacity-50"
        style={{
          objectPosition: "0px -210px",
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform z-50 flex flex-col justify-center items-center gap-4">
        <h2 className="text-[30px] text-white text-center font-bold">
          Lihat langsung bagaimana sistem kami membantu pekerjaan Anda lebih
          efisien
        </h2>
        <Button isPrimary title="Coba Demo Gratis" />
      </div>
    </div>
  );
}
