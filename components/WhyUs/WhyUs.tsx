import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { LayananIcon, SolusiIcon, UspIcon } from "../Icons";

export function WhyUs() {
  return (
    <div
      id="why-us"
      className={twMerge(
        "bg-[url('/assets/images/why-us.png')] p-4 lg:p-16 mt-8 lg:mt-32 bg-no-repeat bg-top lg:bg-left-bottom bg-auto",
        maxWidthContainer
      )}
    >
      <div className="backdrop-blur-lg border border-2 rounded-xl shadow-xl p-8 relative min-h-[400px] w-[100%] mx-auto">
        <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:transform lg:w-[35%]">
          <h2 className="w-1/2 lg:w-full font-bold text-[32px]">
            Mengapa Memos?
          </h2>
          <p className="mt-4">
            Dengan teknologi kami, Anda bisa fokus memberikan perawatan terbaik
            kepada pasien, sementara sistem kami memastikan efisiensi dan
            keunggulan terintegrasi di balik layar, tanpa komplikasi teknis
          </p>
        </div>
        <div className="lg:absolute lg:-top-16 flex flex-col lg:-right-10 lg:w-[60%] gap-4 mt-8 lg:mt-0">
          <div className="p-8 bg-white shadow-md flex flex-col lg:flex-row items-start lg:items-center gap-4 rounded-md">
            <UspIcon className="lg:w-[15%] flex-none" />
            <div id="item-1">
              <h3 className="text-[20px] font-bold">
                Integrasi Tanpa Hambatan
              </h3>
              <p className="mt-2">
                Solusi kesehatan tanpa hambatan, dengan integrasi langsung ke
                Satusehat dan BPJS, semua kebutuhan kesehatan Anda terkelola
                dengan mudah, cepat, dan tanpa hambatan.
              </p>
            </div>
          </div>
          <div className="p-8 bg-white shadow-md flex flex-col lg:flex-row items-start lg:items-center gap-4 rounded-md">
            <LayananIcon className="lg:w-[15%] flex-none" />
            <div id="item-1">
              <h3 className="text-[20px] font-bold">
                Layanan Siap Pakai, Praktis dan Cepat
              </h3>
              <p className="mt-2">
                Kemudahan layanan yang siap pakai langsung, tanpa proses rumit
                atau pengaturan tambahan, untuk pengalaman kesehatan yang lebih
                praktis.
              </p>
            </div>
          </div>
          <div className="p-8 bg-white shadow-md flex flex-col lg:flex-row items-start lg:items-center gap-4 rounded-md">
            <SolusiIcon className="lg:w-[15%] flex-none" />
            <div id="item-1">
              <h3 className="text-[20px] font-bold">
                Solusi Spesifik untuk Setiap Spesialis
              </h3>
              <p className="mt-2">
                Solusi kesehatan yang dibuat spesifik untuk setiap spesialis,
                layanan kami dirancang khusus untuk kebutuhan unik setiap
                spesialis, memastikan perawatan yang lebih tepat dan efisien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
