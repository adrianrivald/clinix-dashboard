import { Disclosure, Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { ArrowDownIcon } from "../Icons";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

interface SelectProps {
  label: string;
  id: string;
  logo: string;
}

const orgList = [
  {
    id: "1",
    label: "PT. Setio Husodo",
    logo: "/assets/images/logo-setio.png",
  },
  {
    id: "2",
    label: "PT. Healthy",
    logo: "/assets/images/logo-healthy.png",
  },
];

function Navmenu({ pathname }: { pathname: string }) {
  const router = useRouter();
  const { asPath } = router;
  const [selectedOrg, setSelectedOrg] = useState<SelectProps>(orgList[0]);

  const onClickWorkspace = (workspaceItem: string) => {
    router.push(`/workspace/${workspaceItem}`);
  };

  return (
    <nav>
      <ul className="list-style-none flex flex-col gap-4">
        <li className="py-4 flex items-center w-full cursor-pointer border-b border-neutral-250 pb-6">
          {pathname === "/dashboard" && (
            <Image
              src="/assets/icons/side-menu.svg"
              width={4}
              height={52}
              alt="side-menu"
            />
          )}
          <div className="ml-8 flex items-center gap-3">
            <Image
              src="/assets/icons/dashboard.svg"
              width={18}
              height={18}
              alt="dashboard"
            />
            <span
              className={`font-bold ${
                pathname === "/dashboard" ? "text-primary-500" : ""
              } `}
            >
              Dashboard
            </span>
          </div>
        </li>

        <Listbox value={selectedOrg} onChange={setSelectedOrg}>
          <div className="relative">
            <Listbox.Button className="py-4 flex items-center w-full cursor-pointer px-8">
              <span className="block truncate">
                <div className="cursor-pointer flex items-center justify-between gap-2">
                  <div className="flex items-center gap-4">
                    <Image
                      src={selectedOrg?.logo}
                      alt="rs-setio"
                      width={16}
                      height={16}
                    />
                    <span className={`text-[14px] block truncate font-bold`}>
                      {selectedOrg?.label}
                    </span>{" "}
                    <Image
                      src="/assets/icons/office.svg"
                      alt="office"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center pr-2">
                <ArrowDownIcon />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="z-10 absolute mt-1  w-[90%] -translate-x-1/2 left-1/2 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                <div className="p-4">Organisasi saat ini</div>
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none p-4`
                  }
                  value={selectedOrg}
                >
                  {({ selected }) => (
                    <div className="cursor-pointer flex items-center justify-between gap-2">
                      <div className="flex items-center gap-4">
                        <Image
                          src={selectedOrg?.logo}
                          alt="rs-setio"
                          width={16}
                          height={16}
                        />
                        <span
                          className={`text-[14px] block truncate ${
                            selected ? "font-bold" : "font-normal"
                          }`}
                        >
                          {selectedOrg?.label}
                        </span>{" "}
                        <Image
                          src="/assets/icons/office.svg"
                          alt="office"
                          width={16}
                          height={16}
                        />
                      </div>
                      <Image
                        src="/assets/icons/org-checked.svg"
                        alt="office"
                        width={16}
                        height={16}
                      />
                    </div>
                  )}
                </Listbox.Option>
                <div className="border-t-2 my-2 border-neutral-250 w-full h-1"></div>
                <div className="p-4">Ganti organisasi</div>
                {orgList
                  ?.filter((item) => item?.id !== selectedOrg?.id)
                  .map((org, idx) => (
                    <Listbox.Option
                      key={idx}
                      className={({ active }) =>
                        `relative cursor-default select-none p-4`
                      }
                      value={org}
                    >
                      {({ selected }) => (
                        <div className="cursor-pointer flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Image
                              src={org?.logo}
                              alt="rs-setio"
                              width={16}
                              height={16}
                            />
                            <span
                              className={`text-[14px] block truncate ${
                                selected ? "font-bold" : "font-normal"
                              }`}
                            >
                              {org?.label}
                            </span>{" "}
                            <Image
                              src="/assets/icons/office.svg"
                              alt="office"
                              width={16}
                              height={16}
                            />
                          </div>
                          <Image
                            src="/assets/icons/org-unchecked.svg"
                            alt="office"
                            width={16}
                            height={16}
                          />
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                <div className="border-t-2 my-2 border-neutral-250 w-full h-1"></div>
                <div className="flex items-center gap-4 p-4 cursor-pointer">
                  <Image
                    src="/assets/icons/plus.svg"
                    alt="plus"
                    width={16}
                    height={16}
                  />
                  Tambah organisasi
                </div>
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <div className="relative">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="py-4 flex items-center w-full cursor-pointer px-8">
                  <span className="block truncate">
                    <div className="cursor-pointer flex items-center justify-between gap-2">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/assets/icons/work.svg"
                          alt="work"
                          width={16}
                          height={16}
                        />
                        <span
                          className={`text-[14px] block truncate font-bold`}
                        >
                          Workspace
                        </span>{" "}
                      </div>
                    </div>
                  </span>
                  <span className="pointer-events-none absolute right-4 flex items-center pr-2">
                    <ArrowDownIcon />
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="relative">
                  <div className="flex flex-col gap-0">
                    <div
                      onClick={() => onClickWorkspace("setio-yogya")}
                      className="py-4 flex items-center w-full cursor-pointer"
                    >
                      {asPath.includes("/workspace/setio-yogya") && (
                        <Image
                          src="/assets/icons/side-menu.svg"
                          width={4}
                          height={52}
                          alt="side-menu"
                        />
                      )}
                      <span
                        className={`ml-16 font-bold ${
                          asPath.includes("/workspace/setio-yogya")
                            ? "text-primary-500"
                            : "pl-1"
                        }`}
                      >
                        RS Setio Husodo Jogja
                      </span>
                    </div>
                    <div
                      onClick={() => onClickWorkspace("setio-medan")}
                      className="py-4 flex items-center w-full cursor-pointer"
                    >
                      {asPath.includes("/workspace/setio-medan") && (
                        <Image
                          src="/assets/icons/side-menu.svg"
                          width={4}
                          height={52}
                          alt="side-menu"
                        />
                      )}
                      <span
                        className={`ml-16 font-bold ${
                          asPath.includes("/workspace/setio-medan")
                            ? "text-primary-500"
                            : "pl-1"
                        }`}
                      >
                        RS Setio Husodo Medan
                      </span>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </ul>
    </nav>
  );
}

export function Sidebar() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="hidden lg:block pt-[2rem] h-screen border-r border-neutral-250 min-w-[300px] overflow-auto">
      <Navmenu pathname={pathname} />
    </div>
  );
}
