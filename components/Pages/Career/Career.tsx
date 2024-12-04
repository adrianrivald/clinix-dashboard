import React from "react";
import { HeroCareer } from "./Hero";
import { CareerList } from "./List";

export function CareerContent() {
  return (
    <div id="career">
      <HeroCareer />
      <CareerList />
    </div>
  );
}
