import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import {
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  TwitterIcon,
  WhatsappIcon,
} from "../../Icons";

export function ArticleDetailContent() {
  const router = useRouter();

  return (
    <div className={twMerge("p-4 lg:p-16 mb-12", maxWidthContainer)}>
      {/* Article Detail */}
      <div id="article-detail" className="lg:mx-36">
        {/* Article Title */}
        <h1 className="text-[32px] lg:text-[50px] font-bold">
          Studi Temukan Efek Buruk Bagi Mereka yang Pernah Kena COVID, Bikin
          Otak Jadi Gini
        </h1>
        {/* Date Post */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mt-8 py-6 border-t-2 border-b-2 border-dashed">
          <span>Dipublish 24 September 2024</span>
          <div className="flex items-center gap-4">
            <WhatsappIcon />
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkIcon />
          </div>
        </div>

        {/* Content Post */}
        <div className="mt-16">
          <Image
            src="/assets/images/hot-topic-1.jpg"
            width={824}
            height={450}
            alt="pic"
            className="w-full rounded-xl"
          />
          <div id="content" className="mt-8 text-justify">
            <p className="mt-4">
              Jakarta - SARS-CoV-2, virus di balik pandemi COVID-19, ternyata
              bertahan di dalam tengkorak dan meningen selama bertahun-tahun
              setelah infeksi. Hal ini memicu efek jangka panjang pada otak
              menurut sebuah studi besar di Jerman.
            </p>
            <p className="mt-4">
              Para peneliti dari Helmholtz Munich dan
              Ludwig-Maximilians-Universitat (LMU) menemukan bahwa protein
              lonjakan SARS-CoV-2 tetap berada di lapisan pelindung otak atau
              disebut meningen, dan sumsum tulang tengkorak hingga empat tahun
              setelah infeksi.
            </p>
            <p className="mt-4">
              Protein lonjakan ini bertanggung jawab untuk memicu peradangan
              kronis pada individu yang terkena COVID dan meningkatkan risiko
              penyakit neurodegeneratif.
            </p>
            <p className="mt-4">
              Studi yang diterbitkan dalam jurnal Cell Host & Microbe ini juga
              mungkin memiliki gejala neurologis COVID jangka panjang seperti
              sakit kepala, gangguan tidur, dan kabut otak atau brain fog, serta
              gangguan kognitif.
            </p>
            <p className="mt-4">
              Sekitar lima hingga 10 persen orang yang terinfeksi COVID
              kemungkinan akan mengalami long COVID atau gejala jangka panjang.
              Penelitian tersebut mengungkapkan sekitar 400 juta orang mungkin
              membawa sejumlah besar protein lonjakan.
            </p>
            <p className="mt-4">
              "Khususnya, vaksin terhadap virus mematikan tersebut secara
              signifikan mengurangi akumulasi protein lonjakan di otak," kata
              para peneliti, dikutip dari NDTV.
            </p>
            <p className="mt-4">
              "Namun, pengurangannya hanya sekitar 50 persen pada tikus,
              meninggalkan sisa protein lonjakan yang terus menimbulkan risiko
              toksik pada otak," lanjut peneliti.
            </p>
            <p className="mt-4">
              Untuk penelitian tersebut, tim mengembangkan teknik pencitraan
              bertenaga AI baru untuk memahami bagaimana protein lonjakan
              SARS-CoV-2 memengaruhi otak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
