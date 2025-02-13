import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useRef, useState } from "react";
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

interface IdentityFormProps {
  t: TFunction<"common", undefined>;
}

interface SelectProps {
  label: string;
  id: string;
}

const genders = [
  {
    id: "male",
    label: "Laki-laki",
  },
  {
    id: "female",
    label: "Perempuan",
  },
];

export function IdentityForm({ t }: IdentityFormProps) {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<any>();
  const form = useRef() as any;
  const [selectedGender, setSelectedGender] = useState<SelectProps>();

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
                <h1 className="text-[24px] font-bold">Identitas Diri</h1>
                <span className="text-[14px] text-neutral-300">
                  Langkah 2 dari 3
                </span>
              </div>
              {/* Heading */}
            </div>
            <div className="border border-t border-neutral-200 w-full mt-2" />
            <div className="flex flex-col gap-8 mt-6">
              <div className="flex flex-col gap-4">
                {/* Row 1 */}
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[14px] font-medium" htmlFor="nik">
                      NIK <span className="text-warning">*</span>
                    </label>
                    <input
                      id="nik"
                      {...register("nik", { required: true })}
                      type="text"
                      className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                      placeholder="Masukkan NIK"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[14px] font-medium" htmlFor="foto">
                      Unggah KTP
                      <span className="text-warning">*</span>
                    </label>
                    <input
                      id="foto"
                      {...register("foto", { required: true })}
                      type="foto"
                      className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
                      placeholder="Unggah Foto KTP"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="w-full flex flex-col gap-2">
                    <label
                      className="text-[14px] font-medium"
                      htmlFor="fullname"
                    >
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
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[14px] font-medium" htmlFor="gender">
                      Jenis Kelamin
                      <span className="text-warning">*</span>
                    </label>

                    <Listbox
                      value={selectedGender}
                      onChange={setSelectedGender}
                    >
                      <div className="relative">
                        <Listbox.Button className="border border-neutral-100 relative w-full cursor-default rounded-md bg-white py-4 pl-4 pr-10 text-left focus:outline-none">
                          <span className="block truncate">
                            {selectedGender ? (
                              selectedGender?.label
                            ) : (
                              <span className="text-neutral-400">
                                Pilih Jenis Kelamin
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
                            {genders.map((gender, idx) => (
                              <Listbox.Option
                                key={idx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? "bg-green-100" : ""
                                  }`
                                }
                                value={gender}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {gender?.label}
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
              </div>
            </div>
          </Card>
          <Card className="mt-8">
            <Button
              onClick={onNextStep}
              isClinix
              isPrimary
              className="w-full"
              title="Selanjutnya"
            />
          </Card>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
