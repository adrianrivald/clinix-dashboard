import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { TFunction } from "i18next";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { Button, Card } from "../../../Ui";

interface SummaryFinishContentProps {
  t: TFunction<"common", undefined>;
}

export function SummaryFinishContent({ t }: SummaryFinishContentProps) {
  const router = useRouter();
  const onClickToHome = () => {
    router.push("/");
  };
  return (
    <div
      id="summary"
      className={twMerge("mb-24 p-4 lg:p-16", "max-w-[80rem] mx-auto")}
    >
      <div className="lg:mx-36">
        <div>
          <Card>
            <div className="text-center">
              <Image
                src="/assets/icons/registration-finish.svg"
                width={250}
                height={200}
                alt="finish"
                className="mx-auto"
              />
              <h2 className="font-bold text-[18px] lg:text-[30px]">
                Permintaan Berlangganan Telah Dikirim!
              </h2>
              <h3 className="mt-2 text-[14px] lg:text-base">
                Terima kasih! Kami telah menerima permintaan Anda.
              </h3>
            </div>
            <div className="mt-8 text-[14px]">
              <div id="identitas-diri" className="mt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Detail</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Nama Pelanggan</span>
                  <span>Dr. John Doe</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Nama Klinik</span>
                  <span>Praktek Dr. John Doe</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Alamat Klinik</span>
                  <span>RT22/RW10, Sanggrahan, Sentolo, Yogyakarta</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-[14px]">
              <span className="block font-bold">Langkah Selanjutnya</span>
              <span className="block mt-2">
                Tim kami, akan memverifikasi permintaan Anda. Tunggu email
                konfirmasi dalam 15 menit – 2 jam. Jika belum diterima, cek spam
                atau hubungi kami di 08979075890
              </span>
            </div>
            <div className="border-t-2 border-dashed border-neutral-400 w-full h-1 mt-8"></div>

            <div className="flex flex-col-reverse lg:flex-row  justify-between gap-4 mt-4">
              <Button
                onClick={onClickToHome}
                isClinix
                isPrimary
                title="Ke Halaman Utama"
                className="w-full"
              />
            </div>
          </Card>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
