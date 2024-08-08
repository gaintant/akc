import React from "react";
import Image from "next/image";
import Link from "next/link";
import DesignBar from "../(components)/DesignBar";

export default function page() {
  return (
    <section
      id="aboutAKC"
      className="flex min-h-screen w-full flex-col items-center justify-between bg-white p-4"
    >
      <div className="relative mb-2 flex md:text-center">
        <div className="mt-8 flex min-w-[300px] flex-col items-center md:w-full">
          <p className="mb-4 flex text-xl font-bold md:max-w-[750px] md:text-3xl ">
            The Athletics Kids Cup is a competition format for children and
            adolescents based on the successful UBS Kids Cup format in
            Switzerland.
          </p>
          <p className="mb-8 flex text-lg md:max-w-[900px]">
            The UBS Kids Cup is the largest youth project in Swiss sport and is
            organised by Weltklasse Zürich, the world's most renowned athletics
            meeting of the Diamond League, and the national association Swiss
            Athletics. The Swiss athletics scene is at an all-time high. At the
            last European Championships in Rome, Switzerland won nine medals - a
            record!
          </p>
        </div>
      </div>

      {/* Big Image Below the Paragraphs */}
      <div className="mt-2 flex w-full justify-center">
        <Image
          src="/images/abc.png"
          alt="Big Image"
          width={300} // Smaller width for mobile
          height={400} // Smaller height for mobile
          className="w-full object-cover sm:w-auto sm:max-w-lg"
        />
      </div>

      {/*Design Bar */}
      <DesignBar />

      {/*DSPowerParts Para */}
      <div className="relative mb-8 mt-8 md:text-center">
        <div className="flex min-w-[300px] flex-col items-center">
          <p className="mb-4 max-w-[750px] text-xl font-bold md:text-2xl ">
            The Dspowerparts team, athletics enthusiasts from Switzerland, are
            now bringing this successful initiative to India in co-operation
            with UBS.
          </p>
          <p className="mb-8 max-w-[900px] text-lg">
            The Athletics Kids Cup is supported by numerous partners.
          </p>
        </div>
      </div>

      {/*DSPowerParts Logo */}
      <div className="flex justify-center">
        <div className="mb-4 w-full min-w-[300px] cursor-pointer rounded-2xl border-[1.5px] border-gray-700 p-4 shadow-[2px_4px_0_#12141d] transition-all md:w-[300px] ">
          <a
            href="https://dspowerparts.ch/"
            className="cursor-pointer"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/images/dspowerparts.png"
              alt="DSPOWERPARTS"
              width={264.19}
              height={48}
              className="p-4"
            />
          </a>
        </div>
      </div>

      {/* Team Details Section*/}
      <div className="relative mt-12 bg-slate-100 shadow-lg">
        <div className="container mx-auto flex flex-col p-4 md:flex-row">
          <div className="order-2 mb-4 w-full min-w-[300px] md:order-1 md:mb-0 md:ml-16 md:w-1/2 md:px-12">
            <h2 className="mb-4 text-3xl font-bold">Our team</h2>
            <p className="text-lg">
              Dspowerparts and its partners ensure that the Athletics Kids Cup
              gets children in India moving. As many athletes as possible should
              be able to have fun running, jumping and throwing.
            </p>
          </div>
          <div className="order-1 mb-4 w-full md:order-2 md:mb-0 md:w-1/2">
            <Image
              src="/images/kids.png"
              alt="Image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className="relative mt-12">
        <div className="container mx-auto p-4">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Sponsors And Partners
          </h2>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <div className="w-full min-w-[300px] md:ml-32 md:w-1/2">
              <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
                <div className="bg-[#57D081] p-6 text-xl font-bold text-[#1F2937]">
                  Main sponsor and enabler
                </div>
                <div className="min-h-[200px] bg-[#E3F7EA] p-6 font-medium text-[#1F2937] ">
                  UBS has been passionately committed to Swiss athletics for
                  over 40 years. Now the children in India are benefiting from
                  this great commitment.
                </div>
              </div>
            </div>

            <div className="w-full min-w-[300px] md:mr-32 md:w-1/2">
              <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
                <div className="bg-[#36BBFC] p-6 text-xl font-bold text-[#1F2937]">
                  Execution partner
                </div>
                <div className="min-h-[200px] bg-[#DDF3FE] p-6 font-medium text-[#1F2937] ">
                  Striders Miles is a central partner in the realisation of the
                  Athletics Kids Cup. The Striders team has supported the
                  Athletics Kids Cup from the very beginning and is the local
                  contact for all schools and ensures the smooth organisation of
                  the initiative.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Info */}
      <div className="relative my-24 px-4">
        <div className="container flex flex-col md:flex-row">
          <div className="w-full md:w-3/4">
            <h2 className="mb-2 text-2xl font-bold">
              Information for media representatives
            </h2>
            <p className="text-lg">
              We are available to media representatives at any time:  Please
              contact us via media@athleticskidscup.com
            </p>
          </div>
          <div className="md:mr-16">
            <Link href="/contactUs">
              <button className="relative mt-4 w-max cursor-pointer rounded-full border-2 border-gray-700 bg-red-500 px-6 py-3 text-base font-bold shadow-[4px_6px_0_#12141d] transition-all duration-100 ease-out hover:translate-x-0.5 hover:translate-y-[3px] hover:shadow-[2px_3px_0_#12141d] active:translate-x-1 active:translate-y-1.5 active:shadow-[1px_1px_0_#12141d] md:mt-0">
                <div className="flex flex-row">
                  <span className="text-xl font-bold">Contact Us</span>
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*Design Bar */}
      <DesignBar />
    </section>
  );
}
