import Image from "next/image";
import React from "react";
import { SearchIcon } from "../../Icons";
import { SearchBox } from "../../SearchBox/SearchBox";
import { Button } from "../../Ui";

export function HeroCareer() {
  const onSearchJob = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("search job:", value);
  };
  return (
    <div className="w-full h-[300px] lg:h-[400px] bg-gradient-to-r from-neutral-500 to-blue-500 relative">
      <Image
        src="/assets/images/career-hero.jpg"
        width={1440}
        height={400}
        alt="banner"
        className="h-full object-cover w-full opacity-50 lg:object-middle-top"
      />
      <div className="w-full px-4 lg:px-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform z-10 flex flex-col justify-center items-center gap-4">
        <h2 className="w-full text-[36px] lg:text-[40px] text-white text-center font-bold">
          Explore Your Future <br /> Career Destination
        </h2>
        <SearchBox
          onSearch={onSearchJob}
          placeholder="Search your dream job..."
          className="blogk lg:hidden w-full"
        />
      </div>
      <div className="hidden lg:flex justify-center absolute left-1/2 -translate-x-1/2 transform -bottom-10 w-full">
        <div className="flex items-center gap-4 w-[80%] lg:w-[60%] lg:w-[50%] px-4 py-4 bg-white border border-neutral-200 rounded-xl shadow-xl">
          <SearchIcon className="w-5 h-5" />
          <input
            placeholder="Search your dream job..."
            type="search"
            className="focus:outline-none w-full h-8"
          />
          <Button isPrimary title="Search" className="min-h-8 w-[12rem]" />
        </div>
      </div>
    </div>
  );
}
