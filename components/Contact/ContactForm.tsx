import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Ui";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { TFunction } from "i18next";
import { Fade } from "react-awesome-reveal";

interface ContactForm {
  t: TFunction<"common", undefined>;
}

export function ContactForm({ t }: ContactForm) {
  const form = React.useRef() as any;
  const { register, handleSubmit, watch, reset } = useForm<any>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const formValues = {
    name: watch("name"),
    email: watch("email"),
    message: watch("message"),
  };

  const onSubmit: SubmitHandler<any> = async () => {
    await emailjs
      .send("service_zf9cvp6", "template_jfeaiof", formValues, {
        publicKey: "7jPcAfzPeqFQ_mf4c",
      })
      .then(
        () => {
          setIsSubmitted(true);
          toast.success("Berhasil mengirim kontak, tunggu kabar selanjutnya", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          reset();
        },
        (error) => {
          const errorMessage = error?.text ?? t("home.errorSubmitForm");
          toast.success(errorMessage, {
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
  return (
    <Fade triggerOnce direction="right">
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2">
          <label className="text-[14px]" htmlFor="name">
            {t("home.contactFieldName")}
          </label>
          <input
            id="name"
            {...register("name", { required: true })}
            type="text"
            className="rounded-md p-4 border border-neutral-100 focus:outline-none"
            placeholder={t("home.contactFieldNamePh")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[14px]" htmlFor="email">
            {t("home.contactFieldEmail")}
          </label>
          <input
            id="email"
            {...register("email", { required: true })}
            type="email"
            className="rounded-md p-4 border border-neutral-100 focus:outline-none"
            placeholder={t("home.contactFieldEmailPh")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[14px]" htmlFor="message">
            {t("home.contactFieldQuestion")}
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            className="rounded-md p-4 border border-neutral-100 focus:outline-none"
            placeholder={t("home.contactFieldQuestionPh")}
            rows={4}
          />
        </div>
        <Button
          isPrimary
          title={t("home.contactSubmit")}
          className="lg:w-[250px]"
        />
        <ToastContainer />
      </form>
    </Fade>
  );
}
