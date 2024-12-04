import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";

export function Hero() {
  return (
    <div
      id="hero"
      className={twMerge(
        "flex items-center min-h-[400px] gap-16",
        maxWidthContainer
      )}
    >
      {/* Hero image */}
      <Image
        src="/assets/images/doctor.png"
        width={591}
        height={620}
        alt="doctor"
        className="hidden lg:block w-1/2"
      />

      {/* Our Words */}
      <div id="our-words" className="mt-36 lg:mt-0 px-16 lg:px-0 max-w-[40rem]">
        <h1 className="text-[32px] font-bold">
          Keunggulan Medis Dimulai dari Sistem yang Memahami Anda
        </h1>
        <p className="mt-4 text-base">
          Sistem kami dirancang untuk beradaptasi dengan cara Anda bekerja,
          mengintegrasikan berbagai aspek operasional kesehatan ke dalam satu
          platform yang intuitif dan mudah digunakan
        </p>
        <div className="flex items-center gap-4 mt-8">
          <Button title="Coba Demo Gratis" isPrimary />
          <Button title="Konsultasi Kebutuhan Anda" isPrimary={false} />
        </div>
      </div>
    </div>
  );
}
