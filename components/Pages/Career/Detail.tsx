import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { Button } from "../../Ui";

export function CareerDetailContent() {
  return (
    <>
      <div className="w-full h-[400px] bg-primary-500 relative bg-primary-500 text-white">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform z-50 flex flex-col justify-center items-center gap-4">
          <h2 className="text-[24px] lg:text-5xl text-white text-center font-bold">
            UI / UX Designer
          </h2>
        </div>
      </div>
      <div className={twMerge("p-8 lg:p-16 mt-8", maxWidthContainer)}>
        <div className="lg:w-[50%] mx-auto">
          <h3 className="font-bold text-[24px]">
            As an Engineering Manager what you’ll do?
          </h3>
          <ul className="list-disc mt-4 flex flex-col gap-4 ml-4">
            <li>Design architecture for new microservice</li>
            <li>
              Maintaining, monitoring and improving the quality of every
              microservice you owned
            </li>
            <li>
              Nam pellentesque orci ut odio blandit, sit amet elementum augue
              venenatis.
            </li>
            <li>
              Vivamus semper magna suscipit leo malesuada, eu dictum velit
              varius.
            </li>
            <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
            <li>
              Integer et felis a purus convallis condimentum nec vel eros.
            </li>
            <li>
              Integer et felis a purus convallis condimentum nec vel eros.
            </li>
            <li>
              Duis pretium sapien vitae felis tincidunt lobortis vel et urna
            </li>
            <li>Cras ut erat eu ante suscipit rutrum.</li>
          </ul>
        </div>
        <div className="lg:w-[50%] mx-auto mt-16">
          <h3 className="font-bold text-[24px]">What You’ll Need?</h3>
          <ul className="list-disc mt-4 flex flex-col gap-4 ml-4">
            <li>Minimum 8 years working experience as Backend Engineer</li>
            <li>Experience with Java or Golang</li>
            <li>Experience working with MongoDB, MySQL, and Postgre</li>
            <li>
              Vivamus semper magna suscipit leo malesuada, eu dictum velit
              varius.
            </li>
            <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
            <li>
              Integer et felis a purus convallis condimentum nec vel eros.
            </li>
            <li>
              Integer et felis a purus convallis condimentum nec vel eros.
            </li>
            <li>
              Duis pretium sapien vitae felis tincidunt lobortis vel et urna
            </li>
            <li>Cras ut erat eu ante suscipit rutrum.</li>
          </ul>
        </div>
        <div className="lg:w-[50%] mx-auto mt-16 lg:mt-24">
          <Button isPrimary title="Apply" className="w-44" />
        </div>
      </div>
    </>
  );
}
