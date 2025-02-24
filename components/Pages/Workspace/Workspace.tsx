import { Dialog, Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useRef, useState } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Button, Card } from "../../Ui";
import { TFunction } from "i18next";
import Image from "next/image";
import Countdown from "../../../helpers/countdown";
import PinInput from "../../Ui/Pin";
import { title } from "process";
import { ArrowDownIcon } from "../../Icons";

interface WorkspaceContentProps {
  t: TFunction<"common", undefined>;
}

const orgList = [
  {
    id: "1",
    label: "PT. Setio Husodo",
    logo: "/assets/images/logo-setio.png",
    workspaces: [
      {
        id: "1",
        label: "RS Setio Husodo Yogya",
      },

      {
        id: "2",
        label: "RS Setio Husodo Medan",
      },
    ],
  },
  {
    id: "2",
    label: "PT. Healthy",
    logo: "/assets/images/logo-healthy.png",
  },
];

interface SelectProps {
  label: string;
  id: string;
  logo: string;
}
export function WorkspaceContent({ t }: WorkspaceContentProps) {
  const router = useRouter();
  const [selectedOrg, setSelectedOrg] = useState<SelectProps>(orgList[0]);
  const [selectedWorkspace, setSelectedWorkspace] = useState<SelectProps>();
  const [isWorkspaceModal, setIsWorkspaceModal] = useState(false);
  const onToDetail = () => {
    router.push("/dashboard/subscription");
  };

  const onAcceptWorkspace = () => {
    setIsWorkspaceModal(true);
  };

  return (
    <div
      id="workspace"
      className={twMerge("mb-24 px-4 lg:px-8", "max-w-full mx-auto")}
    >
      <div className="flex md:hidden flex-col gap-4 mb-6">
        <div className="w-full flex flex-col gap-2">
          <label className="text-[14px] font-medium" htmlFor="org">
            Organisasi
          </label>

          <Listbox value={selectedOrg} onChange={setSelectedOrg}>
            <div className="relative">
              <Listbox.Button className="border border-neutral-100 relative w-full cursor-default rounded-md bg-white py-4 pl-4 pr-10 text-left focus:outline-none">
                <span className="block truncate">
                  {selectedOrg ? (
                    selectedOrg?.label
                  ) : (
                    <span className="text-neutral-400">Pilih Organisasi</span>
                  )}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ArrowDownIcon />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {orgList.map((org, idx) => (
                    <Listbox.Option
                      key={idx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-green-100" : ""
                        }`
                      }
                      value={org}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {org?.label}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-[14px] font-medium" htmlFor="workspace">
            Workspace
          </label>

          <Listbox value={selectedWorkspace} onChange={setSelectedWorkspace}>
            <div className="relative">
              <Listbox.Button className="border border-neutral-100 relative w-full cursor-default rounded-md bg-white py-4 pl-4 pr-10 text-left focus:outline-none">
                <span className="block truncate">
                  {selectedWorkspace ? (
                    selectedWorkspace?.label
                  ) : (
                    <span className="text-neutral-400">Pilih Workspace</span>
                  )}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ArrowDownIcon />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {orgList
                    ?.find((item) => item?.id === selectedOrg?.id)
                    ?.workspaces?.map((workspace, idx) => (
                      <Listbox.Option
                        key={idx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-green-100" : ""
                          }`
                        }
                        value={workspace}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {workspace?.label}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-0 flex flex-col">
          <Image
            src="/assets/images/ws-1.png"
            width={400}
            height={160}
            alt="ws-1"
            className="rounded-t-lg w-full"
          />
          <div className="p-4 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="py-1 px-2 rounded-full bg-green-100 text-green-500">
                  Dokter
                </div>
                <div className="py-1 px-2 rounded-full bg-yellow-100 text-yellow-500">
                  Owner
                </div>
              </div>
              <div>
                <span className="text-neutral-300">
                  Terakhir aktif 19 jam yang lalu
                </span>
              </div>
            </div>
            <Image
              src="/assets/images/logo-notes.png"
              width={112}
              height={32}
              alt="logo-notes"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
