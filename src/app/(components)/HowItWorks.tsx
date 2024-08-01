"use client";
import Image from "next/image";
import { useState } from "react";
import ExpandableCard from "./ExpandableCard";

const cards = [
  {
    id: 1,
    heading: "Overview",
    content:
      "The Athletics Kids Cup is a major youth project in India supported by UBS. " +
      "The children and adolescents between the ages of 7 and 15 will all compete in " +
      "the same three events: 60m sprint, long jump and ball throw. We recommend that you " +
      "organize the Athletics Kids Cup as your athletics sports day, as there are only three " +
      "requirements to met and you can benefit in many ways.",
  },
  {
    id: 2,
    heading: "Requirements of an Athletics Kids Cup",
    content:
      "It's as simple as that. You can now express your interest in becoming part of the " +
      "Athletics Kids Cup movement by pre-registering your school. We will then inform you " +
      "as soon as registration for an event organised by you is possible.",
  },
  {
    id: 3,
    heading: "Advantages of organising an Athletics Kids Cup",
    content:
      "We support you in organising an Athletics Kids Cup. Each school receives a ready-to-use toolkit " +
      "to orgainse its own competition. The toolkit includes",
  },
  {
    id: 4,
    heading: "Regional Finals",
    content:
      "Numerous Athletics Kids Cup competitions will be held throughout Mumbai from mid September 2024. " +
      "The best athletes will be invited to one of the five regional finals in January 2025",
  },
  {
    id: 5,
    heading: "Grand Mumbai Final",
    content:
      "The Athletics Kids Cup Grand Mumbai Final will take place on 15 February 2025 at the Jio Institute's " +
      "Athletic Center in Navi Mumbai. In which the best girls and boys in each age category can participate.",
  },
];

const HowItWorks = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);
  return (
    <section id="how-it-works" className="flex w-full flex-col gap-8">
      <div className="mt-16 flex flex-col items-center gap-[0.125rem]">
        <h2 className="text-[2.5rem] font-semibold leading-[48px] tracking-[-0.04em]">
          How it works
        </h2>
        <Image
          src="/images/svgs/green-squiggle.svg"
          width={114.86}
          height={16}
          alt="black icon"
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="how-it-works-bg flex min-h-[900px] w-full max-w-[1440px] items-center justify-center bg-[left_224px] px-4 pb-10 bg-cover lg:bg-contain lg:bg-[left_top]">
          <div className="flex w-full max-w-6xl flex-col items-center justify-around gap-6 lg:flex-row-reverse">
            <div className="flex w-full max-w-[556px] justify-center">
              <Image
                src="/images/kids.png"
                alt="kids"
                width={343}
                height={378}
                layout="responsive"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              {cards.map((card) => (
                <ExpandableCard
                  key={card.id}
                  heading={card.heading}
                  content={card.content}
                  isExpanded={expandedCard === card.id}
                  onClick={() =>
                    setExpandedCard(expandedCard === card.id ? null : card.id)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
