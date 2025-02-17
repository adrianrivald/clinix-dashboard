import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useRef } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Button, Card } from "../../Ui";
import { TFunction } from "i18next";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import Countdown from "../../../helpers/countdown";
import PinInput from "../../Ui/Pin";
import { title } from "process";

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
];

export function DashboardContent({ t }: DashboardContentProps) {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isShowOTPModal, setIsShowOTPModal] = React.useState(false);

  const { register, handleSubmit, watch } = useForm<any>();
  const form = useRef() as any;

  React.useEffect(() => {
    setIsSubmitted(false);
  }, []);

  const formValues = {
    email: watch("email"),
  };

  const onSubmit: SubmitHandler<any> = async () => {
    setIsShowOTPModal(true);
  };

  const onToDetail = () => {
    router.push("/dashboard/subscription");
  };

  const censoredEmail = watch("email");

  return (
    <div
      id="signup"
      className={twMerge("mb-24 p-4 lg:p-8", "max-w-full mx-auto")}
    >
      <div className="">
        <Card className="p-4">
          <h1 className="text-[24px] font-bold">Halo, Dr. Tony Molly!</h1>
          <p className="mt-2">
            Selamat datang di Memos, ruang untuk bekerja dengan nyaman dan
            meningkatkan media sosial profesional Anda.
          </p>
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
              <div
                className={`py-4 px-8 ${index % 2 === 0 ? "bg-blue-50" : ""} `}
              >
                <div>
                  <span className="text-[12px] font-bold">
                    {activity?.title}
                  </span>
                </div>
                <div>
                  <span className="text-[12px] text-neutral-300">
                    {activity?.created_at}
                  </span>
                </div>
                <div>
                  <span
                    className="cursor-pointer text-[14px] text-primary-500"
                    onClick={onToDetail}
                  >
                    {activity?.extra}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <ToastContainer />
    </div>
  );
}
