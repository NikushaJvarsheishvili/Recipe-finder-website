"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navItems = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "recipes", href: "/recipes" },
  ];

  return (
    <header className="flex justify-between px-[20px] lg:px-60 py-20 bg-neutral-100 text-black border-b-2 fixed w-full items-center z-[100] top-0">
      <Link href={"/"}>
        <Image
          priority
          src="/images/logo.svg"
          width={260}
          height={40}
          alt="logo"
        />
      </Link>
      <nav className="flex-row-center gap-40 hidden lg:flex text-neutral-900 text-preset-7">
        {navItems.map((item, index) => (
          <Link
            className={`capitalize ${
              item.href === pathname ? "nav-item-active" : ""
            }`}
            key={index}
            href={`${item.href}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <button className="button transition-all duration-300 hover:bg-neutral-600">
        Browse recipes
      </button>
    </header>
  );
}
