import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import {
  FacebookRoundedIcon,
  InstagramRoundedIcon,
  LinkedInRoundedIcon,
  MailIcon,
  PhoneIcon,
  PinMapIcon,
  TwitterRoundedIcon,
} from "../Icons";

export function Footer() {
  return (
    <footer className="mt-32 mb-4">
      <div
        id="footer"
        className={twMerge(
          "p-8 lg:p-16 flex flex-col lg:flex-row justify-between gap-16",
          maxWidthContainer
        )}
      >
        {/* Logo */}
        <div className="flex flex-col gap-4 lg:w-[20%]">
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
              <FacebookRoundedIcon />
              <InstagramRoundedIcon />
              <LinkedInRoundedIcon />
              <TwitterRoundedIcon />
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
        <div className="flex flex-col gap-4 lg:w-[30%]">
          <div className="font-bold">Kontak</div>
          <div className="flex items-center gap-4">
            <PhoneIcon className="w-4 flex-none" />
            <span>+62 851-7315-0717</span>
          </div>
          <div className="flex items-center gap-4">
            <PinMapIcon className="w-4 flex-none" />
            <span>
              Jl. Seturan Raya, Kledokan, Caturtunggal, Kec. Depok, Kabupaten
              Sleman, Daerah Istimewa Yogyakarta
            </span>
          </div>
          <div className="flex items-center gap-4">
            <MailIcon className="w-4 flex-none" />
            <span>info@notes.co.id</span>
          </div>
        </div>
      </div>
      <div id="copyright" className="flex justify-center w-full">
        <span className="text-neutral-400">
          © 2024 PT. Cipta Integrasi Nusantara | Terdaftar di Direktorat
          Jenderal Kekayaan Intelektual Republik Indonesia.
        </span>
      </div>
    </footer>
  );
}
