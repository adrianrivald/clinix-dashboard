import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";

export function WhyUs() {
  return (
    <div
      id="why-us"
      className={twMerge(
        "bg-[url('/assets/images/why-us.png')] p-16 mt-32 bg-no-repeat bg-left-bottom bg-auto",
        maxWidthContainer
      )}
    >
      <div className="backdrop-blur-lg border border-2 rounded-xl shadow-xl p-8 relative min-h-[400px] w-[100%] mx-auto">
        <div className="absolute top-1/2 -translate-y-1/2 transform w-[30%]">
          <h2 className="font-bold text-[32px]">Mengapa Memos?</h2>
          <p className="mt-4">
            Dengan teknologi kami, Anda bisa fokus memberikan perawatan terbaik
            kepada pasien, sementara sistem kami memastikan efisiensi dan
            keunggulan terintegrasi di balik layar, tanpa komplikasi teknis
          </p>
        </div>
        <div className="absolute -top-10 flex flex-col -right-10 w-1/2 gap-2">
          <div className="p-8 bg-primary-100 flex items-center gap-4 rounded-md">
            <Image
              src="/assets/images/usplogo.png"
              width={120}
              height={96}
              alt="usplogo"
            />
            <div id="item-1">
              <h3 className="text-[20px] font-bold">
                Terintegrasi dengan SatuSehat dan BPJS Kesehatan
              </h3>
              <p className="mt-2">
                Raih efisiensi dengan sistem kesehatan yang terhubung langsung
                ke SatuSehat dan BPJS Kesehatan. Proses administrasi lebih cepat
                dan sinkronisasi data lebih andal
              </p>
            </div>
          </div>
          <div className="p-8 bg-primary-100 flex items-center gap-4 rounded-md">
            <Image
              src="/assets/images/placeholder.png"
              width={64}
              height={56}
              alt="placeholder"
            />
            <div id="item-1">
              <h3 className="text-[20px] font-bold">
                Siap Pakai Tanpa Konfigurasi Tambahan
              </h3>
              <p className="mt-2">
                Raih efisiensi dengan sistem kesehatan yang terhubung langsung
                ke SatuSehat dan BPJS Kesehatan. Proses administrasi lebih cepat
                dan sinkronisasi data lebih andal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
