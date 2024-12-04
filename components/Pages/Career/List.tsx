import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { CareerIcon, PinMapBlackIcon } from "../../Icons";
import { Button } from "../../Ui";

export function CareerList() {
  return (
    <div
      id="career-list"
      className={twMerge("mt-32 p-8 lg:p-16", maxWidthContainer)}
    >
      <h2 className="text-[32px] font-bold text-center">
        Discover the best job
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8">
        <div className="p-8 shadow-lg rounded-lg flex flex-col gap-6">
          <CareerIcon />
          <div>
            <h3 className="font-bold text-[24px]">
              UI/UX Designer {"(Notes)"}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Product Design Intern
              </div>
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Senior Level
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Full Time</span>
            <div className="flex items-center gap-2">
              <PinMapBlackIcon />
              <span>Work Remotely</span>
            </div>
          </div>
        </div>
        <div className="p-8 shadow-lg rounded-lg flex flex-col gap-6">
          <CareerIcon />
          <div>
            <h3 className="font-bold text-[24px]">
              UI/UX Designer {"(Notes)"}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Product Design Intern
              </div>
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Senior Level
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Full Time</span>
            <div className="flex items-center gap-2">
              <PinMapBlackIcon />
              <span>Work Remotely</span>
            </div>
          </div>
        </div>
        <div className="p-8 shadow-lg rounded-lg flex flex-col gap-6">
          <CareerIcon />
          <div>
            <h3 className="font-bold text-[24px]">
              UI/UX Designer {"(Notes)"}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Product Design Intern
              </div>
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Senior Level
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Full Time</span>
            <div className="flex items-center gap-2">
              <PinMapBlackIcon />
              <span>Work Remotely</span>
            </div>
          </div>
        </div>
        <div className="p-8 shadow-lg rounded-lg flex flex-col gap-6">
          <CareerIcon />
          <div>
            <h3 className="font-bold text-[24px]">
              UI/UX Designer {"(Notes)"}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Product Design Intern
              </div>
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Senior Level
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Full Time</span>
            <div className="flex items-center gap-2">
              <PinMapBlackIcon />
              <span>Work Remotely</span>
            </div>
          </div>
        </div>
        <div className="p-8 shadow-lg rounded-lg flex flex-col gap-6">
          <CareerIcon />
          <div>
            <h3 className="font-bold text-[24px]">
              UI/UX Designer {"(Notes)"}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Product Design Intern
              </div>
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Senior Level
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Full Time</span>
            <div className="flex items-center gap-2">
              <PinMapBlackIcon />
              <span>Work Remotely</span>
            </div>
          </div>
        </div>
        <div className="p-8 shadow-lg rounded-lg flex flex-col gap-6">
          <CareerIcon />
          <div>
            <h3 className="font-bold text-[24px]">
              UI/UX Designer {"(Notes)"}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Product Design Intern
              </div>
              <div className="rounded-full bg-neutral-200 px-3 py-2">
                Senior Level
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Full Time</span>
            <div className="flex items-center gap-2">
              <PinMapBlackIcon />
              <span>Work Remotely</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
