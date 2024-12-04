import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { FaqIcon } from "../Icons";

const faqData = [
  {
    question: "Apakah sistem ini mendukung semua spesialisasi?",
    answer:
      "Benar, sistem kami dirancang khusus untuk memenuhi kebutuhan unik dari berbagai spesialisasi medis, sehingga fungsinya optimal sesuai bidang Anda",
  },
  {
    question: "Apakah perlu pelatihan khusus untuk menggunakan sistem ini?",
    answer:
      "Tidak, sistem kami dirancang user-friendly dengan antarmuka sederhana. Namun, kami menyediakan panduan singkat dan dukungan teknis jika diperlukan",
  },
  {
    question: "Apakah sistem ini sudah siap digunakan?",
    answer:
      "Ya, sistem kami dirancang siap pakai tanpa perlu pengaturan tambahan. Anda dapat langsung menggunakannya begitu implementasi selesai",
  },
  {
    question: "Bagaimana bila ada kendala saat saya menggunakan sistem?",
    answer:
      "Kami menyediakan tim dukungan teknis yang siap membantu Anda melalui chat, email, atau telepon untuk memastikan kelancaran operasional",
  },
  {
    question: "Apa standar keamanan data yang digunakan?",
    answer:
      "Kami menggunakan standar arsitektur HL7FHIR, yang memastikan keamanan dan interoperabilitas data sesuai dengan standar global",
  },
  {
    question: "Bagaimana sistem ini membantu pekerjaan saya sebagai dokter?",
    answer:
      "Sistem ini mempermudah akses data pasien secara real-time, mengintegrasikan administrasi BPJS Kesehatan, dan menyediakan fitur spesifik sesuai spesialisasi Anda untuk meningkatkan efisiensi praktik",
  },
];

export function Faq() {
  return (
    <div
      id="testimoni"
      className={twMerge("p-8 lg:p-16 mt-16 lg:mt-32", maxWidthContainer)}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:mx-14">
        <h2 className="text-[32px] font-bold">
          Anda Bertanya, Kami <br /> Menjawab
        </h2>
        <p className="mt-4 lg:mt-0 lg:text-right text-[16px] lg:w-[30rem]">
          Kami mengkurasi pertanyaan yang sering ditanyakan berikut dengan
          jawabannya
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mt-16">
        {faqData?.map((faq) => {
          return (
            <div className="bg-neutral-200 p-8">
              <div className="flex items-center gap-3">
                <FaqIcon />
                <span className="font-bold">{faq?.question}</span>
              </div>
              <p className="mt-4">{faq?.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
