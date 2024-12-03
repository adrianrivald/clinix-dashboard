import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import {
  FacebookRounded,
  InstagramRounded,
  LinkedInRounded,
  MailIcon,
  PhoneIcon,
  PinMapIcon,
  TwitterRounded,
} from "../../Icons";

export function Footer() {
  return (
    <footer
      id="footer"
      className={twMerge(
        " p-16 mt-32 flex justify-between gap-16",
        maxWidthContainer
      )}
    >
      {/* Logo */}
      <div className="flex flex-col gap-4 w-[20%]">
        <Image
          src="/assets/logo/logo-memos.png"
          width={108}
          height={28}
          alt="logo-memos-footer"
        />
        <span className="text-neutral-300">
          Keunggulan Medis Dimulai dari Sistem yang Memahami Anda
        </span>
        <div className="font-bold text-neutral-500">
          Sosial Media Kami
          <div className="flex items-center gap-4 mt-2">
            <FacebookRounded />
            <InstagramRounded />
            <LinkedInRounded />
            <TwitterRounded />
          </div>
        </div>
      </div>

      {/* Perusahaan */}
      <div className="flex flex-col gap-4 flex-none ">
        <div className="font-bold">Perusahaan</div>
        <div>Tentang Kami</div>
        <div>Value Kami</div>
        <div>Karir</div>
      </div>

      {/* Produk */}
      <div className="flex flex-col gap-4 flex-none ">
        <div className="font-bold">Produk</div>
        <div>Notes</div>
        <div>Memos</div>
        <div>Bitme</div>
        <div>Timeflow</div>
      </div>

      {/* Pengetahuan */}
      <div className="flex flex-col gap-4 flex-none ">
        <div className="font-bold">Pengetahuan</div>
        <div>Artikel</div>
        <div>Pertanyaan Populer</div>
        <div>Pernyataan Privasi</div>
        <div>Ketentuan Layanan</div>
      </div>

      {/* Kontak */}
      <div className="flex flex-col gap-4 w-[30%]">
        <div className="font-bold">Kontak</div>
        <div className="flex items-center gap-4">
          <PhoneIcon />
          <span>+62 851-7315-0717</span>
        </div>
        <div className="flex items-center gap-4">
          <PinMapIcon />
          <span>
            Jl. Seturan Raya, Kledokan, Caturtunggal, Kec. Depok, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta
          </span>
        </div>
        <div className="flex items-center gap-4">
          <MailIcon />
          <span>info@notes.co.id</span>
        </div>
      </div>
    </footer>
  );
}
