import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import Button, { ButtonVariant } from "../(components)/Button";
import Link from "next/link";
import Arrow from "../(components)/Icons/Arrow";

const caveat = Caveat({ subsets: ["latin"] });

export default function page() {
  return (
    <section
      id="participation"
      className="flex min-h-screen w-full flex-col items-center justify-between bg-white p-4"
    >
      <div className="relative mt-8 w-full">
        <div className="container mx-auto flex flex-col p-4 md:flex-row">
          <div className="order-2 mb-4 w-full min-w-[300px] md:mb-0 md:mr-8 md:w-3/4 md:px-12">
            <div className="md:mt-8">
              <div className="md:mt-12">
                <h2 className="text-[2.5rem] font-semibold leading-[48px] tracking-[-0.04em]">
                  Who can participate?
                </h2>
                <div className="mt-2 md:ml-44">
                  <Image
                    src="/images/participation/blue-underline.svg"
                    width={200}
                    height={16}
                    alt="black icon"
                  />
                </div>
              </div>
              <p className="mt-6 text-lg">
                Do you want to take part in a sporting competition with your age
                group and have a lot of fun with your friends? Were you born in
                2009 or younger? Then the Athletics Kids Cup is just the thing
                for you. In the Athletics Kids Cup you compete in three
                disciplines
              </p>
              <div className="p-4">
                <ul>
                  <li className="mb-2 flex flex-row">
                  <a
                      href="pdfs/Events/AKC How to organise - 60 m sprint.pdf"
                      className="cursor-pointer flex flex-row"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        src="/images/how-it-works/red-bullet.svg"
                        width={16}
                        height={16}
                        alt="red bullet"
                      />
                      <p className="pl-4">60m Sprint</p>
                    </a>
                  </li>
                  <li className="mb-2 flex flex-row">
                    <a
                      href="pdfs/Events/AKC How to organise - long jump.pdf"
                      className="cursor-pointer flex flex-row"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        src="/images/how-it-works/blue-bullet.svg"
                        width={16}
                        height={16}
                        alt="red bullet"
                      />
                      <p className="pl-4">Long Jump</p>
                    </a>
                  </li>
                  <li className="mb-2 flex flex-row">
                    <a
                      href="pdfs/Events/AKC How to organise - ball throw.pdf"
                      className="cursor-pointer  flex flex-row"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        src="/images/how-it-works/green-bullet.svg"
                        width={16}
                        height={16}
                        alt="red bullet"
                      />
                      <p className="pl-4">Ball Throw</p>
                    </a>
                    </li>
                </ul>
              </div>
              <p className="text-lg">
                All three disciplines together give you your score. If you would
                like to take part in one of our competitions, all you have to do
                is convince the responsible persons at your school to organise
                an Athletics Kids Cup.
              </p>
            </div>
          </div>
          <div className="relative order-1 mx-auto mb-4 flex h-auto w-full flex-row sm:h-[auto] md:mb-0 md:ml-24">
            <Image
              src="/images/participation/kids-position.png"
              alt="Image"
              width={621}
              height={612}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Competition Section */}
      <div className="mb-8 mt-32">
        <div className="flex items-center justify-center">
          <div className="the-competition-bg flex min-h-[759px] w-full max-w-[1440px] items-center justify-center">
            <div className="mx-auto box-content max-w-6xl rounded-lg p-4 pt-16">
              <div className="mb-4 flex flex-col justify-between md:flex-row">
                <div className="mb-4 flex w-full flex-col items-start justify-between lg:mb-0 lg:mr-4 lg:w-1/3">
                  <div className="relative mb-4 h-64 w-full">
                    <img
                      src="/images/competitions.png"
                      alt="The Competition"
                      className="h-[10.42rem] w-[15.625rem] rounded-md object-cover"
                    />
                    <img
                      src="/images/competitons_two.png"
                      alt="Second Photo"
                      className="absolute bottom-0 left-1/2 right-0 top-3/4 h-[11.25rem] w-[11.25rem] rounded-md object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h1 className="text-left text-[1.5rem] font-semibold leading-8 tracking-tight text-gray-800">
                      Categories
                    </h1>
                    <h2
                      className={`${caveat.className} text-left font-caveat text-[4rem] font-normal leading-[4.5rem] tracking-tight text-[#1F2937]`}
                    >
                      Season 1
                    </h2>
                    <p className="mt-4 text-left text-[1rem] font-medium leading-6 tracking-tight text-gray-800">
                      The Athletics Kids Cup is organised in age categories.
                      There is one category per age group. There are rankings
                      for girls and boys.
                    </p>
                    <div className="mt-8">
                      <Link href="/howItWorks" passHref>
                        <Button
                          variant={ButtonVariant.RED}
                          className="flex items-center gap-3"
                        >
                          <span>How it works</span>
                          <Arrow className="w-5 -rotate-45" fill="#FFFFFF" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <table className="h-11/12 block w-full justify-end overflow-hidden rounded-3xl border-2 border-gray-800 bg-white shadow-[4px_6px_0_#12141d]">
                    <thead>
                      <tr className="bg-gray-800 text-left font-bold text-white">
                        <th className="h-[3.625rem] w-[15.625rem] border px-6 py-3">
                          Born in
                        </th>
                        <th className="h-[3.625rem] w-[15.625rem] border px-6 py-3">
                          Girls
                        </th>
                        <th className="h-[3.625rem] w-[15.625rem] border px-6 py-3">
                          Boys
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { year: 2009, girls: "G15", boys: "B15" },
                        { year: 2010, girls: "G14", boys: "B14" },
                        { year: 2011, girls: "G13", boys: "B13" },
                        { year: 2012, girls: "G12", boys: "B12" },
                        { year: 2013, girls: "G11", boys: "B11" },
                        { year: 2014, girls: "G10", boys: "B10" },
                        { year: 2015, girls: "G9", boys: "B9" },
                        { year: 2016, girls: "G8", boys: "B8" },
                        { year: "2017 and younger", girls: "G7*", boys: "B7" },
                      ].map((row) => (
                        <tr key={row.year} className="h-[52px] even:bg-gray-50">
                          <td className="border px-4 py-2 font-bold text-gray-800">
                            {row.year}
                          </td>
                          <td className="border px-4 py-2 font-bold text-gray-800">
                            {row.girls}
                          </td>
                          <td className="border px-4 py-2 font-bold text-gray-800">
                            {row.boys}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-6 max-w-[335px] text-left text-gray-600">
                    * In the categories G7 and B7 also younger children are
                    allowed to start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
