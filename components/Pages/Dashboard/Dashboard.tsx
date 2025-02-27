import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useRef, useState } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Button, Card } from "../../Ui";
import { TFunction } from "i18next";
import Image from "next/image";
import Countdown from "../../../helpers/countdown";
import PinInput from "../../Ui/Pin";
import { title } from "process";
import { CloseIcon, DownloadIcon } from "../../Icons";

interface DashboardContentProps {
  t: TFunction<"common", undefined>;
}

const activities = [
  {
    title: "Akun Berhasil Dibuat",
    created_at: "19 Desember 2024 - 09:00 WIB",
    extra: null,
  },
  {
    title: "Permintaan Berlangganan Terkonfirmasi",
    created_at: "19 Desember 2024 - 14:00 WIB",
    extra: null,
  },
  {
    title: "Order langganan Clinix Anda masih menunggu pembayaran",
    created_at: "19 Desember 2024 - 17:00 WIB",
    extra: "Pilih Paket",
  },
  {
    image: "/assets/images/dummy-ava-2.png",
    title: "Workspace RS Setio Husodo tersedia!",
    content:
      "HR telah mengirim undangan, pilih konfirmasi untuk mulai bekerja!",
    actions: {
      value: true,
      label: "Terima",
    },
  },
  {
    image: "/assets/images/dummy-ava-2.png",
    title: "Workspace RS Setio Husodo tersedia!",
    content: "HR Setio Husodo telah mengirim perjanjian kerjasama",
    actions: {
      value: true,
      label: "Lihat Detail",
    },
  },
];

export function DashboardContent({ t }: DashboardContentProps) {
  const router = useRouter();
  const [isWorkspaceModal, setIsWorkspaceModal] = useState(false);
  const [isDetailWorkspaceModal, setIsDetailWorkspaceModal] = useState(false);
  const onToDetail = () => {
    router.push("/dashboard/subscription");
  };

  const onAcceptWorkspace = (mode: string) => {
    if (mode === "Terima") {
      setIsWorkspaceModal(true);
    } else {
      setIsDetailWorkspaceModal(true);
    }
  };

  return (
    <div
      id="dashboard"
      className={twMerge("mb-24 px-4 lg:px-8", "max-w-full mx-auto")}
    >
      <div className="">
        <Card className="p-4 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] font-bold">Halo, Dr. Tony Molly!</h1>
            <p>
              Selamat datang di Memos, ruang untuk bekerja dengan nyaman dan
              meningkatkan media sosial profesional Anda.
            </p>
          </div>
          <Button
            className="flex-none w-40 md:w-auto mt-2 md:mt-0 h-0"
            isPrimary
            title="Lengkapi Profil"
          />
        </Card>
        <Card className="mt-4 p-0 py-4">
          <div className="flex items-center gap-2  p-4">
            <Image
              src="/assets/icons/history.svg"
              width={24}
              height={24}
              alt="history"
            />
            <span className="font-bold">Aktivitas</span>
          </div>

          <div id="aktivitas-content">
            {activities?.map((activity, index) => (
              <div className="flex flex-col md:flex-row justify-between  py-4 px-8 ">
                <div
                  className={`flex gap-2 ${
                    index % 2 === 0 ? "bg-blue-50" : ""
                  } `}
                >
                  {activity?.image && (
                    <Image
                      src={activity?.image}
                      width={40}
                      height={40}
                      alt="ava"
                      className="rounded-full w-[40px] h-[40px]"
                    />
                  )}
                  <div>
                    <div>
                      <span className="text-[12px] font-bold">
                        {activity?.title}
                      </span>
                    </div>
                    {activity?.created_at && (
                      <div>
                        <span className="text-[12px] text-neutral-300">
                          {activity?.created_at}
                        </span>
                      </div>
                    )}
                    {activity?.content && (
                      <div>
                        <span className="text-[12px] text-neutral-300">
                          {activity?.content}
                        </span>

                        <button
                          onClick={() =>
                            onAcceptWorkspace(activity?.actions?.label)
                          }
                          className="block md:hidden mt-4 bg-white border-primary-500 text-primary-500 rounded-lg px-2 py-1 border-2  "
                        >
                          {activity?.actions?.label}
                        </button>
                      </div>
                    )}
                    <div>
                      <span
                        className="cursor-pointer text-[14px] text-primary-500"
                        onClick={onToDetail}
                      >
                        {activity?.extra}
                      </span>
                    </div>
                  </div>
                </div>
                {activity?.actions && (
                  <button
                    onClick={() => onAcceptWorkspace(activity?.actions?.label)}
                    className="hidden md:block mt-4 bg-white border-primary-500 text-primary-500 rounded-lg px-4 p-2 border-2  "
                  >
                    {activity?.actions?.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {isWorkspaceModal && (
        <Transition appear show={isWorkspaceModal} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsWorkspaceModal(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-[30rem] transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                    <div className="flex flex-col justify-center items-center gap-4">
                      <h2 className="text-[20px] font-bold mt-32">
                        Workspace Baru Berhasil Dibuka
                      </h2>
                      <p>
                        Selamat! Anda telah menjadi bagian dari RS Setio Husodo
                      </p>
                      <Button
                        isPrimary
                        className="w-full"
                        title="Mulai Bekerja"
                      />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}

      {isDetailWorkspaceModal && (
        <Transition appear show={isDetailWorkspaceModal} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsDetailWorkspaceModal(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-[80rem] transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="flex items-center justify-between mb-2"
                    >
                      PKS_John_doe.pdf
                      <CloseIcon
                        className="cursor-pointer"
                        onClick={() => setIsDetailWorkspaceModal(false)}
                      />
                    </Dialog.Title>

                    <div className="max-h-[40rem] overflow-y-auto p-4">
                      <Image
                        src="/assets/images/PKS.png"
                        width={1200}
                        height={640}
                        alt="pks"
                      />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                      <Button
                        icon={<DownloadIcon />}
                        title="Unduh Dokumen"
                        className="w-full md:w-[15%]"
                      />

                      <div className="flex w-full md:w-auto mt-4 md:mt-0 flex-none flex-col-reverse lg:flex-row  justify-between gap-4 ">
                        <Button title="Tolak" className="w-full md:w-64" />
                        <Button
                          isPrimary
                          // onClick={onFinishRegistration}
                          title="Terima"
                          className="w-full md:w-64"
                        />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
}
