import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { QuoteIcon } from "../../Icons";
import { TFunction } from "i18next";
interface AboutContentProps {
  t: TFunction<"common", undefined>;
}
export function AboutContent({ t }: AboutContentProps) {
  const router = useRouter();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div id="about">
      <div className={twMerge("p-4 lg:p-16", maxWidthContainer)}>
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-end">
          <h2 className="text-center lg:text-left m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full lg:w-1/2">
            {t("about.aboutHeading")}
          </h2>
          <p className="text-center lg:text-left m-0 text-[20px] w-full lg:w-1/2">
            {t("about.aboutSubHeading")}
          </p>
        </div>
      </div>
      <div className={twMerge("lg:mt-4 px-4 lg:p-16", maxWidthContainer)}>
        <Image
          src="/assets/images/about.png"
          width={1392}
          height={500}
          alt="about-us"
          className="w-full object-contain rounded-[16px]"
        />
      </div>

      <div className={twMerge("mt-4 p-4 lg:p-16", maxWidthContainer)}>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Founded */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 w-full lg:w-1/2">
            <div className="flex gap-2">
              <div className="bg-primary-500 w-3 h-3 mt-[5px] rounded-full"></div>
              <div>
                <p className="font-bold w-full m-0">{t("about.foundedIn")}</p>
                <p className="font-bold text-[24px] mt-2 w-full m-0">2023</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-primary-500 w-3 h-3 mt-[5px] rounded-full"></div>
              <div>
                <p className="font-bold w-full m-0">{t("about.location")}</p>
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
                {t("about.vision")}
              </h3>
              <p className="mt-2 text-[20px]">{t("about.visionContent")}</p>
            </div>
            <div id="mission" className="mt-8">
              <h3 className="text-primary-500 text-[24px] font-bold">
                {t("about.mission")}
              </h3>
              <ul className="mt-2 text-[20px] list-disc ml-6 flex flex-col gap-4">
                <li>{t("about.missionContent1")}</li>
                <li>{t("about.missionContent2")}</li>
                <li>{t("about.missionContent3")}</li>
                <li>{t("about.missionContent4")}</li>
                <li>{t("about.missionContent5")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-44">
        <div
          className={twMerge(
            "flex flex-col lg:flex-row justify-between gap-8 p-4 lg:p-16",
            maxWidthContainer
          )}
        >
          <div className="w-full lg:w-1/3">
            <h2 className="text-[40px] font-bold">{t("about.ourTeam")}</h2>
          </div>
          {/* <div className="w-full lg:w-1/3 flex justify-center">
            <div className="w-[276px] flex flex-col justify-center items-center">
              <Image
                src="/assets/images/team-1.jpg"
                width={276}
                height={329}
                alt="team-1"
                className="rounded-[12px] w-full object-cover w-[276px] h-[329px]"
              />
              <div className="mt-2 text-center">
                <h4 className="text-[24px] font-bold">Brandon Shaw</h4>
                <h5 className="text-base">Founder {"&"} CEO</h5>
              </div>
            </div>
          </div>

          <div className="relative p-4 w-3/4 mx-auto lg:w-1/3 flex">
            <QuoteIcon className="absolute top-2 lg:top-8 -left-8 lg:left-0" />
            <p className="text-[20px] z-10 mt-5 lg:mt-16">
              Our integrated solutions enhance hospital efficiency, simplify
              workflows for medical staff, and ensure faster, more accurate care
              for patients.
            </p>
          </div> */}
        </div>
        <div
          className={twMerge(
            "mt-4 lg:px-16 lg:pb-16 lg:pt-0",
            `lg:max-w-[100rem] lg:mx-auto`
          )}
        >
          <div className="hidden lg:flex justify-between gap-4 items-center">
            {Array.from({ length: 4 }).map(() => (
              <div className="w-1/4">
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
          <div className="block lg:hidden">
            <Swiper
              className="block lg:hidden mt-4 mb-12"
              modules={[Navigation]}
              spaceBetween={4}
              slidesPerView={1.25}
              centeredSlides
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
            >
              {Array.from({ length: 4 }).map(() => (
                <SwiperSlide>
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
