import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useRef, useState } from "react";
import {
  set,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Button, Card } from "../../Ui";
import { TFunction } from "i18next";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import Countdown from "../../../helpers/countdown";
import PinInput from "../../Ui/Pin";
import { title } from "process";
import {
  ArrowDownIcon,
  ChevronRightIcon,
  GearIcon,
  LogoutIcon,
  ProfileHomeIcon,
  ProfileIcon,
  ProfileMenuIcon,
  WorkIcon,
} from "../../Icons";

interface ProfileContentProps {
  t: TFunction<"common", undefined>;
}

const orgList = [
  {
    id: "1",
    label: "PT. Setio Husodo",
    logo: "/assets/images/logo-setio.png",
    workspaces: [
      {
        id: "1",
        label: "RS Setio Husodo Yogya",
      },

      {
        id: "2",
        label: "RS Setio Husodo Medan",
      },
    ],
  },
  {
    id: "2",
    label: "PT. Healthy",
    logo: "/assets/images/logo-healthy.png",
  },
];

interface SelectProps {
  label: string;
  id: string;
  logo: string;
}

interface AccountContainerProps {
  form: any;
  handleSubmit: UseFormHandleSubmit<any, undefined>;
  onSubmit: SubmitHandler<any>;
  register: UseFormRegister<any>;
}

function AccountContainer({
  form,
  handleSubmit,
  onSubmit,
  register,
}: AccountContainerProps) {
  return (
    <div id="akun">
      <span>Foto Profil {"(Optional)"}</span>

      <Image
        className="mt-4"
        src="/assets/images/dummy-ava-2.png"
        width={56}
        height={56}
        alt="ava"
      />
      <span className="block mt-4">No. Memos: 48188</span>
      <form className="mt-8" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-[14px] font-medium" htmlFor="username">
              Username
              <span className="text-warning">*</span>
            </label>
            <input
              id="username"
              {...register("username", { required: true })}
              type="text"
              className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
              placeholder="Masukkan Username"
              defaultValue="Dr. Tony Molly"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-[14px] font-medium" htmlFor="username">
              Email
              <span className="text-warning">*</span>
            </label>
            <input
              id="email"
              {...register("email", { required: true })}
              type="email"
              className="rounded-[8px] p-4 border border-neutral-100 focus:outline-none"
              placeholder="Masukkan Email"
              defaultValue="tonymolly@gmail.com"
            />
          </div>
          <div onClick={() => {}}>
            <span className="text-primary-500">Ubah Password</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export function ProfileContent({ t }: ProfileContentProps) {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<any>();
  const [openedSection, setOpenedSection] = useState("account");
  const form = useRef() as any;

  const onSubmit: SubmitHandler<any> = async () => {
    // TODO Submit handler
  };
  return (
    <div id="profile" className={twMerge("max-w-full mx-auto")}>
      <div className="flex">
        <div className="w-full lg:w-1/4 h-screen border-r border-neutral-250 p-4 lg:p-8">
          <div className="flex items-center gap-5">
            <ProfileHomeIcon className="w-[16px] h-[16px]" />
            <ChevronRightIcon className="w-[14px] h-[14px]" />
            <span>Tony Moly</span>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <Image
              src="/assets/images/dummy-ava-2.png"
              width={88}
              height={88}
              alt="ava"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] font-bold">Tony Moly</h1>
              <span>No. Memos: 48188</span>
              <div className="flex items-center gap-1">
                <div className="bg-[#FFE5ED] rounded-full px-4 py-1 text-[#E40044]">
                  Perempuan
                </div>
                <div className="bg-neutral-200 rounded-full px-4 py-1 text-neutral-300">
                  31 Tahun
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 mt-6 border-neutral-250 w-full h-1"></div>

          <div className="flex flex-col gap-6 mt-8">
            {/* Akun */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ProfileIcon className="w-[14px] h-[14px]" />
                  <span className="font-bold">Akun</span>
                </div>
                <ChevronRightIcon className="w-[12px] h-[12px]" />
              </div>
              <span className="text-neutral-300">
                Kelola informasi utama yang digunakan untuk masuk ke akun Anda
              </span>
            </div>

            {/* Profil */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ProfileMenuIcon className="w-[14px] h-[14px]" />
                  <span className="font-bold">Profil</span>
                </div>
                <ChevronRightIcon className="w-[12px] h-[12px]" />
              </div>
              <span className="text-neutral-300">
                Identitas diri, kontak, alamat, bahasa, keluarga, dan kartu
                identitas untuk keperluan verifikasi.
              </span>
            </div>

            {/* Informasi Profesional */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <WorkIcon className="w-[14px] h-[14px]" />
                  <span className="font-bold">Informasi Profesional</span>
                </div>
                <ChevronRightIcon className="w-[12px] h-[12px]" />
              </div>
              <span className="text-neutral-300">
                Informasi profesional mencakup latar belakang pekerjaan dan
                pendidikan untuk mendukung koneksi atau layanan
              </span>
            </div>
          </div>
          <div className="border-t-2 mt-6 border-neutral-250 w-full h-1"></div>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <GearIcon className="w-[14px] h-[14px]" />
                <span className="font-bold">Pengaturan</span>
              </div>
              <ChevronRightIcon className="w-[12px] h-[12px]" />
            </div>
          </div>

          <div className="border-t-2 mt-6 border-neutral-250 w-full h-1"></div>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <LogoutIcon className="w-[14px] h-[14px]" />
                <span className="font-bold">Keluar</span>
              </div>
              <ChevronRightIcon className="w-[12px] h-[12px]" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-auto flex-auto p-4 lg:p-8">
          {openedSection === "account" && (
            <AccountContainer
              form={form}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
            />
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
