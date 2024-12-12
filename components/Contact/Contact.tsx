import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <div
      id="why-us"
      className={twMerge(
        "bg-[url('/assets/images/why-us.png')] p-4 lg:p-16 mt-8 lg:mt-24 bg-no-repeat bg-left bg-auto",
        maxWidthContainer
      )}
    >
      <div className="flex flex-col lg:flex-row items-center gap-16 backdrop-blur-lg border border-2 rounded-xl shadow-xl p-4 lg:p-16 relative min-h-[400px] w-[100%] mx-auto">
        <div className="lg:w-[40%]">
          <h2 className="font-bold text-[24px] text-neutral-300">
            Memiliki Pertanyaan Lain?
          </h2>
          <h3 className="text-neutral-500 text-[32px] mt-4 font-bold">
            Kirimkan Pertanyaan Anda pada Kami!
          </h3>
          <p className="mt-4">
            Kami akan mengirimkan jawaban pertanyaan Anda ke Email yang Anda
            kirimkan
          </p>
        </div>
        <div className="w-full lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
