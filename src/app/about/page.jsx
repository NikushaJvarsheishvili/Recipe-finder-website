import Image from "next/image";
import aboutSectionsData from "@/app/aboutSectionsData.json";
import React from "react";
import CookSmarterSection from "../_components/CookSmarterSection";

export default function About() {
  console.log(aboutSectionsData);
  return (
    <>
      <section className="flex gap-[64px] justify-center py-[96px]">
        <div className="max-w-[510px] flex flex-col gap-[24px] items-start justify-center">
          <h3 className="text-preset-5 bg-orange-500 text-neutral-900 rounded-radius-6 px-[6px] py-[2px]">
            Our mission
          </h3>
          <h1 className="text-preset-2 text-neutral-900">
            Help more people cook nourishing meals, more often.
          </h1>
          <div className="flex flex-col gap-[16px]">
            <p className="text-preset-6">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p className="text-preset-6">
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
        </div>
        <div>
          <Image
            priority
            className="rounded-radius-10"
            src="/images/image-about-our-mission-large.webp"
            width={618}
            height={600}
            alt="image-about-our-mission-large"
          />
        </div>
      </section>

      {aboutSectionsData.map((section, i) => {
        return (
          <React.Fragment key={i}>
            <hr />{" "}
            <section
              className="flex justify-center gap-[154px] py-[96px]"
              key={i}
            >
              <div className="max-w-[340px]">
                <h2 className="text-preset-2 text-neutral-900">
                  {section.title}
                </h2>
              </div>
              <div>
                {section.items.map((point, j) => {
                  return (
                    <div key={j} className="max-w-[704px]">
                      <h3 className="text-preset-4 text-neutral-900 flex gap-[20px]">
                        <Image
                          priority
                          src="/images/icon-bullet-point.svg"
                          width={32}
                          height={32}
                          alt="icon-bullet-point"
                        />
                        {point.subtitle}
                      </h3>
                      <p className="pl-[55px]">{point.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>
            <hr />
          </React.Fragment>
        );
      })}
      <section className="flex gap-[84px] justify-center py-[96px]">
        <div className="max-w-[367px]">
          <h1 className="text-preset-2 text-neutral-900">Beyond the plate</h1>
          <p className="text-preset-6">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul className="list-disc list-inside mt-4 text-preset-6">
            <li>Encourage family dinners and social cooking.</li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>
        <div>
          <Image
            className="rounded-radius-20"
            priority
            src="/images/image-about-beyond-the-plate-large.webp"
            width={744}
            height={400}
            alt="image-beyond-the-plate"
          />
        </div>
      </section>
      <CookSmarterSection />
    </>
  );
}
