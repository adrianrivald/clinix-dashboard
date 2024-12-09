import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";

export function AboutContent() {
  const router = useRouter();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div id="about">
      <div className={twMerge("p-8 lg:p-16", maxWidthContainer)}>
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-end">
          <h2 className="text-center lg:text-left m-0 text-[32px] lg:text-[40px] font-bold w-full lg:w-1/2">
            we bridge the gap between healthcare providers and cutting-edge
            technology
          </h2>
          <p className="text-center lg:text-left m-0 text-[14px] text-[20px] w-full lg:w-1/2">
            Our integrated solutions enhance hospital efficiency, simplify
            workflows for medical staff, and ensure faster, more accurate care
            for patients.
          </p>
        </div>
      </div>
      <div className="mt-4 w-[95%] mx-auto">
        <Image
          src="/assets/images/about-us.jpg"
          width={1392}
          height={500}
          alt="about-us"
          className="w-full object-contain rounded-[16px]"
        />
      </div>

      <div className={twMerge("mt-4 p-8 lg:p-16", maxWidthContainer)}>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Founded */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 w-full lg:w-1/2">
            <div className="flex gap-2">
              <div className="bg-primary-500 w-3 h-3 mt-[5px] rounded-full"></div>
              <div>
                <p className="font-bold w-full m-0">Founded in</p>
                <p className="font-bold text-[24px] mt-2 w-full m-0">2023</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-primary-500 w-3 h-3 mt-[5px] rounded-full"></div>
              <div>
                <p className="font-bold w-full m-0">Location</p>
                <p className="font-bold text-[24px] mt-2 w-full m-0">
                  Sleman, Yogyakarta
                </p>
              </div>
            </div>
          </div>

          {/* Our Vision Mission */}
          <div className="w-full lg:w-1/2">
            <div id="vision">
              <h3 className="text-primary-500 text-[24px] font-bold">
                Our Vision
              </h3>
              <p className="mt-2 text-[20px]">
                to be the pioneer of integrated system providers that optimize
                hospital operations by caring for and facilitating every medical
                personnel without exception.
              </p>
            </div>
            <div id="mission" className="mt-8">
              <h3 className="text-primary-500 text-[24px] font-bold">
                Our Mission
              </h3>
              <ul className="mt-2 text-[20px] list-disc ml-6 flex flex-col gap-4">
                <li>
                  Providing integrated solutions that bring together all aspects
                  of healthcare management{" "}
                </li>
                <li>
                  Improve operational efficiency and service accuracy for
                  patient welfare{" "}
                </li>
                <li>
                  Deliver an adaptive system that is easy to use by medical
                  personnel
                </li>
                <li>
                  Encourage wider digitization in the healthcare ecosystem
                </li>
                <li>
                  Build strong partnerships to improve service quality and
                  competency of medical personnel
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-[40px] font-bold text-center">
            Meet our amazing team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {Array.from({ length: 8 }).map(() => (
              <div>
                <Image
                  src="/assets/images/team-1.jpg"
                  width={276}
                  height={329}
                  alt="team-1"
                  className="rounded-[12px] w-full object-cover h-[400px]"
                />
                <div className="mt-2">
                  <h4 className="text-[24px] font-bold">Brandon Shaw</h4>
                  <h5 className="text-base">Founder {"&"} CEO</h5>
                </div>
              </div>
            ))}
          </div>

          {/* <Swiper
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={8}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {Array.from({ length: 18 }).map(() => (
              <div>
                <Image
                  src="/assets/images/team-1.jpg"
                  width={276}
                  height={329}
                  alt="team-1"
                  className="rounded-[12px] w-full object-cover h-[400px]"
                />
                <div className="mt-2">
                  <h4 className="text-[24px] font-bold">Brandon Shaw</h4>
                  <h5 className="text-base">Founder {"&"} CEO</h5>
                </div>
              </div>
            ))}
          </Swiper> */}
        </div>
      </div>
    </div>
  );
}
