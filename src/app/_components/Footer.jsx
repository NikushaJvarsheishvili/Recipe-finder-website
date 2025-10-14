import Link from "next/link";
import Image from "next/image";
import instagramIcon from "@/app/_assets/images/icon-instagram.svg";
import tiktokIcon from "@/app/_assets/images/icon-tiktok.svg";
import blueskyIcon from "@/app/_assets/images/icon-bluesky.svg";

export default function Footer() {
  return (
    <footer className="h-[104px]">
      <div className="max-w-[1192px] m-auto flex justify-between items-center h-full">
        <p className="text-neutral-900 font-medium text-preset-9">
          Made with ❤ and 🥑
        </p>

        <div className="flex gap-[24px]">
          <Link href="/">
            <Image
              src={instagramIcon}
              width={22}
              height={22}
              alt="instagram-icon"
            />
          </Link>
          <Link href="/">
            <Image
              src={blueskyIcon}
              width={22}
              height={22}
              alt="bluesky-icon"
            />
          </Link>
          <Image src={tiktokIcon} width={22} height={22} alt="tiktok-icon" />
          <Link href="/"></Link>
        </div>
      </div>
    </footer>
  );
}
