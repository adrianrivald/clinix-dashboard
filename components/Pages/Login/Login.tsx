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

interface LoginContentProps {
  t: TFunction<"common", undefined>;
}

export function LoginContent({ t }: LoginContentProps) {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isShowOTPModal, setIsShowOTPModal] = React.useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);

  const { register, handleSubmit, watch } = useForm<any>();
  const form = useRef() as any;

  React.useEffect(() => {
    setIsSubmitted(false);
  }, []);

  const formValues = {
    email: watch("email"),
  };

  const onSubmit: SubmitHandler<any> = async () => {
    // TODO: login function
  };

  const onClickHome = () => {
    router.push("/");
  };

  const censoredEmail = watch("email");

  return (
    <div
      id="signup"
      className={twMerge("mb-24 p-4 lg:p-16", "max-w-[60rem] mx-auto")}
    >
      <div className="lg:mx-36">
        <div>
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <Card>
              <h2 className="font-bold text-[30px]">Login</h2>
              <h3 className="mt-2">Masukkan data Anda untuk login</h3>
              <div className="flex flex-col gap-8 mt-6">
                <div className="flex flex-col gap-4">
                  {/* Row 1 */}
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="w-full flex flex-col gap-2">
                      <label className="text-[14px] font-medium" htmlFor="name">
                        Email
                      </label>
                      <input
                        id="email"
                        {...register("email", { required: true })}
                        type="email"
                        className="rounded-md p-4 border border-neutral-100 focus:outline-none"
                        placeholder="Masukkan Email Anda"
                      />
                    </div>
                  </div>
                  {/* Row 1 */}
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="w-full flex flex-col gap-2">
                      <label className="text-[14px] font-medium" htmlFor="name">
                        Kata Sandi
                      </label>
                      <div className="relative rounded-[8px] p-4 border border-neutral-100 flex items-center justify-between gap-2">
                        <input
                          id="password"
                          {...register("password", { required: true })}
                          type={isHidePassword ? "password" : "text"}
                          className="focus:outline-none w-full"
                          placeholder="Masukkan Kata Sandi"
                        />

                        <Image
                          onClick={() => setIsHidePassword(!isHidePassword)}
                          src="/assets/icons/eye.svg"
                          alt="showhidepassword"
                          width={16}
                          height={16}
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p
                onClick={() => setIsShowOTPModal(true)}
                className="mt-2 text-[14px] underline text-link cursor-pointer"
              >
                Lupa kata sandi?
              </p>

              <Button
                isPrimary
                title="Masuk"
                className="w-full mt-4 focus:outline-none"
                type="submit"
              />
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-auto border-t border-neutral-200" />
                <span className="text-neutral-300">Atau</span>
                <div className="flex-auto border-t border-neutral-200" />
              </div>
              <button className="mt-4 rounded-[10px] py-4 w-full border border-neutral-200 flex items-center gap-3 justify-center">
                <Image
                  src="/assets/icons/google.svg"
                  width={20}
                  height={20}
                  alt="google"
                />
                Daftar dengan Google
              </button>
              <div className="mt-4 text-center">
                <span>
                  Belum memiliki akun?{" "}
                  <span className="underline text-[#037EFF]">Daftar</span>
                </span>
              </div>
            </Card>
          </form>
          <div className="mt-8 flex flex-col justify-center items-center gap-3">
            <span>Kami terpercaya, mitra kami</span>
            <div className="flex items-center gap-8">
              <Image
                src="/assets/images/bpjs.png"
                width={40.82}
                height={40}
                alt="bpjs"
              />
              <Image
                src="/assets/images/satu-sehat.png"
                width={32.26}
                height={40}
                alt="satu-sehat"
              />
            </div>
          </div>
        </div>
      </div>
      {isShowOTPModal && (
        <Transition appear show={isShowOTPModal} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsShowOTPModal(false)}
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
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src="/assets/icons/arrow-back.svg"
                          alt="back"
                          width={24}
                          height={24}
                        />
                        Lupa Kata Sandi
                      </div>
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Kami telah mengirim pesan berisi kode verifikasi ke
                        alamat email : {censoredEmail}
                      </p>
                    </div>
                    <PinInput length={6} onComplete={() => {}} />
                    <div className="mt-8">
                      <span className="text-[14px] ">
                        Kirim ulang kode dalam{" "}
                        <span className="text-[#1094DD]">
                          <Countdown initialTime={150} />
                        </span>
                      </span>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
      <ToastContainer />
    </div>
  );
}
