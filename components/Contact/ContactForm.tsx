import React from "react";
import { Button } from "../Ui";

export function ContactForm() {
  return (
    <form
      onSubmit={() => {} /* TODO: Handle Submit Contact */}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2">
        <label className="text-[14px]" htmlFor="name">
          Nama
        </label>
        <input
          id="name"
          name="name"
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
          name="email"
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
          name="message"
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
    </form>
  );
}
