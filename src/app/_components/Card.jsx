"use client";

import Image from "next/image";
import RecipeEssentials from "./RecipeEssentials";
import Link from "next/link";
import recipesData from "@/app/data.json";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Card({ isFull }) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!isFull) {
      function generateThreeUniqueNumber() {
        const randomNumberArr = [];
        while (randomNumberArr.length < 3) {
          const randomNumber =
            Math.floor(Math.random() * recipesData.length) + 1;
          if (
            !randomNumberArr.includes(randomNumber) &&
            randomNumber !== Number(id)
          ) {
            randomNumberArr.push(randomNumber);
          }
        }
        return randomNumberArr;
      }

      const randomIds = generateThreeUniqueNumber();
      const filtered = recipesData.filter((item) =>
        randomIds.includes(item.id)
      );
      setData(filtered);
    } else {
      setData(recipesData);
    }
  }, [isFull, id]);
  console.log(data);

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
                priority
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
