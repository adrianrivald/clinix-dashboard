import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, Fragment, useRef, useState } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { TFunction } from "i18next";
import Image from "next/image";
import { Button, Card } from "../../../../Ui";
import { ArrowDownIcon } from "../../../../Icons";
import { bankList } from "../../../../constants/constants";

interface PaymentContent {
  t: TFunction<"common", undefined>;
}

interface SelectProps {
  label: string;
  id: string;
}

export function PaymentContent({ t }: PaymentContent) {
  const router = useRouter();
  const [isChecked, setIsChecked] = React.useState(false);
  const { register, handleSubmit, watch } = useForm<any>();
  const [selectedBank, setSelectedBank] = useState<SelectProps>();
  const [buktiTransfer, setBuktiTransfer] = useState<File>();

  const onCheckAgreement = () => {
    setIsChecked((prev) => !prev);
  };

  const onFinishRegistration = () => {
    router.push("/registration/summary/finish");
  };

  const onPreviousStep = () => {
    router.push("/dashboard/subscription");
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setBuktiTransfer(file);
    }
  };

  return (
    <div
      id="summary"
      className={twMerge("mb-24 p-4 lg:p-16", "max-w-[80rem] mx-auto")}
    >
      <div className="lg:mx-36">
        <div>
          <Card>
            <div className="flex items-center gap-4 mb-4">
              <Image
                onClick={onPreviousStep}
                src="/assets/icons/arrow-back.svg"
                alt="back"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              {/* Heading */}
              <div className="flex flex-col gap-2">
                <h1 className="text-[24px] font-bold">Detail Pembayaran</h1>
              </div>
              {/* Heading */}
            </div>
            <div className="border-t-2 border-neutral-250 w-full h-1"></div>
            <div className="p-4 bg-[#E9F1FC] text-link rounded-[8px] mt-6">
              Silakan melakukan transfer sebelum 24 Februari 2025, 23:59 WIB
              untuk menghindari pembatalan otomatis.
            </div>
            <div className="mt-6 text-[14px]">
              <div id="identitas-diri" className="mt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Instruksi Transfer</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Transfer ke</span>
                  <span>BCA</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Nomor Rekening</span>
                  <span>1234-5678-9890</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Nama Penerima</span>
                  <span>PT Cipta Integrasi Nusantara</span>
                </div>
              </div>
            </div>
            <div className="mt-8 text-[14px]">
              <div id="identitas-profesi" className="mt-8">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Detail Transaksi</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
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
                    <span className="text-primary-500 underline cursor-pointer">
                      Ubah
                    </span>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Tagihan Kepada</span>
                  <span>Dr. John Doe - Yogyakarta</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Metode Pembayaran</span>
                  <span>Bank Transfer</span>
                </div>
                <div className="border-t-2 border-neutral-250 w-full h-1 mt-4"></div>

                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-2">
                  <span>Subtotal</span>
                  <span className="text-[12px]">IDR 99.000</span>
                </div>

                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-2">
                  <span>Total</span>
                  <span className="text-[14px] font-bold">IDR 99.000</span>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-dashed border-neutral-400 w-full h-1 mt-8"></div>

            <div className="mt-8 text-[14px]">
              <div id="identitas-profesi" className="mt-8">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Detail Transfer</span>
                </div>
                <div className="w-full flex flex-col gap-2 mt-4">
                  <label className="text-[14px] font-medium" htmlFor="fullname">
                    Nama Lengkap
                    <span className="text-warning">*</span>
                  </label>
                  <input
                    id="fullname"
                    {...register("fullname", { required: true })}
                    type="text"
                    className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                    placeholder="Masukkan Nama Lengkap"
                  />
                </div>

                <div className="w-full flex flex-col gap-2 mt-4">
                  <label className="text-[14px] font-medium" htmlFor="gender">
                    Nama Bank
                    <span className="text-warning">*</span>
                  </label>

                  <Listbox value={selectedBank} onChange={setSelectedBank}>
                    <div className="relative">
                      <Listbox.Button className="border border-neutral-100 relative w-full cursor-default rounded-md bg-white py-4 pl-4 pr-10 text-left focus:outline-none">
                        <span className="block truncate">
                          {selectedBank ? (
                            selectedBank?.label
                          ) : (
                            <span className="text-neutral-400">
                              Pilih Nama Bank
                            </span>
                          )}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ArrowDownIcon />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                          {bankList.map((bank, idx) => (
                            <Listbox.Option
                              key={idx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active ? "bg-green-100" : ""
                                }`
                              }
                              value={bank}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {bank?.label}
                                  </span>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="w-full flex flex-col gap-2 mt-4">
                  <label
                    className="text-[14px] font-medium"
                    htmlFor="no_rekening"
                  >
                    Nomor Rekening
                    <span className="text-warning">*</span>
                  </label>
                  <input
                    id="no_rekening"
                    {...register("no_rekening", { required: true })}
                    type="text"
                    className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                    placeholder="Masukkan Nomor Rekening"
                  />
                </div>

                <div className="w-full flex flex-col gap-2 mt-4">
                  <label
                    className="text-[14px] font-medium"
                    htmlFor="bukti_transfer"
                  >
                    Unggah Bukti Transfer
                    <span className="text-warning">*</span>
                  </label>
                  <div className="relative rounded-[8px] p-4 border border-neutral-100 flex items-center gap-2">
                    <input
                      {...register("bukti_transfer", { required: true })}
                      type="text"
                      className="focus:outline-none w-full"
                      placeholder="Unggah Bukti Transfer"
                      value={buktiTransfer?.name}
                      readOnly
                    />
                    <input
                      type="file"
                      hidden
                      id="bukti_transfer"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="bukti_transfer"
                      className="text-link cursor-pointer"
                    >
                      Unggah
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="mt-8">
            <p>
              Jika Anda telah melakukan pembayaran, klik tombol di bawah ini
              untuk konfirmasi.
            </p>
            <div className="flex flex-col-reverse lg:flex-row  justify-between gap-4 mt-4">
              <Button
                title="Ke Halaman Utama"
                className="w-full border-neutral-300 text-neutral-300"
              />
              <Button
                isPrimary
                onClick={onFinishRegistration}
                title="Konfirmasi Pembayaran"
                className="w-full"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
