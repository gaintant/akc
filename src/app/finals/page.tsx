import React from "react";
import Image from "next/image";
import DesignBar from "../(components)/DesignBar";
import Link from "next/link";
import Button, { ButtonVariant } from "../(components)/Button";
import Arrow from "../(components)/Icons/Arrow";
import CityCarousel from "../(components)/CityCarousel";

export default function page() {
  return (
    <section
      id="finals"
      className="flex min-h-screen w-full flex-col items-center justify-between bg-white p-4"
    >
      <div className="relative mb-2 flex md:text-center">
        <div className="mt-8 flex min-w-[300px] flex-col items-center md:w-full">
          <p className="mb-4 flex  flex-row text-2xl font-bold md:max-w-[750px] md:text-4xl ">
            Mumbai Regional
            <span className="text-red-500">&nbsp; Finals</span>
          </p>
          <div className="">
            <Image
              src="/images/finals/finals_underline.svg"
              width={200}
              height={16}
              alt="black icon"
            />
          </div>
          <p className="mb-8 flex text-lg md:max-w-[900px]">
            As an absolute highlight, five regional finals will be held in
            January/February 2025 with the best girls and boys from the
            respective region. Participants are selected based on the region&apos;s
            top lists by a predefined deadline (10 December 2024) and also by
            direct invitation from the organiser. The regional finals are
            organised in a professional setup in a modern athletics facility
            with trained judges and equipment.
          </p>
          <div className="mt-4">
            <Link href="/finals" passHref>
              <Button
                variant={ButtonVariant.RED}
                className="flex items-center gap-3"
              >
                <span>Read More</span>
                <Arrow className="w-5 -rotate-45" fill="#FFFFFF" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Big Image Below the Paragraphs */}
      <div className="relative mx-auto h-auto w-full sm:h-[auto]">
        <Image
          src="/images/finals/city.png"
          alt="Big Image"
          width={1636}
          height={480}
          layout="responsive"
          className="object-cover"
        />
      </div>

      {/*Design Bar */}
      <DesignBar />

      {/*Regions Para */}
      <div className="relative mb-8 mt-24 md:text-center">
        <div className="flex min-w-[300px] flex-col items-center">
          <p className="mb-4 max-w-[900px] text-xl font-bold md:text-2xl ">
            The Athletics Kids Cup in Mumbai is divided into the following five
            districts.
          </p>
          <p className="mb-8 max-w-[900px] text-lg">
            Participants are automatically assigned to one of the five districts
            after registration by their school.
          </p>
        </div>
      </div>

      <CityCarousel />

      {/* Big Image Below the Paragraphs */}
      <div className="relative mx-auto my-24 h-auto w-full sm:h-[auto]">
        <Image
          src="/images/finals/map.png"
          alt="Big Image"
          width={2880}
          height={1234}
          layout="responsive"
          className="object-cover"
        />
      </div>

      <div className="relative mt-8 w-full">
        <div className="container mx-auto flex flex-col p-4 md:flex-row-reverse">
          <div className="order-2 mb-4 w-full min-w-[300px] md:mb-0 md:mr-8 md:w-3/4 md:px-12">
            <div className="sm:ml-24 md:mt-8">
              <div className="md:mt-12">
                <h2 className="text-[2.5rem] font-semibold leading-[48px] tracking-[-0.04em]">
                  Grand Mumbai Final
                </h2>
                <div className="mt-2 md:ml-8">
                  <Image
                    src="/images/finals/grand_mumbai_final_underline.svg"
                    width={200}
                    height={16}
                    alt="black icon"
                  />
                </div>
              </div>
              <p className="mt-6 text-lg">
                The best athletes from the five regional finals qualify for the
                Grand Mumbai Final. The 30 best athletes in each age category
                compete against each other. The winners of each category will be
                invited to a training camp at the Jio Institute&apos;s Athletic
                Centre and will receive tips and tricks from professional
                coaches.
              </p>
              <div className="p-4">
                <ul>
                  <li className="mb-2 flex flex-row">
                    <Image
                      src="/images/how-it-works/blue-bullet.svg"
                      width={16}
                      height={16}
                      alt="red bullet"
                    />
                    <p className="pl-4">Date: 15 February 2025</p>
                  </li>
                  <li className="mb-2 flex flex-row">
                    <Image
                      src="/images/how-it-works/green-bullet.svg"
                      width={16}
                      height={16}
                      alt="red bullet"
                    />
                    <p className="pl-4">
                      Location: Jio Institute’s Athletic Center, Navi Mumbai
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative order-1 mx-auto mb-4 flex h-auto w-full flex-row sm:h-[auto] md:mb-0 md:ml-24">
            <Image
              src="/images/finals/jio_athletic_center.png"
              alt="Image"
              width={598}
              height={474}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
