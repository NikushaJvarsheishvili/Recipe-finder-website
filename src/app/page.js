import Image from "next/image";

export default function Home() {
  const benefits = [
    {
      icon: "/images/icon-whole-food-recipes.svg",
      title: "Whole-food recipes",
      description: "Each dish uses everyday, unprocessed ingredients.",
    },
    {
      icon: "/images/icon-minimum-fuss.svg",
      title: "Minimum fuss",
      description:
        "All recipes are designed to make eating healthy quick and easy.",
    },
    {
      icon: "/images/icon-search-in-seconds.svg",
      title: "Search in seconds",
      description:
        "Filter by name or ingredient and jump straight to the recipe you need.",
    },
  ];
  // console.log("/images/image-home-hero-large-webp");

  return (
    <>
      <section className="flex-col-center items-center gap-40 mt-80 text-center">
        <div>
          <h1 className="text-preset-1 text-neutral-900">
            <span
              className="relative border-none

              before:absolute
              before:w-250
              before:h-11
              before:bg-[#fad3bc]
              before:rounded-radius-4
              before:bottom-3
              before:-z-1

            "
            >
              Healty
            </span>{" "}
            meals, zero fuss
          </h1>
          <p className="text-preset-6 max-w-580 m-auto">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
        </div>
        <button className="button transition-all duration-300 hover:bg-neutral-600">
          Start exploring
        </button>
      </section>
      <section className="relative">
        <Image
          className=""
          src="/images/pattern-squiggle-1.svg"
          width={0}
          height={0}
          alt="pattern-squiggle"
          style={{
            width: "100%",
            position: "absolute",
            zIndex: "-1",
            bottom: "10px",
          }}
        />{" "}
        <Image
          className=""
          src="/images/image-home-hero-large.webp"
          alt="pattern-squiggle"
          width={1192}
          height={1000}
          style={{
            border: "solid white 10px",
            margin: "auto",
            borderRadius: "20px",
            marginTop: "80px",
          }}
        />
      </section>
      <section className="mt-[90px]">
        <h1 className="text-preset-2 text-neutral-900 text-center">
          What you’ll get
        </h1>
        <div className="flex items-center md:justify-center flex-col md:flex-row gap-[32px]">
          {benefits.map((item, index) => {
            return (
              <div
                key={index}
                className="mt-[48px] max-w-[376px] flex flex-col gap-[24px]"
              >
                <Image
                  className="border-2 w-[60px] h-[60px] p-[8px] bg-white rounded-radius-16"
                  src={item.icon}
                  alt={item.title}
                  width={23}
                  height={32}
                />

                <div className="flex flex-col gap-[12px]">
                  <h1 className="text-preset-3 text-neutral-900">
                    {item.title}
                  </h1>
                  <p className="text-preset-6">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className=" flex flex-col md:flex-row items-center  mt-[192px] justify-center gap-[76px]">
        <div className="  flex flex-col justify-center gap-[20px] ">
          <h1 className="text-preset-2 text-neutral-900">
            Built for real life
          </h1>
          <p className="max-w-[480px] text-preset-6">
            Cooking shouldn’t be complicated. These recipes come in under{" "}
            <span
              className="font-bold relative
               before:absolute
              before:w-full
              before:h-2
              before:bg-orange-500
              before:rounded-radius-4
              before:bottom-1
              before:-z-1
            "
            >
              30 minutes
            </span>{" "}
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p className="max-w-[480px] text-preset-6">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
        </div>
        <div>
          <Image
            className="rounded-radius-16"
            src="/images/image-home-real-life-large.webp"
            width={635}
            height={450}
            alt="home-real-large"
          />
        </div>
      </section>
      <section className=" h-[396px] mt-[96px] bg-neutral-200 max-w-[1192px] m-auto rounded-radius-16 flex items-center justify-center  relative overflow-hidden">
        <Image
          className="absolute -left-[60px] top-8"
          src="/images/pattern-fork.svg"
          width={314}
          height={390}
          alt="pattern-fork"
        />

        <div className=" w-[600px] z-10 text-center">
          <h1 className="text-preset-2 text-neutral-900">
            Ready to cook smarter?
          </h1>
          <p className="text-preset-6 mt-[12px]">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>

          <button className="button mt-[24px]">Browse recipes</button>
        </div>
        <Image
          className="absolute -right-[60px]"
          src="/images/pattern-knife.svg"
          width={314}
          height={390}
          alt="pattern-knife"
        />
      </section>
    </>
  );
}
