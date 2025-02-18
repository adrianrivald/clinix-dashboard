import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, Fragment, useRef, useState } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { TFunction } from "i18next";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { Button, Card } from "../../../../../Ui";

interface PaymentFailedContentProps {
  t: TFunction<"common", undefined>;
}

interface SelectProps {
  label: string;
  id: string;
}

export function PaymentFailedContent({ t }: PaymentFailedContentProps) {
  const router = useRouter();

  const onBackToHome = () => {
    router.push("/dashboard");
  };

  return (
    <div
      id="summary"
      className={twMerge("mb-24 p-4 lg:p-16", "max-w-[80rem] mx-auto")}
    >
      <div className="lg:mx-36">
        <div>
          <Card>
            <div className="flex flex-col items-center gap-4 justify-center">
              <Image
                src="/assets/images/failed-payment.png"
                width={250}
                height={200}
                alt="failed-payment"
              />
              <h1 className="text-[24px] font-bold">Pembayaran Gagal!</h1>
              <p className="text-center">
                Maaf, kami tidak dapat memproses pembayaran Anda.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="font-bold mb-4">Kemungkinan penyebab</h2>
              <ul className="list-disc ml-5">
                <li className="mt-2">
                  Transfer belum diterima atau jumlah tidak sesuai
                </li>
                <li className="mt-2">Bukti pembayaran tidak valid</li>
                <li className="mt-2">Batas waktu pembayaran telah berakhir</li>
              </ul>
            </div>

            <div className="border-t-2 border-dashed border-neutral-400 w-full h-1 mt-8"></div>

            <div className="flex flex-col-reverse md:flex-row  justify-between gap-4 mt-8">
              <Button
                title="Hubungi Kami"
                className="w-full border-neutral-300 text-neutral-300"
              />
              <Button
                isPrimary
                onClick={onBackToHome}
                title="Konfirmasi Ulang"
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
