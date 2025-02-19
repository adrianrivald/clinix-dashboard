import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useRef, useState } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Button, Card } from "../../Ui";
import { TFunction } from "i18next";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import Countdown from "../../../helpers/countdown";
import PinInput from "../../Ui/Pin";
import { title } from "process";

interface WorkspaceContentProps {
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
    actions: true,
  },
];

export function WorkspaceContent({ t }: WorkspaceContentProps) {
  const router = useRouter();
  const [isWorkspaceModal, setIsWorkspaceModal] = useState(false);
  const onToDetail = () => {
    router.push("/dashboard/subscription");
  };

  const onAcceptWorkspace = () => {
    setIsWorkspaceModal(true);
  };

  return (
    <div
      id="dashboard"
      className={twMerge("mb-24 p-4 lg:p-8", "max-w-full mx-auto")}
    >
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-0 flex flex-col">
          <Image
            src="/assets/images/ws-1.png"
            width={400}
            height={160}
            alt="ws-1"
            className="rounded-t-lg w-full"
          />
          <div className="p-4 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="py-1 px-2 rounded-full bg-green-100 text-green-500">
                  Dokter
                </div>
                <div className="py-1 px-2 rounded-full bg-yellow-100 text-yellow-500">
                  Owner
                </div>
              </div>
              <div>
                <span className="text-neutral-300">
                  Terakhir aktif 19 jam yang lalu
                </span>
              </div>
            </div>
            <Image
              src="/assets/images/logo-notes.png"
              width={112}
              height={32}
              alt="logo-notes"
            />
          </div>
        </Card>
      </div>

      <ToastContainer />
    </div>
  );
}
