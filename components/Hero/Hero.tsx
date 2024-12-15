import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";

interface HeroProps {
  onClickToDemo: () => void;
}

export function Hero({ onClickToDemo }: HeroProps) {
  return (
    <div
      id="hero"
      className={twMerge(
        "flex flex-col lg:flex-row flex-col-reverse items-center min-h-[400px] gap-4 lg:gap-16 p-4 lg:p-0",
        maxWidthContainer
      )}
    >
      {/* Hero image */}
      <Image
        src="/assets/images/doctor.png"
        width={591}
        height={620}
        alt="doctor"
        className="w-full lg:w-1/2"
      />

      {/* Our Words */}
      <div
        id="our-words"
        className="mt-0 lg:mt-36 lg:mt-0 lg:px-16 lg:max-w-[40rem]"
      >
        <h1 className="text-[32px] font-bold text-center lg:text-left">
          Keunggulan Medis Dimulai dari Sistem yang Memahami Anda
        </h1>
        <p className="mt-4 text-base">
          Sistem kami dirancang untuk beradaptasi dengan cara Anda bekerja,
          mengintegrasikan berbagai aspek operasional kesehatan ke dalam satu
          platform yang intuitif dan mudah digunakan
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
          <Button
            title="Coba Demo Gratis"
            isPrimary
            className="w-full lg:w-auto"
            onClick={onClickToDemo}
          />
          <Button
            title="Konsultasi Kebutuhan Anda"
            isPrimary={false}
            className="w-full lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
