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
        "flex flex-col lg:flex-row flex-col-reverse items-center min-h-[400px] gap-16 p-8 lg:p-0",
        maxWidthContainer
      )}
    >
      {/* Hero image */}
      <Image
        src="/assets/images/doctor.png"
        width={591}
        height={620}
        alt="doctor"
        className="w-full px-8 lg:px-0 lg:w-1/2"
      />

      {/* Our Words */}
      <div
        id="our-words"
        className="mt-0 lg:mt-36 lg:mt-0 px-8 lg:px-16 lg:px-0 lg:max-w-[40rem]"
      >
        <h1 className="text-[32px] font-bold">
          Keunggulan Medis Dimulai dari Sistem yang Memahami Anda
        </h1>
        <p className="mt-4 text-base">
          Sistem kami dirancang untuk beradaptasi dengan cara Anda bekerja,
          mengintegrasikan berbagai aspek operasional kesehatan ke dalam satu
          platform yang intuitif dan mudah digunakan
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
          <Button
            title="Coba Demo Gratis"
            isPrimary
            className="w-full md:w-auto"
          />
          <Button
            title="Konsultasi Kebutuhan Anda"
            isPrimary={false}
            className="w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
