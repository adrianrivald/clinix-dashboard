import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";
import { TFunction } from "i18next";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

interface HeroProps {
  onClickToDemo: () => void;
  t: TFunction<"common", undefined>;
}

export function Hero({ onClickToDemo, t }: HeroProps) {
  return (
    <div
      id="hero"
      className={twMerge(
        "flex flex-col lg:flex-row flex-col-reverse items-center min-h-[400px] gap-4 lg:gap-16 p-4 lg:p-0 lg:m-[4rem]",
        maxWidthContainer
      )}
    >
      {/* Hero image */}

      <Image
        src="/assets/images/dokter-hero-mobile.webp"
        width={300}
        height={293}
        alt="doctor-hero-m"
        className="block lg:hidden w-full "
        fetchPriority="high"
        loading="lazy"
      />
      <Image
        src="/assets/images/dokter-hero.png"
        width={700}
        height={740.61}
        alt="doctor-hero-d"
        className="hidden lg:block lg:w-1/2"
        fetchPriority="high"
        loading="lazy"
      />

      {/* Our Words */}
      <Fade direction="right" triggerOnce>
        <div
          id="our-words"
          className="mt-0 lg:mt-36 lg:mt-0 lg:px-16 lg:max-w-[40rem]"
        >
          <h1 className="text-[32px] font-bold text-center lg:text-left">
            {t("home.heroHeadline")}
          </h1>
          <p className="mt-4 text-base">{t("home.heroSubHeadline")}</p>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
            <Button
              title={t("home.tryDemo")}
              isPrimary
              className="w-full lg:w-auto"
              onClick={onClickToDemo}
            />
            <a href="mailto:info@notes.co.id" className="w-full lg:w-auto">
              <Button
                title={t("home.consultYourNeeds")}
                isPrimary={false}
                className="w-full lg:w-auto"
              />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}
