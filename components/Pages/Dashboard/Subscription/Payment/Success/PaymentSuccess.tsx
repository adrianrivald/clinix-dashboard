import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, Fragment, useRef, useState } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { TFunction } from "i18next";
import Image from "next/image";
import { Button, Card } from "../../../../../Ui";

interface PaymentSuccessContentProps {
  t: TFunction<"common", undefined>;
}

export function PaymentSuccessContent({ t }: PaymentSuccessContentProps) {
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
                src="/assets/images/success-payment.png"
                width={250}
                height={200}
                alt="success-payment"
              />
              <div className="flex flex-col gap-1 items-center">
                <h1 className="text-[24px] font-bold text-center">
                  Terima kasih! <br className="block md:hidden" /> Pembayaran
                  Anda telah diterima
                </h1>
                <p className="text-center">
                  Akses ke layanan Anda telah aktif. Anda dapat mulai
                  menggunakan Workspace sekarang!
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center mt-4">
              <p>Jumlah</p>
              <p className="text-[20px] text-primary-500 font-bold">
                IDR 297.000
              </p>
              <p>14 Oct 2024 • Pembayaran 82302393</p>
            </div>

            <div className="mt-8 text-[14px]">
              <div id="identitas-profesi" className="mt-8">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Detail Transaksi</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mt-4">
                  <span>Paket Langganan</span>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/logo/logo-clinix.png"
                      width={81}
                      height={24}
                      alt="logo-clinix"
                      className="cursor-pointer"
                    />
                    <span className="font-bold text-primary-500 text-[20px]">
                      3 Bulan – Rp297.000
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mt-4">
                  <span>Tagihan Kepada</span>
                  <span>Dr. John Doe - Yogyakarta</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mt-4">
                  <span>Metode Pembayaran</span>
                  <span>Bank Transfer</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mt-4">
                  <span>Nama Pemilik Rekening</span>
                  <span>PT Cipta Integrasi Nusantara</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mt-4">
                  <span>Nama Bank</span>
                  <span>BCA</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mt-4">
                  <span>No. Rekening</span>
                  <span>1234-5678-9890</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mt-4">
                  <span>Bukti Transfer</span>
                  <span className="underline text-link cursor-pointer">
                    8734.png
                  </span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mt-4">
                  <span>Total Pembayaran</span>
                  <span className="text-[14px] font-bold">IDR 99.000</span>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-dashed border-neutral-400 w-full h-1 mt-8"></div>

            <div className="flex flex-col-reverse md:flex-row  justify-between gap-4 mt-8">
              <Button
                title="Cetak Bukti Pembayaran"
                className="w-full border-neutral-300 text-neutral-300"
              />
              <Button
                isPrimary
                onClick={onBackToHome}
                title="Ke Halaman Utama"
                className="w-full"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
