import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { TFunction } from "i18next";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { Button, Card } from "../../../Ui";

interface SummaryContentProps {
  t: TFunction<"common", undefined>;
}

export function SummaryContent({ t }: SummaryContentProps) {
  const router = useRouter();
  const [isChecked, setIsChecked] = React.useState(false);

  const onCheckAgreement = () => {
    setIsChecked((prev) => !prev);
  };

  const onFinishRegistration = () => {
    router.push("/registration/summary/finish");
  };

  return (
    <div
      id="summary"
      className={twMerge("mb-24 p-4 lg:p-16", "max-w-[80rem] mx-auto")}
    >
      <div className="lg:mx-36">
        <div>
          <Card>
            <div className="text-center">
              <h2 className="font-bold text-[18px] lg:text-[30px]">
                Ringkasan Pendaftaran
              </h2>
              <h3 className="mt-2 text-[14px] lg:text-base">
                Pastikan semua data di bawah ini sudah benar sebelum
                melanjutkan:
              </h3>
            </div>
            <div className="mt-8 text-[14px]">
              {/* <table className="w-full">
                <tbody>
                  <tr className="pb-4">
                    <td>
                      <span className="font-bold">Identitas Diri</span>
                    </td>
                  </tr>
                  <tr className="pb-4">
                    <td>NIK</td>
                    <td className="text-right">7990890890</td>
                  </tr>
                </tbody>
              </table> */}
              <div id="identitas-diri" className="mt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Identitas Diri</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>NIK</span>
                  <span>7990890890</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Unggah KTP</span>
                  <span className="underline text-link">KTP.PNG</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Nama Lengkap</span>
                  <span>Dr. John Doe</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Jenis Kelamin</span>
                  <span>Laki-Laki</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Tempat/Tanggal Lahir</span>
                  <span>Yogyakarta, 09 Mei 2000</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>No. HP</span>
                  <span>09799907900</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Alamat</span>
                  <span>RT22/RW10, Sanggrahan, Sentolo, Yogyakarta</span>
                </div>
              </div>
            </div>
            <div className="mt-8 text-[14px]">
              <div id="identitas-profesi" className="mt-8">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Identitas Profesi</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>SMF</span>
                  <span>Umum</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>No. STR Aktif</span>
                  <span>7978979099</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Unggah STR</span>
                  <span className="underline text-link">STR.PNG</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Tanggal Habis Berlaku</span>
                  <span>09-09-28</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Organisasi</span>
                  <span>Dr. John Doe</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Nama Klinik</span>
                  <span>Praktek Dr. John Doe</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Jenis Usaha</span>
                  <span>Pribadi</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Unggah Tempat Usaha</span>
                  <span className="underline text-link">usaha.PNG</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4">
                  <span>Alamat</span>
                  <span>RT22/RW10, Sanggrahan, Sentolo, Yogyakarta</span>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-dashed border-neutral-400 w-full h-1 mt-8"></div>

            <div className="flex items-center gap-2 mt-6 text-[12px] lg:text-[14px]">
              <input
                className="accent-green-500 w-4 h-4"
                id="agreement"
                type="checkbox"
                onChange={onCheckAgreement}
              />

              <label htmlFor="agreement" className="cursor-pointer">
                Dengan melanjutkan, Anda menyetujui Pernyataan Privasi dan
                Ketentuan Layanan Memos. Setelah data Anda diterima, tim kami
                akan meninjaunya, dan Anda akan menerima email verifikasi
                segera.
              </label>
            </div>

            <div className="flex flex-col-reverse lg:flex-row  justify-between gap-4 mt-4">
              <Button
                isClinix
                isPrimary={false}
                title="Edit Data"
                className="w-full"
              />
              <Button
                isDisabled={!isChecked}
                isClinix
                isPrimary
                onClick={onFinishRegistration}
                title="Kirim Permintaan Berlangganan"
                className="w-full"
              />
            </div>
          </Card>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
