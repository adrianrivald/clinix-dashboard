import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { ArrowLeft, ArrowRight } from "../Icons";

export function Testimoni() {
  return (
    <div
      id="testimoni"
      className={twMerge(
        "bg-[url('/assets/images/testi.png')] p-16 mt-32 bg-no-repeat bg-right-top bg-auto",
        maxWidthContainer
      )}
    >
      <div className="backdrop-blur-lg border border-2 rounded-xl shadow-xl p-8 relative min-h-[400px] w-[100%] mx-auto">
        <div className="flex items-center justify-between mx-16">
          <h2 className="font-bold text-[32px] ">
            Apa kata
            <br />
            Klien Kami
          </h2>
          <div className="flex gap-2">
            <div className="bg-primary-500 px-6 py-4 rounded-md">
              <ArrowLeft />
            </div>
            <div className="bg-primary-500 px-6 py-4 rounded-md">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
