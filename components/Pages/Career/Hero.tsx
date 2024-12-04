import Image from "next/image";
import React from "react";
import { SearchIcon } from "../../Icons";
import { Button } from "../../Ui";

export function HeroCareer() {
  return (
    <div className="w-full h-[400px] bg-primary-500 relative">
      <Image
        src="/assets/images/career-hero.jpg"
        width={1440}
        height={400}
        alt="banner"
        className="h-full object-cover w-full opacity-50 lg:object-middle-top"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform z-50 flex flex-col justify-center items-center gap-4">
        <h2 className="text-[24px] lg:text-[40px] text-white text-center font-bold">
          Explore Your Future Career Destination
        </h2>
      </div>
      <div className="flex justify-center absolute left-1/2 -translate-x-1/2 transform -bottom-10 w-full">
        <div className="flex items-center gap-4 w-[50rem] px-4 py-4 bg-white border border-neutral-200 rounded-xl shadow-xl">
          <SearchIcon className="w-5 h-5" />
          <input
            placeholder="Search your dream job.."
            type="search"
            className="focus:outline-none w-full h-8"
          />
          <Button isPrimary title="Search" className="min-h-8 w-[12rem]" />
        </div>
      </div>
    </div>
  );
}
