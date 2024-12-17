import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "../Icons";
import { TFunction } from "i18next";

const testimoniData = [
  {
    photo: "/assets/images/testi-1.png",
    name: "Dr Ridwan Winoto",
    occupation: "Dokter Spesialis Penyakit Dalam",
    content: `“ERP ini sangat membantu! Integrasi dengan BPJS dan fitur
    khusus spesialisasi membuat pekerjaan lebih efisien. Siap
    pakai tanpa ribet, jadi saya bisa lebih fokus ke pasien”`,
  },
  {
    photo: "/assets/images/testi-2.png",
    name: "Maryam Kusniawati",
    occupation: "Kepala Suster",
    content: ` “Sistem ini mempermudah koordinasi tim kami. Integrasi dengan
    BPJS dan fitur siap pakai menghemat waktu, sehingga kami bisa
    lebih fokus pada perawatan pasien”`,
  },
  {
    photo: "/assets/images/testi-2.png",
    name: "Maryam Kusniawati",
    occupation: "Kepala Suster",
    content: ` “Sistem ini mempermudah koordinasi tim kami. Integrasi dengan
    BPJS dan fitur siap pakai menghemat waktu, sehingga kami bisa
    lebih fokus pada perawatan pasien”`,
  },
  {
    photo: "/assets/images/testi-2.png",
    name: "Maryam Kusniawati",
    occupation: "Kepala Suster",
    content: ` “Sistem ini mempermudah koordinasi tim kami. Integrasi dengan
    BPJS dan fitur siap pakai menghemat waktu, sehingga kami bisa
    lebih fokus pada perawatan pasien”`,
  },
];

interface TestimoniProps {
  t: TFunction<"common", undefined>;
}

export function Testimoni({ t }: TestimoniProps) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div
      id="testimoni"
      className={twMerge(
        "bg-[url('/assets/images/testi.png')] p-4 lg:p-16 mt-16 lg:mt-32 bg-no-repeat bg-right-top bg-auto",
        maxWidthContainer
      )}
    >
      <div className="backdrop-blur-lg border border-2 rounded-xl shadow-xl p-8 relative min-h-[400px] w-[100%] mx-auto">
        {/* <div className="flex items-center gap-4 mt-8"> */}
        <Swiper
          className="flex flex-col flex-reverse"
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView={2}
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
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mx-16 gap-2 mb-4">
            <h2 className="font-bold text-[32px] ">
              {t("home.testimoniHeading")}
            </h2>
            <div className="flex gap-2">
              <div
                ref={navigationPrevRef}
                className="cursor-pointer bg-primary-500 px-6 py-4 rounded-md"
              >
                <ArrowLeftIcon />
              </div>
              <div
                ref={navigationNextRef}
                className="cursor-pointer bg-primary-500 px-6 py-4 rounded-md"
              >
                <ArrowRightIcon />
              </div>
            </div>
          </div>
          {testimoniData &&
            testimoniData?.map((data) => (
              <SwiperSlide>
                <div className="bg-primary-100 rounded-md p-4 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={data?.photo}
                        width={60}
                        height={60}
                        alt="testi-1"
                      />
                      <div className="">
                        <h4 className="font-bold">{data?.name}</h4>
                        <p>{data?.occupation}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-3 lg:ml-0 mt-2 lg:mt-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <div className="bg-white rounded-md mt-4 px-4 py-8 min-h-[150px] flex items-center">
                    <p>{data?.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* </div> */}
    </div>
  );
}
