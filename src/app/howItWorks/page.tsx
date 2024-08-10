"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DesignBar from "../(components)/DesignBar";
import ExpandableCard from "../(components)/ExpandableCard";
import Button, { ButtonVariant } from "../(components)/Button";
import Arrow from "../(components)/Icons/Arrow";

const cards = [
  {
    id: 1,
    heading: "Requirements of an Athletics Kids Cup",
    content:
      "It's as simple as that. You can now express your interest in becoming part of the " +
      "Athletics Kids Cup movement by registering your school",
  },
  {
    id: 2,
    heading: "Advantages of organising an Athletics Kids Cup",
    content:
      "We support you in organising an Athletics Kids Cup. Each school receives a ready-to-use toolkit " +
      "to orgainse its own competition. The toolkit includes",
  },
  {
    id: 3,
    heading: "Regional Finals",
    content:
      "Numerous Athletics Kids Cup competitions will be held throughout Mumbai from mid September 2024. " +
      "The best athletes will be invited to one of the five regional finals in January 2025",
  },
  {
    id: 4,
    heading: "Grand Mumbai Final",
    content:
      "The Athletics Kids Cup Grand Mumbai Final will take place on 15 February 2025 at the Jio Institute's " +
      "Athletic Center in Navi Mumbai. In which the best girls and boys in each age category can participate.",
  },
];

export default function page() {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);
  return (
    <section
      id="how-it-works"
      className="flex min-h-screen w-full flex-col items-center justify-between bg-white p-4"
    >
      {/* First component*/}
      <div className="relative mt-24 w-full">
        <div className="container mx-auto flex flex-col p-4 md:flex-row">
          <div className="order-2 mb-4 w-full min-w-[300px] md:order-1 md:mb-0 md:ml-24 md:w-3/4 md:px-12">
            <div className="md:mt-8">
              <div className="md:mt-12">
                <h2 className="text-[2.5rem] font-semibold leading-[48px] tracking-[-0.04em]">
                  How it works
                </h2>
                <div>
                  <Image
                    src="/images/svgs/green-squiggle.svg"
                    width={114.86}
                    height={16}
                    alt="black icon"
                  />
                </div>
              </div>
              <p className="mt-6 text-lg">
                The Athletics Kids Cup is a major youth project in India
                supported by UBS. The children and adolescents between the ages
                of 7 and 15 will all compete in the same three events:
              </p>
              <div className="p-4">
                <ul>
                  <li className="mb-2 flex flex-row">
                    <Image
                      src="/images/how-it-works/red-bullet.svg"
                      width={16}
                      height={16}
                      alt="red bullet"
                    />
                    <p className="pl-4">60m Sprint</p>
                  </li>
                  <li className="mb-2 flex flex-row">
                    <Image
                      src="/images/how-it-works/blue-bullet.svg"
                      width={16}
                      height={16}
                      alt="red bullet"
                    />
                    <p className="pl-4">Long Jump</p>
                  </li>
                  <li className="mb-2 flex flex-row">
                    <Image
                      src="/images/how-it-works/green-bullet.svg"
                      width={16}
                      height={16}
                      alt="red bullet"
                    />
                    <p className="pl-4">Ball Throw</p>
                  </li>
                </ul>
              </div>
              <p className="text-lg">
                We recommend that you organise the Athletics Kids Cup as your
                athletics sports day, as there are only three requirements to be
                met and you can benefit in many ways.
              </p>
            </div>
          </div>
          <div className="relative order-1 mx-auto mb-4 h-auto w-full sm:h-[auto] md:order-2 md:mb-0">
            <Image
              src="/images/how-it-works/kids-first.png"
              alt="Image"
              width={655}
              height={613}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <DesignBar />

      {/* Second Component */}
      <div className="flex w-full items-center justify-center bg-slate-300 py-24">
        <div className="flex w-full max-w-[1440px] items-center justify-center bg-cover bg-[left_224px] px-4 pb-10 lg:bg-contain lg:bg-[left_top]">
          <div className="flex w-full max-w-6xl flex-col items-center justify-around gap-6 md:flex-row">
            <div className="flex w-full max-w-[556px] justify-center">
              <Image
                src="/images/how-it-works/kids-second.png"
                alt="kids"
                width={1047}
                height={1122}
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

      {/* Third component*/}
      <div>
        <div className="mt-12">
          <img
            src="/images/how-it-works/the-competition.png"
            alt="The Competition"
            className="w-[15.625rem] rounded-md object-cover"
          />
        </div>
        <div className="mx-auto my-8 max-w-6xl p-4">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Card 1 */}
            <div className="flex w-full flex-col rounded-2xl border-2 border-gray-800 bg-white shadow-[4px_6px_0_#12141d] sm:flex-row lg:w-1/2">
              {/* Left Side - Image */}
              <div className="w-full sm:w-2/5">
                <Image
                  src="/images/how-it-works/competition-card-1.png" // Replace with your image path
                  alt="Card Image 1"
                  layout="responsive"
                  width={400} // Adjust based on your image size
                  height={476}
                  className="rounded-lg object-contain"
                />
              </div>

              {/* Right Side - Content */}
              <div className="flex w-full flex-col justify-between px-8 py-4 sm:w-3/4">
                <div>
                  <h2 className="mb-2 text-2xl font-bold">
                    Categories and rules
                  </h2>
                  <p className="mb-2 font-semibold">
                    Here you can find out everything about the categories,
                    rules, scoring and conditions of participation.
                  </p>

                  <Link href="/rulesAndCategories" passHref>
                    <Button
                      variant={ButtonVariant.GREEN}
                      className="flex items-center"
                    >
                      <span>More Info</span>
                      <Arrow className="w-5 -rotate-45" fill="#374151" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex w-full flex-col rounded-2xl border-2 border-gray-800 bg-white shadow-[4px_6px_0_#12141d] sm:flex-row lg:w-1/2">
              {/* Left Side - Image */}
              <div className="w-full sm:w-2/5">
                <Image
                  src="/images/how-it-works/competition-card-2.png" // Replace with your image path
                  alt="Card Image 2"
                  layout="responsive"
                  width={400} // Adjust based on your image size
                  height={476}
                  className="rounded-lg object-contain"
                />
              </div>

              {/* Right Side - Content */}
              <div className="flex w-full flex-col justify-between px-8 py-4 sm:w-3/4">
                <div>
                  <h2 className="mb-2 text-2xl font-bold">
                    The three disciplines
                  </h2>
                  <p className="mb-2 font-semibold">
                    Running - Jumping - Throwing: All about the disciplines in
                    the Athletics Kids Cup.
                  </p>

                  <Link href="/disciplines" passHref>
                    <Button
                      variant={ButtonVariant.CYAN}
                      className="flex items-center"
                    >
                      <span>More Info</span>
                      <Arrow className="w-5 -rotate-45" fill="#374151" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
