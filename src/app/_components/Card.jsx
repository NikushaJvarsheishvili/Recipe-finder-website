"use client";

import Image from "next/image";
import RecipeEssentials from "./RecipeEssentials";
import Link from "next/link";
import recipesData from "@/app/data.json";
import { useParams } from "next/navigation";

export default function Card({ isFull }) {
  const { id } = useParams();
  let data = recipesData;

  if (!isFull) {
    const remainingRecipes = recipesData.filter(
      (item) => item.id !== Number(id)
    );
    data = remainingRecipes.slice(0, 3);
  }

  return (
    <article
      className="mt-[24px] max-w-[1192px] m-auto grid
            gap-[32px]
            sm:grid-cols-2
            lg:grid-cols-3"
    >
      {data.map((item, index) => {
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
                <h1 className="text-preset-5 text-neutral-900">{item.title}</h1>
                <p className="text-preset-9 text-neutral-900">
                  {item.overview}
                </p>
                <RecipeEssentials details={item} isWide={false} />
              </div>
            </div>
            <Link
              className="border bg-neutral-900 text-white rounded-radius-full h-[48px] flex justify-center items-center text-preset-9 text-bold"
              href={`/recipe/${item.id}`}
            >
              View Recipe
            </Link>
          </div>
        );
      })}
    </article>
  );
}
