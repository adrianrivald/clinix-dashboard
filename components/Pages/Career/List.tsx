import { TFunction } from "i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { CareerIcon, PinMapBlackIcon } from "../../Icons";
import { Button } from "../../Ui";

const careerListData = [
  {
    id: "ui-ux-designer-notes",
    title: "UI/UX Designer (Notes)",
    categories: ["Product Design Inter", "Senior Level"],
    type: "Full Time",
    location: "Work Remotely",
  },
  {
    id: "brand-manager-memos",
    title: "Brand Manager (Memos)",
    categories: ["Marketing", "Entry Level"],
    type: "Full Time",
    location: "Work Remotely",
  },
  {
    id: "engineering-manager-1",
    title: "Engineering Manager",
    categories: ["Developer", "Senior Level"],
    type: "Full Time",
    location: "Work Remotely",
  },
  {
    id: "engineering-manager-2",
    title: "Engineering Manager",
    categories: ["Developer", "Senior Level"],
    type: "Full Time",
    location: "Work Remotely",
  },
  {
    id: "engineering-manager-3",
    title: "Engineering Manager",
    categories: ["Developer", "Senior Level"],
    type: "Full Time",
    location: "Work Remotely",
  },
  {
    id: "engineering-manager-4",
    title: "Engineering Manager",
    categories: ["Developer", "Senior Level"],
    type: "Full Time",
    location: "Work Remotely",
  },
];

interface CareerListProps {
  t: TFunction<"common", undefined>;
}
export function CareerList({ t }: CareerListProps) {
  const router = useRouter();
  const onClickItem = (id: string) => {
    router.push(`/career/${id}`);
  };

  return (
    <div
      id="career-list"
      className={twMerge("my-24 p-4 lg:p-16", maxWidthContainer)}
    >
      <h2 className="text-[32px] font-bold text-center">
        {t("career.discoverTheBestJob")}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 mt-16 gap-8">
        {careerListData?.map((career, index) => (
          <div
            onClick={() => onClickItem(career?.id)}
            key={index}
            className="hover:shadow-xl p-8 shadow-md rounded-lg flex flex-col gap-6 cursor-pointer"
          >
            <CareerIcon />
            <div>
              <h3 className="font-bold text-[24px]">{career?.title}</h3>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {career?.categories?.map((category, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-neutral-200 px-3 py-2"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>{career?.type}</span>
              <div className="flex items-center gap-2">
                <PinMapBlackIcon />
                <span>{career?.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
