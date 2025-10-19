"use client";
import { useParams, useRouter } from "next/navigation";
import recipeData from "@/app/data.json";
import Image from "next/image";
import Link from "next/link";
import RecipeEssentials from "@/app/_components/RecipeEssentials";
import Card from "@/app/_components/Card";

export default function RecipeInfoPage() {
  const { id } = useParams();
  const router = useRouter();

  const recipeIds = recipeData.map((item) => item.id);

  if (!recipeIds.includes(Number(id))) {
    router.push("/");
    return;
  }

  const findRecipeById = recipeData.find((item) => item.id === Number(id));

  console.log(findRecipeById);
  return (
    <div className="flex gap-[64px] items-center pb-[96px] flex-col">
      <section className="max-w-[1192px] flex flex-col gap-[16px] items-start">
        <Link className="text-neutral-900 text-preset-9" href={"/recipes"}>
          Back
        </Link>
        <h1 className="text-preset-7 text-neutral-900">
          <span className="opacity-[60%]">Recipes /</span>{" "}
          {findRecipeById.title}
        </h1>

        <div className="flex gap-[40px] md:flex-row flex-col">
          <article>
            <Image
              className="rounded-radius-16"
              src={findRecipeById.image.large.slice(8)}
              width={580}
              height={580}
              alt="recipe-image"
            />
          </article>
          <article className="flex flex-col gap-[20px] max-w-[572px]">
            <h1 className="text-preset-2 text-neutral-900">
              {findRecipeById.title}
            </h1>
            <p className="text-preset-6 text-neutral-600">
              A refreshing, protein-packed salad tossed in a lemon-olive oil
              dressing.
            </p>
            <RecipeEssentials details={findRecipeById} isWide={true} />
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-preset-4">Ingredients:</h2>
              <div>
                {findRecipeById.ingredients.map((item, index) => {
                  return (
                    <ul key={index} className="flex flex-col gap-[8px]">
                      <li className="text-preset-6 text-neutral-900 flex gap-[8px]">
                        <Image
                          src="/images/icon-bullet-point.svg"
                          width={24}
                          height={24}
                          alt="icon-bullet-point"
                        />
                        {item}
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-preset-4">Instructions:</h2>
              <div>
                {findRecipeById.instructions.map((item, index) => {
                  return (
                    <ul key={index} className="flex flex-col gap-[8px]">
                      <li className="text-preset-6 text-neutral-900 flex gap-[8px]">
                        <Image
                          src="/images/icon-bullet-point.svg"
                          width={24}
                          height={24}
                          alt="icon-bullet-point"
                        />
                        {item}
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </section>
      <hr />
      <section className="max-w-[1192px]">
        <h1 className="text-preset-3 text-neutral-900">More recipes</h1>
        <div>
          <Card isFull={false} />
        </div>
      </section>
    </div>
  );
}
