"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DesignBar from "../(components)/DesignBar";
import ExpandableCard from "../(components)/ExpandableCard";
import Button, { ButtonVariant } from "../(components)/Button";
import Arrow from "../(components)/Icons/Arrow";
import PreRegistrationForm from "../(components)/PreRegistrationForm";
import OrganisationalMaterial from "../(components)/becomeanorganiser3";
import Carousel from "../(components)/carousel";
export default function NewHowItWorks() {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);

  return (
    <section
      id="how-it-works"
      className="flex min-h-screen w-full flex-col items-center justify-between bg-white p-4"
    >
      {/* First component */}
      <div className="relative mt-24 w-full">
        <div className="container mx-auto flex flex-col-reverse p-4 md:flex-row">
          <div className="order-2 mb-4 w-full min-w-[300px] md:order-1 md:mb-0 md:ml-24 md:w-3/4 md:px-12">
            <div className="md:mt-8">
              <div className="md:mt-12">
                <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-tight md:leading-[48px] tracking-[-0.04em]">
                  How easy it is to organise an Athletics Kids Cup
                </h2>
                <div className="mt-4 md:mt-6">
                  <Image
                    src="images/becomeanorganizer/redzigzag.svg"
                    width={325}
                    height={15.39}
                    alt="red zigzag line"
                  />
                </div>
              </div>
              <p className="mt-6 text-base md:text-lg">
                We offer an unbeatably attractive package for all schools that
                want to get their students moving. Through the Athletics Kids
                Cup, we provide the ideal platform for children to build and
                strengthen their character, values, integrity, mutual respect,
                and personal discipline. We inspire them to get the best out of
                themselves and to pursue their own ambitious goals.
              </p>
              <div className="py-6 md:py-12">
                <PreRegistrationForm />
              </div>
            </div>
          </div>
          <div className="relative order-1 mx-auto mb-4 w-full sm:h-[auto] md:order-2 md:mb-0">
            <Image
              src="/images/becomeanorganizer/become-an-organizer-1.png"
              alt="Become an Organizer"
              width={600}
              height={610}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <DesignBar />
      <Carousel />
      <OrganisationalMaterial />

      {/* Third component */}
      <div className="w-full">
        <div className="mt-12 flex justify-center">
          <img
            src="/images/how-it-works/the-competition.png"
            alt="The Competition"
            className="w-3/4 md:w-[15.625rem] rounded-md object-cover"
          />
        </div>
        <div className="mx-auto my-8 max-w-6xl p-4">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Card 1 */}
            <div className="flex w-full flex-col rounded-2xl border-2 border-gray-800 bg-white shadow-[4px_6px_0_#12141d] sm:flex-row lg:w-1/2">
              {/* Left Side - Image */}
              <div className="w-full sm:w-2/5">
                <Image
                  src="/images/how-it-works/competition-card-1.png"
                  alt="Card Image 1"
                  layout="responsive"
                  width={400}
                  height={476}
                  className="rounded-lg object-contain"
                />
              </div>

              {/* Right Side - Content */}
              <div className="flex w-full flex-col justify-between px-4 py-4 md:px-8 sm:w-3/4">
                <div>
                  <h2 className="mb-2 text-xl md:text-2xl font-bold">
                    Categories and rules
                  </h2>
                  <p className="mb-2 text-sm md:text-base font-semibold">
                    Here you can find out everything about the categories, rules,
                    scoring, and conditions of participation.
                  </p>

                  <Link href="/rulesAndCategories" passHref>
                    <Button
                      variant={ButtonVariant.GREEN}
                      className="flex items-center gap-3 mt-4"
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
                  src="/images/how-it-works/competition-card-2.png"
                  alt="Card Image 2"
                  layout="responsive"
                  width={400}
                  height={476}
                  className="rounded-lg object-contain"
                />
              </div>

              {/* Right Side - Content */}
              <div className="flex w-full flex-col justify-between px-4 py-4 md:px-8 sm:w-3/4">
                <div>
                  <h2 className="mb-2 text-xl md:text-2xl font-bold">
                    The three disciplines
                  </h2>
                  <p className="mb-2 text-sm md:text-base font-semibold">
                    Running - Jumping - Throwing: All about the disciplines in
                    the Athletics Kids Cup.
                  </p>

                  <Link href="/disciplines" passHref>
                    <Button
                      variant={ButtonVariant.CYAN}
                      className="flex items-center gap-3 mt-4"
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
