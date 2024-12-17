import { TFunction } from "i18next";
import React from "react";
import { HeroCareer } from "./Hero";
import { CareerList } from "./List";
interface CareerContentProps {
  t: TFunction<"common", undefined>;
}
export function CareerContent({ t }: CareerContentProps) {
  return (
    <div id="career">
      <HeroCareer t={t} />
      <CareerList t={t} />
    </div>
  );
}
