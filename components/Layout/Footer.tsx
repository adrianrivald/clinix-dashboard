import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
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
import { useRouter } from "next/router";

export function Footer() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const scrollIntoFaq = () => {
    if (document !== undefined) {
      const element = document.getElementById("faq");
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const onClickToFaq = () => {
    if (router.asPath === "/") {
      scrollIntoFaq();
    } else {
      router.push("/?section=faq");
    }
  };

  useEffect(() => {
    if (router.query?.section === "faq") {
      scrollIntoFaq();
    }
  }, [router]);

  return (
    <footer className="mb-4 border-t mt-24">
      <div
        id="footer"
        className={twMerge(
          "p-8 lg:px-16 lg:pt-24 flex flex-col lg:flex-row justify-between gap-16",
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
          <span className="text-neutral-300">{t("footer.footerHeadline")}</span>
          <div className="font-bold text-neutral-500">
            {t("footer.ourSocmed")}
            <div className="flex items-center gap-4 mt-2">
              {/* <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookRoundedIcon />
              </Link> */}
              <Link
                href="https://www.instagram.com/memos_idn?igsh=bjdrZTZnMG56c2cy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Memos Instagram Acoount"
              >
                <InstagramRoundedIcon />
              </Link>
              <Link
                href="https://id.linkedin.com/company/pt-cipta-integrasi-nusantara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Memos LinkedIn Acoount"
              >
                <LinkedInRoundedIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Perusahaan */}
        <div className="flex flex-col gap-4 flex-none ">
          <div className="font-bold">{t("footer.company")}</div>
          <Link href="/about">{t("footer.about")}</Link>
          {/* <Link href="/career">{t("footer.career")}</Link> */}
        </div>

        {/* Produk */}
        <div className="flex flex-col gap-4 flex-none ">
          <div className="font-bold">{t("footer.product")}</div>
          <Link
            href="https://memos.co.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            Memos
          </Link>
          <Link
            href="https://notes.co.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notes
          </Link>
          <Link
            href="https://clinix.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clinix
          </Link>
        </div>

        {/* Pengetahuan */}
        <div className="flex flex-col gap-4 flex-none ">
          <div className="font-bold">{t("footer.knowledge")}</div>
          <Link href="/article">{t("footer.article")}</Link>
          <div onClick={onClickToFaq} className="cursor-pointer">
            {t("footer.faq")}
          </div>
          {/* <Link href="/">{t("footer.privacy")}</Link>
          <Link href="/">{t("footer.terms")}</Link> */}
        </div>

        {/* Kontak */}
        <div className="flex flex-col gap-4 lg:w-[30%]">
          <div className="font-bold">{t("footer.contact")}</div>
          <div className="flex items-start gap-4">
            <PhoneIcon className="w-4 flex-none mt-1" />
            <span>+62 851-7315-0717</span>
          </div>
          <div className="flex items-start gap-4">
            <PinMapIcon className="w-4 flex-none mt-1" />
            <span>
              Jl. Seturan Raya, Kledokan, Caturtunggal, Kec. Depok, Kabupaten
              Sleman, Daerah Istimewa Yogyakarta
            </span>
          </div>
          <div className="flex items-start gap-4">
            <MailIcon className="w-4 flex-none mt-1" />
            <span>info@notes.co.id</span>
          </div>
        </div>
      </div>
      <div
        id="copyright"
        className={twMerge(
          "flex justify-center w-full p-8 ",
          maxWidthContainer
        )}
      >
        <span className="text-neutral-400">{t("footer.copyright")}</span>
      </div>
    </footer>
  );
}
