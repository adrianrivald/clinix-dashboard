import { Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { useSearchDebounce } from "../../../hooks";
import { ArrowDownIcon, ArrowRightBlueIcon, SuccessDemo } from "../../Icons";
import { SearchBox } from "../../SearchBox/SearchBox";
import { Button } from "../../Ui";
import { TFunction } from "i18next";
import { ToastContainer, toast } from "react-toastify";

interface SelectProps {
  label: string;
  id: string;
}

const companies: SelectProps[] = [
  {
    id: "verySmall",
    label: "< 5",
  },
  {
    id: "small",
    label: "5 - 20",
  },
  {
    id: "medium",
    label: "20 - 50",
  },
  {
    id: "big",
    label: "50 - 250",
  },
  {
    id: "veryBig",
    label: ">250",
  },
];

const interests: SelectProps[] = [
  {
    id: "1",
    label: "interestOpt1",
  },
  {
    id: "2",
    label: "interestOpt2",
  },
  {
    id: "3",
    label: "interestOpt3",
  },
];

const languages: SelectProps[] = [
  {
    id: "sa",
    label: "Arabian",
  },
  {
    id: "al",
    label: "Albanian",
  },
  {
    id: "az",
    label: "Azerbaijani",
  },
  {
    id: "ba",
    label: "Baluchi",
  },
  {
    id: "ph",
    label: "Filipino",
  },
  {
    id: "fr",
    label: "French",
  },
  {
    id: "gr",
    label: "German",
  },
  {
    id: "gk",
    label: "Greek",
  },
  {
    id: "id",
    label: "Indonesia",
  },
  {
    id: "li",
    label: "Lithuanian",
  },
  {
    id: "my",
    label: "Malay",
  },
  {
    id: "se",
    label: "Serbian",
  },
  {
    id: "sp",
    label: "Spanish",
  },
  {
    id: "sh",
    label: "Swahili",
  },
];
interface DemoContentProps {
  t: TFunction<"common", undefined>;
}

export function SignupContent({ t }: DemoContentProps) {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState<SelectProps>();
  const [selectedLanguage, setSelectedLanguage] = React.useState<SelectProps>();
  const [selectedCompany, setSelectedCompany] = React.useState<SelectProps>();
  const [selectedInterest, setSelectedInterest] = React.useState<SelectProps>();
  const [searchTerm, setSearchTerm] = useSearchDebounce();
  const { register, handleSubmit, watch } = useForm<any>();
  const form = useRef() as any;

  React.useEffect(() => {
    setIsSubmitted(false);
  }, []);

  const onSearchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const formValues = {
    name: watch("name"),
    email: watch("email"),
    company_name: watch("company_name"),
    phone: watch("phone"),
    country: selectedCountry?.label,
    language: selectedLanguage?.label,
    company_size: `${selectedCompany?.label} ${t("demo.employee")}`,
    interest: t(`demo.${selectedInterest?.label}`),
    product: "Memos",
  };

  const onSubmit: SubmitHandler<any> = async () => {
    await emailjs
      .send("service_zf9cvp6", "template_y2v0ioo", formValues, {
        publicKey: "7jPcAfzPeqFQ_mf4c",
      })
      .then(
        () => {
          setIsSubmitted(true);
        },
        (error) => {
          const errorMessage = error?.text ?? t("home.errorSubmitForm");
          toast.error(errorMessage, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  const onClickHome = () => {
    router.push("/");
  };

  return (
    <div
      id="product-list"
      className={twMerge("mb-24 p-4 lg:p-16", "max-w-[60rem] mx-auto")}
    >
      <div className="lg:mx-36">
        {!isSubmitted ? (
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow-md w-full p-8 rounded-lg border border-neutral-250">
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
                        {...register("email", { required: true })}
                        type="email"
                        className="rounded-md p-4 border border-neutral-100 focus:outline-none"
                        placeholder="Masukkan Email Anda"
                      />
                    </div>
                  </div>
                </div>

                <p className="text-[14px]">
                  Dengan klik daftar, Anda menyetujui Pernyataan Privasi dan
                  Ketentuan Layanan Memos.
                </p>
              </div>

              <Button
                isPrimary
                isClinix
                title="Daftar"
                className="w-full mt-4"
                type="submit"
              />
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <SuccessDemo />
            <div className="text-center">
              <h3 className="font-bold">{t("demo.successDemoHeading")}</h3>
              <h4 className="mt-1">{t("demo.successDemoSubHeading")}</h4>
            </div>
            <Button
              isPrimary
              title={t("demo.backToHome")}
              onClick={onClickHome}
              className="mt-4"
            />
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
