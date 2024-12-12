import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

import { useRouter } from "next/router";
import React, { Dispatch } from "react";
import { Button, Dropdown } from "..";
{
  /* <Hamburger toggled={isOpen} toggle={setOpen} /> */
}

interface NavMenuMobileProps {
  isOpen: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  onClickLogo: () => void;
  pathname: string;
}

function NavMenuMobile({
  isOpen,
  setOpen,
  onClickLogo,
  pathname,
}: NavMenuMobileProps) {
  return (
    <div className="fixed w-full top-0 bg-white z-50 xl:hidden">
      <header className="xl:hidden w-full bg-white shadow-md  justify-between border-neutral-300 py-4 flex items-center mx-auto max-w-[100%] px-4">
        {/* Logo */}
        <div id="logo">
          <Image
            src="/assets/logo/logo-memos.png"
            width={216}
            height={56}
            alt="logo-memos"
            onClick={onClickLogo}
            className="cursor-pointer"
          />
        </div>

        <Hamburger toggled={isOpen} toggle={setOpen} />

        {/* Navigation menus */}
        <nav
          id="menus"
          className="hidden xl:flex items-center gap-16 text-base"
        >
          <Link
            href="/"
            className={`hover:text-primary-500 cursor-pointer ${
              pathname === "/" ? "font-bold text-primary-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-primary-500 cursor-pointer ${
              pathname.includes("/about") ? "font-bold text-primary-500" : ""
            }`}
          >
            Perusahaan
          </Link>
          <Link
            href="/product"
            className={`hover:text-primary-500 cursor-pointer ${
              pathname.includes("/product") ? "font-bold text-primary-500" : ""
            }`}
          >
            Produk
          </Link>
          <Link
            href="/career"
            className={`hover:text-primary-500 cursor-pointer ${
              pathname.includes("/career") ? "font-bold text-primary-500" : ""
            }`}
          >
            Karir
          </Link>
          <Link
            href="/article"
            className={`hover:text-primary-500 cursor-pointer ${
              pathname.includes("/article") ? "font-bold text-primary-500" : ""
            }`}
          >
            Artikel
          </Link>
        </nav>

        {/* Right section */}
        <div id="right" className="hidden xl:flex gap-3">
          <Dropdown title="ID" />
          <Button title="Coba Demo Gratis" isPrimary />
        </div>
      </header>
      {
        <div
          className={`transition-all ${
            isOpen ? "h-screen" : "h-0 hidden"
          } bg-white px-4 py-4 mt-2 relative w-full`}
        >
          <nav id="menus" className="flex-col flex gap-8 text-base">
            <Link
              href="/"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname === "/" ? "font-bold text-primary-500" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/about") ? "font-bold text-primary-500" : ""
              }`}
            >
              Perusahaan
            </Link>
            <Link
              href="/product"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/product")
                  ? "font-bold text-primary-500"
                  : ""
              }`}
            >
              Produk
            </Link>
            <Link
              href="/career"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/career") ? "font-bold text-primary-500" : ""
              }`}
            >
              Karir
            </Link>
            <Link
              href="/article"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/article")
                  ? "font-bold text-primary-500"
                  : ""
              }`}
            >
              Artikel
            </Link>
          </nav>

          <div className="absolute -translate-x-1/2 left-1/2 transform w-full bottom-32 flex flex-col items-center gap-4 px-4 justify-center">
            <Button
              title="Coba Demo Gratis"
              isPrimary
              className="w-full xl:w-auto"
            />
            <Button
              title="Konsultasi Kebutuhan Anda"
              isPrimary={false}
              className="w-full xl:w-auto"
            />
          </div>
        </div>
      }
    </div>
  );
}

interface NavMenuDesktopProps {
  pathname: string;
  isHome: boolean;
  onClickLogo: () => void;
}

function NavMenuDesktop({
  pathname,
  isHome,
  onClickLogo,
}: NavMenuDesktopProps) {
  return (
    <>
      {isHome ? (
        <header className="hidden xl:flex w-full backdrop-blur-lg absolute justify-between border-neutral-100 py-4 left-1/2 -translate-x-1/2 transform top-10 items-center mx-auto max-w-[85%] px-16 border border-2 border-white rounded-xl shadow-xl">
          {/* Logo */}
          <div id="logo">
            <Image
              src="/assets/logo/logo-memos.png"
              width={216}
              height={56}
              alt="logo-memos"
              onClick={onClickLogo}
              className="cursor-pointer"
            />
          </div>

          {/* Navigation menus */}
          <nav
            id="menus"
            className="hidden xl:flex items-center gap-16 text-base"
          >
            <Link
              href="/"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname === "/" ? "font-bold text-primary-500" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/about") ? "font-bold text-primary-500" : ""
              }`}
            >
              Perusahaan
            </Link>
            <Link
              href="/product"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/product")
                  ? "font-bold text-primary-500"
                  : ""
              }`}
            >
              Produk
            </Link>
            <Link
              href="/career"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/career") ? "font-bold text-primary-500" : ""
              }`}
            >
              Karir
            </Link>
            <Link
              href="/article"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/article")
                  ? "font-bold text-primary-500"
                  : ""
              }`}
            >
              Artikel
            </Link>
          </nav>

          {/* Right section */}
          <div id="right" className="hidden xl:flex gap-3">
            <Dropdown title="ID" />
            <Button title="Coba Demo Gratis" isPrimary />
          </div>
        </header>
      ) : (
        <header className="hidden xl:flex w-full bg-white shadow-md  justify-between border-neutral-300 py-4 items-center mx-auto max-w-[100%] px-8">
          {/* Logo */}
          <div id="logo">
            <Image
              src="/assets/logo/logo-memos.png"
              width={216}
              height={56}
              alt="logo-memos"
              onClick={onClickLogo}
              className="cursor-pointer"
            />
          </div>

          {/* Navigation menus */}
          <nav
            id="menus"
            className="hidden xl:flex items-center gap-16 text-base"
          >
            <Link
              href="/"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname === "/" ? "font-bold text-primary-500" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/about") ? "font-bold text-primary-500" : ""
              }`}
            >
              Perusahaan
            </Link>
            <Link
              href="/product"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/product")
                  ? "font-bold text-primary-500"
                  : ""
              }`}
            >
              Produk
            </Link>
            <Link
              href="/career"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/career") ? "font-bold text-primary-500" : ""
              }`}
            >
              Karir
            </Link>
            <Link
              href="/article"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/article")
                  ? "font-bold text-primary-500"
                  : ""
              }`}
            >
              Artikel
            </Link>
          </nav>

          {/* Right section */}
          <div id="right" className="hidden xl:flex gap-3">
            <Dropdown title="ID" />
            <Button title="Coba Demo Gratis" isPrimary />
          </div>
        </header>
      )}
    </>
  );
}

export function Header() {
  const router = useRouter();
  const { asPath, pathname } = router;
  const isHome = asPath === "/";
  const [isOpen, setOpen] = React.useState(false);
  const onClickLogo = () => {
    router.push("/");
  };

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <NavMenuDesktop
        pathname={pathname}
        isHome={isHome}
        onClickLogo={onClickLogo}
      />
      <NavMenuMobile
        isOpen={isOpen}
        setOpen={setOpen}
        onClickLogo={onClickLogo}
        pathname={pathname}
      />
    </>
  );
}
