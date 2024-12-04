import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Dropdown } from "..";

export function Header() {
  const router = useRouter();
  const { asPath, pathname } = router;
  const isHome = asPath === "/";
  console.log(pathname === "/career", "router");
  return (
    <>
      {isHome ? (
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
          <nav
            id="menus"
            className="hidden lg:flex items-center gap-16 text-base"
          >
            <Link
              href="/"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname === "/" ? "font-bold text-primary-500" : ""
              }`}
            >
              Perusahaan
            </Link>
            <Link
              href="/product"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname === "/product" ? "font-bold text-primary-500" : ""
              }`}
            >
              Produk
            </Link>
            <Link
              href="/career"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname === "/career" ? "font-bold text-primary-500" : ""
              }`}
            >
              Karir
            </Link>
            <Link
              href="/article"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname === "/article" ? "font-bold text-primary-500" : ""
              }`}
            >
              Artikel
            </Link>
          </nav>

          {/* Right section */}
          <div id="right" className="hidden lg:flex gap-3">
            <Dropdown title="ID" />
            <Button title="Coba Demo Gratis" isPrimary />
          </div>
        </header>
      ) : (
        <header className="w-full bg-white justify-between border-neutral-100 py-4 flex items-center mx-auto max-w-[85%] px-16 border border-2 border-white">
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
          <nav
            id="menus"
            className="hidden lg:flex items-center gap-16 text-base"
          >
            <Link
              href="/"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname === "/" ? "font-bold text-primary-500" : ""
              }`}
            >
              Perusahaan
            </Link>
            <Link
              href="/product"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname === "/product" ? "font-bold text-primary-500" : ""
              }`}
            >
              Produk
            </Link>
            <Link
              href="/career"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname === "/career" ? "font-bold text-primary-500" : ""
              }`}
            >
              Karir
            </Link>
            <Link
              href="/article"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname === "/article" ? "font-bold text-primary-500" : ""
              }`}
            >
              Artikel
            </Link>
          </nav>

          {/* Right section */}
          <div id="right" className="hidden lg:flex gap-3">
            <Dropdown title="ID" />
            <Button title="Coba Demo Gratis" isPrimary />
          </div>
        </header>
      )}
    </>
  );
}
