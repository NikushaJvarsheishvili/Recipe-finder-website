import Image from "next/image";

export default function RecipeEssentials({ details, isWide }) {
  return (
    <div
      className={` grid ${
        isWide ? "" : "sm:grid-cols-2"
      }  gap-x-[16px] gap-y-[8px]  text-preset-9 text-neutral-900 font-medium grid-cols-3 max-w-[450px]`}
    >
      <p className="flex gap-[6px]">
        <Image
          src="/images/icon-servings.svg"
          width={20}
          height={20}
          alt={details.servings}
        />
        Serving: {details.servings}
      </p>
      <p className="flex gap-[6px]">
        <Image
          src="/images/icon-prep-time.svg"
          width={20}
          height={20}
          alt={details.prepMinutes}
        />
        Prep: {details.prepMinutes} {details.prepMinutes === 0 ? "min" : "mins"}
      </p>
      <p className="flex gap-[6px]">
        <Image
          src="/images/icon-cook-time.svg"
          width={20}
          height={20}
          alt={details.cookMinutes}
        />
        Cook: {details.cookMinutes} {details.cookMinutes === 0 ? "min" : "mins"}
      </p>
    </div>
  );
}
