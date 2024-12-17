import { Listbox, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { useSearchDebounce } from "../../../hooks";
import { ArrowDownIcon, ArrowRightBlueIcon, SuccessDemo } from "../../Icons";
import { SearchBox } from "../../SearchBox/SearchBox";
import { Button } from "../../Ui";

interface SelectProps {
  label: string;
  id: string;
}

const companies: SelectProps[] = [
  {
    id: "verySmall",
    label: "< 5 Employees",
  },
  {
    id: "small",
    label: "5 - 20 Employees",
  },
  {
    id: "medium",
    label: "20 - 50 Employees",
  },
  {
    id: "big",
    label: "50 - 250 Employees",
  },
  {
    id: "veryBig",
    label: ">250 Employees",
  },
];

const interests: SelectProps[] = [
  {
    id: "1",
    label: "Use it in my company",
  },
  {
    id: "2",
    label: "Offer Memos services to other companies",
  },
  {
    id: "3",
    label: "I am a Doctor",
  },
];

const languages: SelectProps[] = [
  {
    id: "sa",
    label: "Arabian",
  },
  {
    id: "al",
    label: "Albanian",
  },
  {
    id: "az",
    label: "Azerbaijani",
  },
  {
    id: "ba",
    label: "Baluchi",
  },
  {
    id: "ph",
    label: "Filipino",
  },
  {
    id: "fr",
    label: "French",
  },
  {
    id: "gr",
    label: "German",
  },
  {
    id: "gk",
    label: "Greek",
  },
  {
    id: "id",
    label: "Indonesia",
  },
  {
    id: "li",
    label: "Lithuanian",
  },
  {
    id: "my",
    label: "Malay",
  },
  {
    id: "se",
    label: "Serbian",
  },
  {
    id: "sp",
    label: "Spanish",
  },
  {
    id: "sh",
    label: "Swahili",
  },
];
export function DemoContent() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState<SelectProps>();
  const [selectedLanguage, setSelectedLanguage] = React.useState<SelectProps>();
  const [selectedCompany, setSelectedCompany] = React.useState<SelectProps>();
  const [selectedInterest, setSelectedInterest] = React.useState<SelectProps>();
  const [searchTerm, setSearchTerm] = useSearchDebounce();
  const { register, handleSubmit, watch } = useForm<any>();
  const form = useRef() as any;

  React.useEffect(() => {
    setIsSubmitted(false);
  }, []);

  const onSearchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const formValues = {
    name: watch("name"),
    email: watch("email"),
    company_name: watch("company_name"),
    phone: watch("phone"),
    country: selectedCountry?.label,
    langauge: selectedLanguage?.label,
    company_size: selectedCompany?.label,
    interest: selectedInterest?.label,
  };

  const onSubmit: SubmitHandler<any> = async () => {
    await emailjs
      .send("service_le33abk", "template_n1eho2g", formValues, {
        publicKey: "-bHdy_Fu3An8fq6Av",
      })
      .then(
        () => {
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const onClickHome = () => {
    router.push("/");
  };

  return (
    <div
      id="product-list"
      className={twMerge("mb-24 p-4 lg:p-16", maxWidthContainer)}
    >
      <div className="lg:mx-36">
        {!isSubmitted ? (
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow-md w-full p-8 rounded-lg border border-neutral-250">
              <h2 className="font-bold">Talk with our sales team</h2>
              <h3 className="mt-2">
                Fill out your information and a Memos representative will reach
                out to you.
              </h3>
              <div className="flex flex-col gap-8 mt-6">
                <div className="flex flex-col gap-4">
                  {/* Row 1 */}
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="w-full flex flex-col gap-2">
                      <label className="text-[14px] font-medium" htmlFor="name">
                        Name <span className="text-warning">*</span>
                      </label>
                      <input
                        id="name"
                        {...register("name", { required: true })}
                        type="text"
                        className="rounded-md p-4 border border-neutral-100 focus:outline-none"
                        placeholder="Input Name"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label
                        className="text-[14px]"
                        font-medium
                        htmlFor="email"
                      >
                        Email <span className="text-warning">*</span>
                      </label>
                      <input
                        id="email"
                        {...register("email", { required: true })}
                        type="email"
                        className="rounded-md p-4 border border-neutral-100 focus:outline-none"
                        placeholder="Input Email"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="w-full flex flex-col gap-2">
                      <label
                        className="text-[14px] font-medium"
                        htmlFor="company_name"
                      >
                        Company Name <span className="text-warning">*</span>
                      </label>
                      <input
                        id="company_name"
                        {...register("company_name", { required: true })}
                        type="text"
                        className="rounded-md p-4 border border-neutral-100 focus:outline-none"
                        placeholder="Input Company Name"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label
                        className="text-[14px]"
                        font-medium
                        htmlFor="phone"
                      >
                        Phone Number <span className="text-warning">*</span>
                      </label>
                      <input
                        id="phone"
                        {...register("phone", { required: true })}
                        type="number"
                        className="rounded-md p-4 border border-neutral-100 focus:outline-none"
                        placeholder="Input Phone Number"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="w-full flex flex-col gap-2">
                      <label
                        className="text-[14px] font-medium"
                        htmlFor="country"
                      >
                        Country <span className="text-warning">*</span>
                      </label>

                      <Listbox
                        value={selectedCountry}
                        onChange={setSelectedCountry}
                      >
                        <div className="relative">
                          <Listbox.Button className="border border-neutral-100 relative w-full cursor-default rounded-md bg-white py-4 pl-4 pr-10 text-left focus:outline-none">
                            <span className="block truncate">
                              {selectedCountry ? (
                                selectedCountry?.label
                              ) : (
                                <span className="text-neutral-400">
                                  Select Country
                                </span>
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
                            <Listbox.Options className="z-10 absolute mt-1 w-full max-h-60 overflow-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                              <div className="px-8 my-2">
                                <SearchBox onSearch={onSearchCountry} />
                              </div>
                              <div className="overflow-auto max-h-60">
                                {languages
                                  ?.filter((item) =>
                                    item?.label
                                      .toLowerCase()
                                      .includes(searchTerm)
                                  )
                                  .map((language, idx) => (
                                    <Listbox.Option
                                      key={idx}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                          active ? "bg-primary-100" : ""
                                        }`
                                      }
                                      value={language}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <span
                                            className={`block truncate ${
                                              selected
                                                ? "font-medium"
                                                : "font-normal"
                                            }`}
                                          >
                                            {language.label}
                                          </span>
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                              </div>
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label
                        className="text-[14px]"
                        font-medium
                        htmlFor="language"
                      >
                        Language <span className="text-warning">*</span>
                      </label>
                      <Listbox
                        value={selectedLanguage}
                        onChange={setSelectedLanguage}
                      >
                        <div className="relative">
                          <Listbox.Button className="border border-neutral-100 relative w-full cursor-default rounded-md bg-white py-4 pl-4 pr-10 text-left focus:outline-none">
                            <span className="block truncate">
                              {selectedLanguage ? (
                                selectedLanguage?.label
                              ) : (
                                <span className="text-neutral-400">
                                  Select Language
                                </span>
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
                              {languages.map((language, idx) => (
                                <Listbox.Option
                                  key={idx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active ? "bg-primary-100" : ""
                                    }`
                                  }
                                  value={language}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {language.label}
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

                  {/* Row 4 */}
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="w-full flex flex-col gap-2">
                      <label
                        className="text-[14px]"
                        font-medium
                        htmlFor="company_size"
                      >
                        Company Size <span className="text-warning">*</span>
                      </label>
                      <Listbox
                        value={selectedCompany}
                        onChange={setSelectedCompany}
                      >
                        <div className="relative">
                          <Listbox.Button className="border border-neutral-100 relative w-full cursor-default rounded-md bg-white py-4 pl-4 pr-10 text-left focus:outline-none">
                            <span className="block truncate">
                              {selectedCompany ? (
                                selectedCompany?.label
                              ) : (
                                <span className="text-neutral-400">
                                  Select Company Size
                                </span>
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
                              {companies.map((company, idx) => (
                                <Listbox.Option
                                  key={idx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active ? "bg-primary-100" : ""
                                    }`
                                  }
                                  value={company}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {company.label}
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
                      <label
                        className="text-[14px]"
                        font-medium
                        htmlFor="interest"
                      >
                        Primary Interest <span className="text-warning">*</span>
                      </label>
                      <Listbox
                        value={selectedInterest}
                        onChange={setSelectedInterest}
                      >
                        <div className="relative">
                          <Listbox.Button className="border border-neutral-100 relative w-full cursor-default rounded-md bg-white py-4 pl-4 pr-10 text-left focus:outline-none">
                            <span className="block truncate">
                              {selectedInterest ? (
                                selectedInterest?.label
                              ) : (
                                <span className="text-neutral-400">
                                  Select Primary Interest
                                </span>
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
                              {interests.map((interest, idx) => (
                                <Listbox.Option
                                  key={idx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active ? "bg-primary-100" : ""
                                    }`
                                  }
                                  value={interest}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {interest.label}
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
                </div>

                <p>
                  By clicking <strong>Request</strong>, you accept our{" "}
                  <Link href="/" className="text-link">
                    Subscription Agreement
                  </Link>{" "}
                  and{" "}
                  <Link href="/" className="text-link">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
            <div className="shadow-md mt-8 flex justify-end items-center gap-4 w-full p-8 rounded-lg border border-neutral-250">
              <Button
                title="Batal"
                className="border-neutral-300 text-neutral-300"
                type="button"
                onClick={onClickHome}
              />
              <Button
                isPrimary
                title="Request"
                className="w-48"
                type="submit"
              />
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <SuccessDemo />
            <div className="text-center">
              <h3 className="font-bold">
                Your request has been sent to memos team!
              </h3>
              <h4 className="mt-1">
                You{`’`}ll be notified when someone at memos team will open it
              </h4>
            </div>
            <Button
              isPrimary
              title="Kembali ke halaman utama"
              onClick={onClickHome}
              className="mt-4"
            />
          </div>
        )}
      </div>
    </div>
  );
}
