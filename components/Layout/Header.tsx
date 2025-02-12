import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import { Button, Dropdown, SearchBox } from "..";
import { ChevronRightIcon } from "../Icons";
import { useSearchDebounce } from "../../hooks";
import type { Language } from "../Ui/Dropdown";
import { TFunction } from "i18next";
import { articles } from "../../constants/article";

const languageList = [
  {
    id: "en",
    label: "English",
  },
  {
    id: "id",
    label: "Indonesia",
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
  setIsChangeLanguageMode: Dispatch<SetStateAction<boolean>>;
  t: TFunction<"common", undefined>;
  onChangeLanguage: (lang: string) => void;
  locale: string | undefined;
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
  setIsChangeLanguageMode,
  t,
  onChangeLanguage,
  locale,
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
            src="/assets/logo/logo-clinix.png"
            width={122}
            height={48}
            alt="logo-clinix"
            onClick={onClickLogo}
            className="cursor-pointer"
          />
          <Image
            src="/assets/logo/logo-memos.png"
            width={112}
            height={32}
            alt="logo-memos"
            onClick={onClickLogo}
            className="cursor-pointer"
          />
        </div>

        <Hamburger
          toggled={isOpen}
          onToggle={() => {
            setOpen(!isOpen);
            setIsChangeLanguageMode(false);
          }}
        />
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
              {t("navbar.home")}
            </Link>
            <Link
              href="/about"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/about") ? "font-bold text-primary-500" : ""
              }`}
            >
              {t("navbar.company")}
            </Link>
            <Link
              href="/product"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/product")
                  ? "font-bold text-primary-500"
                  : ""
              }`}
            >
              {t("navbar.product")}
            </Link>
            {/* <Link
              href="/career"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/career") ? "font-bold text-primary-500" : ""
              }`}
            >
              {t("navbar.career")}
            </Link> */}
            <Link
              href="/article"
              className={`hover:text-primary-500 cursor-pointer ${
                pathname.includes("/article")
                  ? "font-bold text-primary-500"
                  : ""
              }`}
            >
              {t("navbar.article")}
            </Link>

            <div
              onClick={onClickLanguage}
              className="hover:text-primary-500 cursor-pointer flex justify-between items-center"
            >
              {locale === "id" ? "Bahasa Indonesia" : "English"}
              <ChevronRightIcon className="w-3 h-3" />
            </div>
          </nav>

          <div className="absolute -translate-x-1/2 left-1/2 transform w-full bottom-32 flex flex-col items-center gap-4 px-4 justify-center">
            <Button
              title={t("navbar.tryDemo")}
              isPrimary
              className="w-full lg:w-auto"
              onClick={onClickToDemo}
            />
            <Button
              title={t("navbar.consultYourNeeds")}
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
          <ul className="h-[75%] overflow-x-auto mt-4 flex flex-col gap-2">
            {languageList
              ?.filter((item) => item?.label.toLowerCase().includes(searchTerm))
              .map((language) => (
                <li
                  onClick={() => onChangeLanguage(language?.id)}
                  className={`w-full py-3 ${
                    locale === language?.id ? "bg-primary-100 rounded-full" : ""
                  }`}
                  key={language?.id}
                >
                  <div className="mx-3 rounded-lg">{language?.label}</div>
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
  onChangeLanguage: (lang: string) => void;
  locale: string | undefined;
  languages: Language[];
  t: TFunction<"common", undefined>;
}

function NavMenuDesktop({
  pathname,
  isHome,
  onClickLogo,
  visible,
  onClickToDemo,
  onChangeLanguage,
  locale,
  languages,
  t,
}: NavMenuDesktopProps) {
  return (
    <div
      className={`transition-all sticky z-50 ${
        visible ? "top-0" : "-top-[6rem]"
      }`}
    >
      <header className="hidden lg:flex w-full bg-white shadow-md  justify-between border-neutral-300 py-4 items-center mx-auto max-w-[100%] px-8">
        {/* Logo */}
        <div id="logo" className="flex items-center gap-4">
          <Image
            src="/assets/logo/logo-clinix.png"
            width={122}
            height={48}
            alt="logo-clinix"
            onClick={onClickLogo}
            className="cursor-pointer"
          />
          <Image
            src="/assets/logo/logo-memos.png"
            width={112}
            height={32}
            alt="logo-memos"
            onClick={onClickLogo}
            className="cursor-pointer"
          />
        </div>

        {/* Right section */}
        <div id="right" className="hidden lg:flex gap-3 items-center">
          <span>Sudah memiliki akun?</span>
          <Button isClinix title="Masuk" onClick={onClickToDemo} />
        </div>
      </header>
    </div>
  );
}

export function Header() {
  const router = useRouter();
  const { asPath, pathname, locale } = router;
  const isHome = pathname === "/";
  const [language, setLanguage] = React.useState(locale);
  const [isOpen, setOpen] = React.useState(false);
  const [isChangeLanguageMode, setIsChangeLanguageMode] = React.useState(false);
  const [searchTerm, setSearchTerm] = useSearchDebounce();

  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const { t } = useTranslation("common");
  const languages = [
    {
      id: "id",
      label: "ID",
    },
    {
      id: "en",
      label: "ENG",
    },
  ];

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
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };
  const onSubmitLanguage = () => {
    const url = window.location.href;
    const origin = window.location.origin;
    let sliced = url.split(origin)[1];

    if (language !== "en") {
      sliced = sliced.replace("/en", "");
    } else {
      sliced = "/en" + sliced;
    }

    window.location.href = origin + sliced;
  };

  const onChangeLanguage = (lang: string) => {
    // if (pathname === "/article/[slug]") {
    //   const url = window.location.href;
    //   const origin = window.location.origin;
    //   let sliced = url.split(origin)[1];

    //   let slug = url.split("article/")[1];
    //   const enSlug = articles?.find((item) => item?.language?.id?.slug === slug)
    //     ?.language?.en?.slug;
    //   const idSlug = articles?.find((item) => item?.language?.en?.slug === slug)
    //     ?.language?.id?.slug;
    //   console.log(slug, "slug");
    //   console.log(idSlug, "idSlug");
    //   if (locale !== "id") {
    //     sliced = sliced.replace(`/${locale}`, "");
    //     slug = idSlug ?? "";
    //     console.log(slug, "slugindo");
    //     window.location.href = origin + "/article/" + slug;
    //   } else {
    //     sliced = `/${lang}` + sliced;
    //     slug = enSlug ?? "";
    //     window.location.href = origin + "/en/article/" + slug;
    //   }
    // } else {
    const url = window.location.href;
    const origin = window.location.origin;
    let sliced = url.split(origin)[1];
    const enSlug = articles?.find(
      (item) => item?.language?.id?.slug === sliced?.split("article/")[1]
    )?.language?.en?.slug;
    const idSlug = articles?.find(
      (item) => item?.language?.en?.slug === sliced?.split("article/")[1]
    )?.language?.id?.slug;

    if (locale !== "id") {
      sliced = sliced.replace(`/${locale}`, "");
    } else {
      sliced = `/${lang}` + sliced;
    }
    if (pathname === "/article/[slug]") {
      window.location.href =
        origin +
        sliced?.replace(
          `${sliced?.split("article/")[1]}`,
          `${locale === "id" ? enSlug : idSlug}`
        );
    } else {
      window.location.href = origin + sliced;
    }
    // }

    // let slug = url.split("article/")[1];
    // const enSlug = articles?.find((item) => item?.language?.id?.slug === slug)
    //   ?.language?.en?.slug;
    // const idSlug = articles?.find((item) => item?.language?.en?.slug === slug)
    //   ?.language?.id?.slug;
    // console.log(slug, "slug");
    // console.log(idSlug, "idSlug");
    // if (pathname === "/article/[slug]") {
    //   if (locale !== "id") {
    //     sliced = sliced.replace(`/${locale}`, "");
    //     slug = idSlug ?? "";
    //     console.log(slug, "slugindo");
    //     window.location.href = origin + "/article/" + slug;
    //   } else {
    //     sliced = `/${lang}` + sliced;
    //     slug = enSlug ?? "";
    //     window.location.href = origin + "/en/article/" + slug;
    //   }
    // } else {
    // }
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
        onChangeLanguage={onChangeLanguage}
        languages={languages}
        locale={locale}
        t={t}
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
        setIsChangeLanguageMode={setIsChangeLanguageMode}
        t={t}
        onChangeLanguage={onChangeLanguage}
        locale={locale}
      />
    </>
  );
}
