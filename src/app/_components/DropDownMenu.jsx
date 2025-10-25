"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
export default function DropDownMenu({ filter, setFilter }) {
  const [openIndex, setOpenIndex] = useState(null);

  const DropMenuProperty = [
    {
      title: "Max Prep Time",
      key: "maxPrepTime",
      minutes: [0, 5, 10],
    },
    {
      title: "Max Cook Time",
      key: "maxCookTime",
      minutes: [0, 5, 10, 15, 20],
    },
  ];

  console.log(filter);
  return (
    <>
      {DropMenuProperty.map((item, index) => {
        return (
          <DropdownMenu
            open={openIndex === index}
            onOpenChange={(openIndex) => setOpenIndex(openIndex ? index : null)}
            key={item.key}
          >
            <DropdownMenuTrigger asChild>
              <Button
                className="text-preset-7 px-[16px] py-[10px] "
                variant="outline"
              >
                {/* {item.title} */}
                {filter[item.key] !== ""
                  ? `${filter[item.key]} minutes`
                  : item.title}

                <Image
                  priority
                  className={`${
                    openIndex === index && "rotate-[180deg]"
                  } transition-all duration-300`}
                  src="/images/icon-chevron-down.svg"
                  width={20}
                  height={20}
                  alt="icon-chevron-down"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup
                value={filter[item.key]}
                onValueChange={(val) => {
                  setFilter((prev) => ({ ...prev, [item.key]: val }));
                }}
              >
                {item.minutes.map((item) => {
                  return (
                    <DropdownMenuRadioItem key={item} value={item}>
                      {item} minutes
                    </DropdownMenuRadioItem>
                  );
                })}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>
                  <button
                    className="w-full text-start"
                    onClick={() =>
                      setFilter((prev) => ({ ...prev, [item.key]: "" }))
                    }
                  >
                    Clear
                  </button>
                </DropdownMenuLabel>{" "}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      })}
    </>
  );
}
