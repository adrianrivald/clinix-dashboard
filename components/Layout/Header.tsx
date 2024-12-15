import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

import { useRouter } from "next/router";
import React, { Dispatch } from "react";
import { Button, Dropdown, SearchBox } from "..";
import { ChevronRightIcon } from "../Icons";
import { useSearchDebounce } from "../../hooks";

const languageList = [
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

interface NavMenuMobileProps {
  isOpen: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  onClickLogo: () => void;
  onClickLanguage: () => void;
  pathname: string;
  isChangeLanguageMode: boolean;
  onSearchLanguage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
  onClickToDemo: () => void;
  visible: boolean;
}

function NavMenuMobile({
  isOpen,
  setOpen,
  onClickLogo,
  pathname,
  onClickLanguage,
  isChangeLanguageMode,
  onSearchLanguage,
  searchTerm,
  onClickToDemo,
  visible,
}: NavMenuMobileProps) {
  return (
    <div
      className={`transition-all sticky ${
        isOpen ? "top-0" : visible ? "top-0" : "-top-[6rem]"
      } w-full bg-white z-50 lg:hidden`}
    >
      <header className="lg:hidden w-full bg-white shadow-md  justify-between border-neutral-300 py-4 flex items-center mx-auto max-w-[100%] px-4">
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
      </header>
      {!isChangeLanguageMode ? (
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

            <div
              onClick={onClickLanguage}
              className="hover:text-primary-500 cursor-pointer flex justify-between items-center"
            >
              Bahasa Indonesia
              <ChevronRightIcon className="w-3 h-3" />
            </div>
          </nav>

          <div className="absolute -translate-x-1/2 left-1/2 transform w-full bottom-32 flex flex-col items-center gap-4 px-4 justify-center">
            <Button
              title="Coba Demo Gratis"
              isPrimary
              className="w-full lg:w-auto"
              onClick={onClickToDemo}
            />
            <Button
              title="Konsultasi Kebutuhan Anda"
              isPrimary={false}
              className="w-full lg:w-auto"
            />
          </div>
        </div>
      ) : (
        <div
          className={`transition-all ${
            isOpen ? "h-screen" : "h-0 hidden"
          } bg-white px-4 py-4 mt-2 relative w-full`}
        >
          <SearchBox onSearch={onSearchLanguage} />
          <ul className="h-[75%] overflow-x-auto mt-4">
            {languageList
              ?.filter((item) => item?.label.toLowerCase().includes(searchTerm))
              .map((language) => (
                <li className="py-3 w-full" key={language?.id}>
                  {language?.label}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

interface NavMenuDesktopProps {
  pathname: string;
  isHome: boolean;
  onClickLogo: () => void;
  visible: boolean;
  onClickToDemo: () => void;
}

function NavMenuDesktop({
  pathname,
  isHome,
  onClickLogo,
  visible,
  onClickToDemo,
}: NavMenuDesktopProps) {
  return (
    <div
      className={`transition-all sticky z-50 ${
        visible
          ? `${isHome ? "top-[3.75rem]" : "top-0"}`
          : `${isHome ? "-top-[10rem]" : "-top-[6rem]"}`
      }`}
    >
      {isHome ? (
        <header className="hidden lg:flex gap-4 w-full backdrop-blur-lg absolute justify-between border-neutral-100 py-4 left-1/2 -translate-x-1/2 transform -top-[3.5rem] items-center mx-auto max-w-[85%] px-6 border border-2 border-white rounded-xl shadow-xl">
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
            className="hidden lg:flex items-center gap-16 text-base"
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
          <div id="right" className="hidden lg:flex gap-3">
            <Dropdown title="ID" />
            <Button
              title="Coba Demo Gratis"
              isPrimary
              onClick={onClickToDemo}
            />
          </div>
        </header>
      ) : (
        <header className="hidden lg:flex w-full bg-white shadow-md  justify-between border-neutral-300 py-4 items-center mx-auto max-w-[100%] px-8">
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
            className="hidden lg:flex items-center gap-16 text-base"
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
          <div id="right" className="hidden lg:flex gap-3">
            <Dropdown title="ID" />
            <Button
              title="Coba Demo Gratis"
              isPrimary
              onClick={onClickToDemo}
            />
          </div>
        </header>
      )}
    </div>
  );
}

export function Header() {
  const router = useRouter();
  const { asPath, pathname } = router;
  const isHome = asPath === "/";
  const [isOpen, setOpen] = React.useState(false);
  const [isChangeLanguageMode, setIsChangeLanguageMode] = React.useState(false);
  const [searchTerm, setSearchTerm] = useSearchDebounce();

  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const onClickLogo = () => {
    router.push("/");
  };

  const onClickToDemo = () => {
    router.push("/demo");
  };

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onClickLanguage = () => {
    setIsChangeLanguageMode(true);
  };

  const onSearchLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    console.log(currentScrollPos, "currentScrollPos");
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <NavMenuDesktop
        pathname={pathname}
        isHome={isHome}
        onClickLogo={onClickLogo}
        visible={visible}
        onClickToDemo={onClickToDemo}
      />
      <NavMenuMobile
        visible={visible}
        isOpen={isOpen}
        setOpen={setOpen}
        onClickLogo={onClickLogo}
        pathname={pathname}
        onClickLanguage={onClickLanguage}
        isChangeLanguageMode={isChangeLanguageMode}
        onSearchLanguage={onSearchLanguage}
        searchTerm={searchTerm as string}
        onClickToDemo={onClickToDemo}
      />
    </>
  );
}
