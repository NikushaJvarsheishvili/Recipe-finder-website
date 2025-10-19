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
export default function DropDownMenu({ DropMenuProperty }) {
  const [position, setPosition] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-preset-7 px-[16px] py-[10px] "
          variant="outline"
        >
          {/* {position !== null ? `${position} minutes` : DropMenuProperty.title} */}
          {DropMenuProperty.title}

          <Image
            className={`${
              isOpen && "rotate-[180deg]"
            } transition-all duration-300`}
            src="/images/icon-chevron-down.svg"
            width={20}
            height={20}
            alt="icon-chevron-down"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {DropMenuProperty.minutes.map((item) => {
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
              onClick={() => setPosition(null)}
            >
              Clear
            </button>
          </DropdownMenuLabel>{" "}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
