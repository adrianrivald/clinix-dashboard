import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Ui";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export function ContactForm() {
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
      .send("service_le33abk", "template_8o4x7ms", formValues, {
        publicKey: "-bHdy_Fu3An8fq6Av",
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
          console.log(error);
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2">
        <label className="text-[14px]" htmlFor="name">
          Nama
        </label>
        <input
          id="name"
          {...register("name", { required: true })}
          type="text"
          className="rounded-md p-4 border border-neutral-100 focus:outline-none"
          placeholder="Ketik Nama Anda"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[14px]" htmlFor="email">
          Alamat Email
        </label>
        <input
          id="email"
          {...register("email", { required: true })}
          type="email"
          className="rounded-md p-4 border border-neutral-100 focus:outline-none"
          placeholder="nama@email.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[14px]" htmlFor="message">
          Pertanyaan Anda
        </label>
        <textarea
          id="message"
          {...register("message", { required: true })}
          className="rounded-md p-4 border border-neutral-100 focus:outline-none"
          placeholder="Bagaimana cara saya bisa mendapat produk Memos?"
          rows={4}
        />
      </div>
      <Button
        isPrimary
        title="Kirim Pertanyaan Anda"
        className="lg:w-[250px]"
      />
      <ToastContainer />
    </form>
  );
}
