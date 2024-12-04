import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";

export function WhyUs() {
  return (
    <div
      id="why-us"
      className={twMerge(
        "bg-[url('/assets/images/why-us.png')] p-8 lg:p-16 mt-32 bg-no-repeat bg-left-bottom bg-auto",
        maxWidthContainer
      )}
    >
      <div className="backdrop-blur-lg border border-2 rounded-xl shadow-xl p-8 relative min-h-[400px] w-[100%] mx-auto">
        <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:transform lg:w-[35%]">
          <h2 className="font-bold text-[32px]">Mengapa Memos?</h2>
          <p className="mt-4">
            Dengan teknologi kami, Anda bisa fokus memberikan perawatan terbaik
            kepada pasien, sementara sistem kami memastikan efisiensi dan
            keunggulan terintegrasi di balik layar, tanpa komplikasi teknis
          </p>
        </div>
        <div className="lg:absolute lg:-top-16 flex flex-col lg:-right-10 lg:w-[60%] gap-4 mt-8 lg:mt-0">
          <div className="p-8 bg-white shadow-md flex items-center gap-4 rounded-md">
            <Image
              src="/assets/images/usplogo.png"
              width={120}
              height={96}
              alt="usplogo"
              className="w-[15%] flex-none"
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
          <div className="p-8 bg-white shadow-md flex items-center gap-4 rounded-md">
            <Image
              src="/assets/images/usplogo2.png"
              width={64}
              height={56}
              alt="usplogo2"
              className="w-[15%] flex-none"
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
          <div className="p-8 bg-white shadow-md flex items-center gap-4 rounded-md">
            <Image
              src="/assets/images/usplogo3.png"
              width={64}
              height={56}
              alt="usplogo3"
              className="w-[15%] flex-none"
            />
            <div id="item-1">
              <h3 className="text-[20px] font-bold">
                Dirancang Spesifik untuk Setiap Spesialisasi
              </h3>
              <p className="mt-2">
                Sistem yang disesuaikan untuk kebutuhan unik setiap spesialisasi
                medis, memastikan fungsionalitas optimal dan kemudahan
                penggunaan bagi tim Anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
