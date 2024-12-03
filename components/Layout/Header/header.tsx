import Image from "next/image";
import React from "react";
import { Button, Dropdown } from "../..";

export function Header() {
  return (
    <header className="w-full backdrop-blur-lg absolute justify-between border-neutral-100 py-4 left-1/2 -translate-x-1/2 transform top-10 flex items-center mx-auto max-w-[85%] px-16 border border-2 border-white rounded-xl shadow-xl">
      {/* Logo */}
      <div id="logo">
        <Image
          src="/assets/logo/logo-memos.png"
          width={216}
          height={56}
          alt="logo-memos"
        />
      </div>

      {/* Navigation menus */}
      <nav id="menus" className="flex items-center gap-16 text-base">
        <div className="hover:text-primary-500 cursor-pointer font-bold text-primary-500">
          Perusahaan
        </div>
        <div className="hover:text-primary-500 cursor-pointer">Produk</div>
        <div className="hover:text-primary-500 cursor-pointer">Karir</div>
        <div className="hover:text-primary-500 cursor-pointer">Artikel</div>
      </nav>

      {/* Right section */}
      <div id="right" className="flex gap-3">
        <Dropdown title="ID" />
        <Button title="Coba Demo Gratis" isPrimary />
      </div>
    </header>
  );
}
