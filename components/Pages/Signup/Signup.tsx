import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useRef } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Button, Card } from "../../Ui";
import { TFunction } from "i18next";
import Image from "next/image";
import Countdown from "../../../helpers/countdown";
import PinInput from "../../Ui/Pin";
import {
  useRegisterEmail,
  useRequestAuthCode,
  useVerifyAuthCode,
} from "../../../services/auth/use-registration";
import toast from "react-hot-toast";

interface SignupContentProps {
  t: TFunction<"common", undefined>;
}

export function SignupContent({ t }: SignupContentProps) {
  const router = useRouter();
  const { mutate: registerEmail } = useRegisterEmail();
  const { mutate: requestAuthCode } = useRequestAuthCode();
  const { mutate: verifyAuthCode, isError } = useVerifyAuthCode();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isShowOTPModal, setIsShowOTPModal] = React.useState(false);
  const [isRequested, setIsRequested] = React.useState(false);

  const { register, handleSubmit, watch, formState } = useForm<any>();
  const form = useRef() as any;

  React.useEffect(() => {
    setIsSubmitted(false);
  }, []);

  const formValues = {
    email: watch("email"),
  };

  const onSubmit: SubmitHandler<any> = async (formData: any) => {
    console.log(formData, "formdata");
    registerEmail(
      {
        email: formData?.email,
      },
      {
        onSuccess: () => {
          setIsShowOTPModal(true);
          setIsRequested(true);
          requestAuthCode({
            contact_type: "email",
            contact_value: formData?.email,
            token_type: "mfa_otp",
          });
        },
        onError: (error: any) => {
          const reason = error?.message
            ? error?.message?.split("~")[0]
            : "Terjadi error, silakan coba lagi";
          toast.error(reason);
        },
      }
    );
  };

  const onClickRequestAuthCode = () => {
    requestAuthCode(
      {
        contact_type: "email",
        contact_value: watch("email"),
        token_type: "mfa_otp",
      },
      {
        onSuccess: () => {
          setIsRequested(true);
        },
        onError: (error: any) => {
          const reason = error?.message
            ? error?.message?.split("~")[0]
            : "Terjadi error, silakan coba lagi";
          toast.error(reason);
        },
      }
    );
  };

  const onVerifyAuthCode = (pin: string) => {
    verifyAuthCode(
      {
        contact_type: "email",
        contact_value: watch("email"),
        token_type: "mfa_otp",
        token: pin,
      },
      {
        onSuccess: () => {
          setTimeout(() => {
            router.push("/registration/step/1");
          }, 1000);
        },
        onError: (error: any) => {
          const reason = error?.message
            ? error?.message?.split("~")[0]
            : "Terjadi error, silakan coba lagi";
          toast.error(reason);
        },
      }
    );
  };

  const onClickHome = () => {
    router.push("/");
  };

  const censoredEmail = watch("email");

  console.log(formState?.errors, "formStateformState");

  return (
    <div
      id="signup"
      className={twMerge("mb-24 p-4 lg:p-16", "max-w-[60rem] mx-auto")}
    >
      <div className="lg:mx-36">
        <div>
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <Card>
              <h2 className="font-bold text-[30px]">Daftar</h2>
              <h3 className="mt-2">
                Masukkan email dan kata sandi untuk melanjutkan akses ke akun
                Anda
              </h3>
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
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email harus diisi",
                          },
                        })}
                        type="email"
                        className={`rounded-md p-4 border border-neutral-100 focus:outline-none ${
                          formState?.errors?.email && "border-primary-500"
                        }`}
                        placeholder="Masukkan Email Anda"
                      />
                      {formState?.errors?.email && (
                        <span className="text-primary-500">
                          {formState?.errors?.email?.message as any}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-[14px]">
                  Dengan klik daftar, Anda menyetujui{" "}
                  <Link href="/terms-condition" className="underline">
                    Pernyataan Privasi
                  </Link>{" "}
                  dan Ketentuan Layanan Memos.
                </p>
              </div>

              <Button
                isPrimary
                isClinix
                title="Daftar"
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
              <div
                onClick={() => router.push("/login")}
                className="mt-4 text-center cursor-pointer"
              >
                <span>
                  Sudah memiliki akun?{" "}
                  <span className="underline text-[#037EFF]">Masuk</span>
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
                        Verifikasi email kamu
                      </div>
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Kami telah mengirim pesan berisi kode verifikasi ke
                        alamat email : {censoredEmail}
                      </p>
                    </div>
                    <PinInput
                      isClinix
                      length={6}
                      onComplete={onVerifyAuthCode}
                    />
                    <div className="mt-8">
                      <Countdown
                        initialTime={150}
                        onClickRequestAuthCode={onClickRequestAuthCode}
                        isRequested={isRequested}
                        setIsRequested={setIsRequested}
                      />
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
