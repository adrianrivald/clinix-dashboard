import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { ArrowLeft, ArrowRight, Star } from "../Icons";

export function Testimoni() {
  return (
    <div
      id="testimoni"
      className={twMerge(
        "bg-[url('/assets/images/testi.png')] p-16 mt-32 bg-no-repeat bg-right-top bg-auto",
        maxWidthContainer
      )}
    >
      <div className="backdrop-blur-lg border border-2 rounded-xl shadow-xl p-8 relative min-h-[400px] w-[100%] mx-auto">
        <div className="flex items-center justify-between mx-16">
          <h2 className="font-bold text-[32px] ">
            Apa kata
            <br />
            Klien Kami
          </h2>
          <div className="flex gap-2">
            <div className="bg-primary-500 px-6 py-4 rounded-md">
              <ArrowLeft />
            </div>
            <div className="bg-primary-500 px-6 py-4 rounded-md">
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <div className="bg-primary-100 rounded-md p-4 w-1/2">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/images/testi-1.png"
                  width={60}
                  height={60}
                  alt="testi-1"
                />
                <div className="">
                  <h4 className="font-bold">Dr Ridwan Winoto</h4>
                  <p>Dokter Spesialis Penyakit Dalam</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            <div className="bg-white rounded-md mt-4 p-4">
              <p>
                “ERP ini sangat membantu! Integrasi dengan BPJS dan fitur khusus
                spesialisasi membuat pekerjaan lebih efisien. Siap pakai tanpa
                ribet, jadi saya bisa lebih fokus ke pasien”
              </p>
            </div>
          </div>
          <div className="bg-primary-100 rounded-md p-4 w-1/2">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/images/testi-2.png"
                  width={60}
                  height={60}
                  alt="testi-1"
                />
                <div className="">
                  <h4 className="font-bold">Maryam Kusniawati</h4>
                  <p>Kepala Suster</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            <div className="bg-white rounded-md mt-4 p-4">
              <p>
                “Sistem ini mempermudah koordinasi tim kami. Integrasi dengan
                BPJS dan fitur siap pakai menghemat waktu, sehingga kami bisa
                lebih fokus pada perawatan pasien”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
