"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { motion } from "framer-motion";

export default function CustomFilter({ title, options, setFilter }: CustomFilterProps) {
  // const router = useRouter();
  const [selected, setSelected] = useState(options[0]); // State for storing the selected option

  // update the URL search parameters and navigate to the new URL
  // const handleUpdateParams = (e: { title: string; value: string }) => {
  //   const newPathName = updateSearchParams(title, e.value.toLowerCase());

  //   router.push(newPathName);
  // };

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="w-fit"
    >
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); 
          // handleUpdateParams(e); 
          setFilter(e.value)
        }}
      >
        <div className="relative w-fit z-10">
          {/* Button for the listbox */}
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </Listbox.Button>
          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            enter="transition-ease duration-300"
            enterFrom="opacity-0 scale-50 -translate-y-[4rem]"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 translate-y-[1rem]"
            leaveTo="opacity-0 scale-50 -translate-y-[4rem]"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </motion.div>
  );
}
