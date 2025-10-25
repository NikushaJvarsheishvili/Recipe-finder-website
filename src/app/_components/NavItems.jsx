import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavItems({ isBurgerMenu }) {
  const pathname = usePathname();
  const navItems = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "recipes", href: "/recipes" },
  ];

  console.log(isBurgerMenu);
  return (
    <>
      <nav
        className={` ${
          isBurgerMenu ? "flex flex-col !gap-0" : "hidden"
        } md:flex  text-neutral-900 text-preset-7 gap-40`}
      >
        {navItems.map((item, index) => {
          return (
            <Link
              className={`capitalize ${
                isBurgerMenu ? "px-[8px] py-[12px]" : ""
              } ${
                item.href === pathname && !isBurgerMenu ? "nav-item-active" : ""
              }`}
              key={index}
              href={`${item.href}`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <button
        className={` ${
          isBurgerMenu ? "w-full !px-[16px] !py-[12px]" : "hidden"
        } md:block button  transition-all duration-300 hover:bg-neutral-600`}
      >
        Browse recipes
      </button>
    </>
  );
}
