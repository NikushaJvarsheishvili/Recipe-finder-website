import Link from "next/link";
import Image from "next/image";

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
              src="/images/icon-instagram.svg"
              width={22}
              height={22}
              alt="instagram-icon"
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/icon-tiktok.svg"
              width={22}
              height={22}
              alt="bluesky-icon"
            />
          </Link>

          <Link href="/">
            <Image
              src="/images/icon-bluesky.svg"
              width={22}
              height={22}
              alt="tiktok-icon"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
