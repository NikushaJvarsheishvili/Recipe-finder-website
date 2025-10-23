import Image from "next/image";
import DropDownMenu from "../_components/DropDownMenu";
import Card from "../_components/Card";

export default function Recipes() {
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
                  priority
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
        <Card isFull={true} />
      </section>
    </>
  );
}
