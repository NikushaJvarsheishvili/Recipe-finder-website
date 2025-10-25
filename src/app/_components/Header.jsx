"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import NavItems from "@/app/_components/NavItems";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && isOpenMenu) {
        setIsOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpenMenu]);

  return (
    <header className=" flex justify-between px-[20px] lg:px-60 py-20 bg-neutral-100 text-black border-b-2 fixed w-full items-center z-[100] top-0">
      <Link href={"/"}>
        <Image
          priority
          src="/images/logo.svg"
          width={260}
          height={40}
          alt="logo"
        />
      </Link>
      <NavItems isBurgerMenu={false} />

      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className=" md:hidden block w-[40px] h-[40px] bg-neutral-300 rounded-radius-4"
      >
        <Image
          className="m-auto"
          src="/images/icon-hamburger-menu.svg"
          width={18}
          height={16}
          alt="icon-hamburger-menu"
        />
      </button>
      {isOpenMenu ? (
        <div className="rounded-radius-8 p-[8px] center bg-white w-[80%] absolute top-[200px]">
          <NavItems isBurgerMenu={true} />
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
