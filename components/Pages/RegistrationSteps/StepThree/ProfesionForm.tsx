import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../../constants/class";
import { useSearchDebounce } from "../../../../helpers/hooks";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightBlueIcon,
  SuccessDemo,
} from "../../../Icons";
import { SearchBox } from "../../../SearchBox/SearchBox";
import { Button, Card } from "../../../Ui";
import { TFunction } from "i18next";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import Countdown from "../../../../helpers/countdown";
import PinInput from "../../../Ui/Pin";
import {
  businesses,
  profesions,
  spesialisData,
} from "../../../constants/constants";

interface IdentityFormProps {
  t: TFunction<"common", undefined>;
}

interface SelectProps {
  label: string;
  id: string;
}

interface Province {
  id: number;
  name: string;
}

interface City {
  id: number;
  name: string;
  province_id: number;
}

export function ProfesionForm({ t }: IdentityFormProps) {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<any>();
  const form = useRef() as any;
  const [selectedProfesion, setSelectedProfesion] = useState<SelectProps>();
  const [selectedSpesialis, setSelectedSpesialis] = useState<SelectProps>();
  const [selectedBusiness, setSelectedBusiness] = useState<SelectProps>();

  const [isHidePassword, setIsHidePassword] = useState(true);

  const onNextStep = () => {
    router.push("/registration/step/3");
  };

  const onPreviousStep = () => {
    router.push("/registration/step/1");
  };

  const onSubmit: SubmitHandler<any> = async () => {
    // TODO Submit handler
  };
  return (
    <div
      id="terms-condition"
      className={twMerge("mb-24 p-4 lg:p-16", "max-w-[1200rem] mx-auto")}
    >
      <div className="lg:mx-36">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <div className="flex items-center gap-4 mb-2">
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
                <h1 className="text-[24px] font-bold">Identitas Profesi</h1>
                <span className="text-[14px] text-neutral-300">
                  Langkah 3 dari 3
                </span>
              </div>
              {/* Heading */}
            </div>
            <div className="border border-t border-neutral-200 w-full mt-2" />
            <div className="flex flex-col gap-8 mt-6">
              {/* Top fields */}
              <div className="flex flex-col gap-4">
                {/* Row 1 */}
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[14px] font-medium" htmlFor="gender">
                      Profesi/Jabatan
                      <span className="text-warning">*</span>
                    </label>

                    <Listbox
                      value={selectedProfesion}
                      onChange={setSelectedProfesion}
                    >
                      <div className="relative">
                        <Listbox.Button className="border border-neutral-100 relative w-full cursor-default rounded-md bg-white py-4 pl-4 pr-10 text-left focus:outline-none">
                          <span className="block truncate">
                            {selectedProfesion ? (
                              selectedProfesion?.label
                            ) : (
                              <span className="text-neutral-400">
                                Pilih Profesi/Jabatan
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
                            {profesions.map((profesion, idx) => (
                              <Listbox.Option
                                key={idx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? "bg-green-100" : ""
                                  }`
                                }
                                value={profesion}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {profesion?.label}
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
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[14px] font-medium" htmlFor="gender">
                      SMF
                      <span className="text-warning">*</span>
                    </label>

                    <Listbox
                      value={selectedSpesialis}
                      onChange={setSelectedSpesialis}
                    >
                      <div className="relative">
                        <Listbox.Button className="border border-neutral-100 relative w-full cursor-default rounded-md bg-white py-4 pl-4 pr-10 text-left focus:outline-none">
                          <span className="block truncate">
                            {selectedSpesialis ? (
                              selectedSpesialis?.label
                            ) : (
                              <span className="text-neutral-400">
                                Pilih Spesialis
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
                            {spesialisData.map((spesialis, idx) => (
                              <Listbox.Option
                                key={idx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? "bg-green-100" : ""
                                  }`
                                }
                                value={spesialis}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {spesialis?.label}
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
                </div>

                {/* Row 2 */}
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="w-full flex flex-none w-1/2 flex-col gap-2">
                    <label className="text-[14px] font-medium" htmlFor="no_str">
                      No. STR Aktif
                      <span className="text-warning">*</span>
                    </label>
                    <input
                      id="no_str"
                      {...register("no_str", { required: true })}
                      type="text"
                      className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                      placeholder="Masukkan No. STR"
                    />
                  </div>
                  <div className="flex items-center flex-none gap-2 w-1/2">
                    <div className="w-full flex flex-col gap-2 flex-none w-1/2">
                      <label
                        className="text-[14px] font-medium"
                        htmlFor="expired_date"
                      >
                        Tanggal Habis Berlaku
                        <span className="text-warning">*</span>
                      </label>

                      <input
                        id="expired_date"
                        {...register("expired_date", { required: true })}
                        type="date"
                        className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                        placeholder="Tanggal Habis Berlaku"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2 flex-none w-1/2">
                      <label
                        className="text-[14px] font-medium"
                        htmlFor="no_str_file"
                      >
                        Unggah STR Aktif
                        <span className="text-warning">*</span>
                      </label>
                      <input
                        id="no_str_file"
                        {...register("no_str_file", { required: true })}
                        type="no_str_file"
                        className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                        placeholder="Unggah No. STR"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="w-full flex flex-none w-1/2 flex-col gap-2">
                    <label
                      className="text-[14px] font-medium"
                      htmlFor="organization"
                    >
                      Organisasi
                      <span className="text-warning">*</span>
                    </label>
                    <input
                      id="organization"
                      {...register("organization", { required: true })}
                      type="text"
                      className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                      placeholder="Masukkan nama organisasi"
                    />
                  </div>
                  <div className="w-full flex flex-none w-1/2 flex-col gap-2">
                    <label className="text-[14px] font-medium" htmlFor="clinic">
                      Nama Klinik/Usaha
                      <span className="text-warning">*</span>
                    </label>
                    <input
                      id="clinic"
                      {...register("clinic", { required: true })}
                      type="text"
                      className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                      placeholder="Masukkan nama klinik/usaha"
                    />
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-dashed border-neutral-400 w-full h-1"></div>

              {/* Bottom fields */}

              {/* Row 3 */}
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="w-full flex flex-none w-1/2 flex-col gap-2">
                  <label
                    className="text-[14px] font-medium"
                    htmlFor="organization"
                  >
                    Organisasi
                    <span className="text-warning">*</span>
                  </label>
                  <input
                    id="organization"
                    {...register("organization", { required: true })}
                    type="text"
                    className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                    placeholder="Masukkan nama organisasi"
                  />
                </div>
                <div className="w-full flex flex-none w-1/2 flex-col gap-2">
                  <label className="text-[14px] font-medium" htmlFor="clinic">
                    Nama Klinik/Usaha
                    <span className="text-warning">*</span>
                  </label>
                  <input
                    id="clinic"
                    {...register("clinic", { required: true })}
                    type="text"
                    className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                    placeholder="Masukkan nama klinik/usaha"
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="w-full flex flex-none w-1/2 flex-col gap-2">
                  <label
                    className="text-[14px] font-medium"
                    htmlFor="organization"
                  >
                    Jenis Usaha
                    <span className="text-warning">*</span>
                  </label>

                  <Listbox
                    value={selectedBusiness}
                    onChange={setSelectedBusiness}
                  >
                    <div className="relative">
                      <Listbox.Button className="border border-neutral-100 relative w-full cursor-default rounded-md bg-white py-4 pl-4 pr-10 text-left focus:outline-none">
                        <span className="block truncate">
                          {selectedBusiness ? (
                            selectedBusiness?.label
                          ) : (
                            <span className="text-neutral-400">
                              Pilih Jenis Usaha
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
                          {businesses.map((business, idx) => (
                            <Listbox.Option
                              key={idx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active ? "bg-green-100" : ""
                                }`
                              }
                              value={business}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {business?.label}
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
                <div className="w-full flex flex-none w-1/2 flex-col gap-2">
                  <label
                    className="text-[14px] font-medium"
                    htmlFor="no_str_file"
                  >
                    Unggah Foto Tempat Klinik/Usaha (Opsional)
                  </label>
                  <input
                    id="no_str_file"
                    {...register("no_str_file", { required: true })}
                    type="no_str_file"
                    className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                    placeholder="Unggah Foto Tempat Praktek"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  className="accent-green-500 w-4 h-4"
                  id="same_address"
                  type="checkbox"
                />

                <label htmlFor="same_address" className="cursor-pointer">
                  Alamat sama dengan alamat pribadi
                </label>
              </div>
            </div>
          </Card>
          <Card className="mt-8">
            <Button
              onClick={onNextStep}
              isClinix
              isPrimary
              className="w-full"
              title="Simpan"
            />
          </Card>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
