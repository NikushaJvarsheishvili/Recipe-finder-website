import Image from "next/image";

export default function CookSmarterSection() {
  return (
    <section className=" h-[396px] mt-[96px] bg-neutral-200 max-w-[1192px] m-auto rounded-radius-16 flex items-center justify-center  relative overflow-hidden">
      <Image
        priority
        className="absolute -left-[60px] -bottom-8 max-md:w-[180px]"
        src="/images/pattern-fork.svg"
        width={314}
        height={390}
        alt="pattern-fork"
      />

      <div className=" w-[600px] z-10 text-center">
        <h2 className="text-preset-2 text-neutral-900">
          Ready to cook smarter?
        </h2>
        <p className="text-preset-6 mt-[12px]">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>

        <button className="button mt-[24px]">Browse recipes</button>
      </div>
      <Image
        priority
        className="absolute -right-[60px] max-md:-right-[30px] max-md:w-[171px] max-md:-top-[20px]"
        src="/images/pattern-knife.svg"
        width={314}
        height={390}
        alt="pattern-knife"
      />
    </section>
  );
}
