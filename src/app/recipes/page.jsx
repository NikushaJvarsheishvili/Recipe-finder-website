import recipesData from "@/app/data.json";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "../_components/DropDownMenu";

export default function Recipes() {
  console.log(recipesData);

  const DropMenuProperty = {
    prep: {
      title: "Max Prep Time",
      minutes: [0, 5, 10],
    },
    cook: {
      title: "Max Cook Time",
      minutes: [0, 5, 10, 15, 20],
    },
  };

  return (
    <>
      <section>
        <article className="text-center flex flex-col items-center gap-[12]">
          <h1 className="text-preset-2 text-neutral-900">
            Explore our simple, healthy recipes
          </h1>
          <p className="max-w-[724px] text-preset-6">
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll the list and let something delicious
            catch your eye.
          </p>
        </article>
      </section>
      <section className="py-[96px]">
        <article className="flex justify-between max-w-[1192px] m-auto">
          <div className="flex gap-[16px]">
            <DropDownMenu DropMenuProperty={DropMenuProperty.prep} />
            <DropDownMenu DropMenuProperty={DropMenuProperty.cook} />
          </div>
          <div>
            <form>
              <div className="relative flex items-center mr-[65px] w-full">
                <Image
                  className="absolute ml-[10px]"
                  src={"/images/icon-search.svg"}
                  width={20}
                  height={20}
                  alt="search-icon"
                />
                <input
                  type="text"
                  placeholder="Search by name or ingredient…"
                  className="pl-[46px] pr-[16px] py-2 border border-gray-300 rounded-radius-10 w-full "
                />
              </div>
            </form>
          </div>
        </article>
        <article
          className="mt-[24px] max-w-[1192px] m-auto grid
            gap-[32px]
            sm:grid-cols-2
            lg:grid-cols-3"
        >
          {recipesData.map((item, index) => {
            console.log(item.image.small.slice(8));
            return (
              <div
                key={index}
                className="card flex flex-col justify-between p-[8px] mx-auto rounded-radius-10"
              >
                <div className="flex flex-col gap-[16px] pb-[16px]">
                  <Image
                    className="mx-auto rounded-radius-10 h-[300px] w-full object-cover"
                    src={item.image.small.slice(8)}
                    width={360}
                    height={100}
                    alt={item.title}
                  />
                  <div className=" flex flex-col gap-[10px] break-all">
                    <h1 className="text-preset-5 text-neutral-900">
                      {item.title}
                    </h1>
                    <p className="text-preset-9 text-neutral-900">
                      {item.overview}
                    </p>
                    <div className=" grid sm:grid-cols-2 grid-cols-3 gap-x-[16px] gap-y-[8px]  text-preset-9 text-neutral-900 font-medium ">
                      <p className="flex gap-[6px]">
                        <Image
                          src="/images/icon-servings.svg"
                          width={20}
                          height={20}
                          alt={item.servings}
                        />
                        Serving: {item.servings}
                      </p>
                      <p className="flex gap-[6px]">
                        <Image
                          src="/images/icon-prep-time.svg"
                          width={20}
                          height={20}
                          alt={item.prepMinutes}
                        />
                        Prep: {item.prepMinutes}{" "}
                        {item.prepMinutes === 0 ? "min" : "mins"}
                      </p>
                      <p className="flex gap-[6px]">
                        <Image
                          src="/images/icon-cook-time.svg"
                          width={20}
                          height={20}
                          alt={item.cookMinutes}
                        />
                        Cook: {item.cookMinutes}{" "}
                        {item.cookMinutes === 0 ? "min" : "mins"}
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  className="border bg-neutral-900 text-white rounded-radius-full h-[48px] flex justify-center items-center text-preset-9 text-bold"
                  href={`/${item.id}`}
                >
                  View Recipe
                </Link>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
}
