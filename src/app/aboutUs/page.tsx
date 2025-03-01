import React from "react";
import Image from "next/image";
import Link from "next/link";
import DesignBar from "../(components)/DesignBar";
import Button, { ButtonVariant } from "../(components)/Button";
import Arrow from "../(components)/Icons/Arrow";
import ImageMapComponent from "./TeamImage";

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
            The Dspowerparts team, athletics enthusiasts from Switzerland, in co-operation with UBS India, are now bringing a similar initiative to India.
            The Athletics Kids Cup is a standalone initiative tailored to the country&apos;s unique situation.
          </p>
        </div>
      </div>

      {/* Big Image Below the Paragraphs */}
      <div className="relative mx-auto mt-2 h-auto w-full sm:h-[auto]">
        <Image
          src="/images/about-akc/run-kids.png"
          alt="Big Image"
          width={2873}
          height={731}
          layout="responsive"
          className="object-cover"
        />
      </div>

      {/*Design Bar */}
      <DesignBar />

      {/* DSPowerParts Para
      <div className="relative mb-8 mt-8 md:text-center">
        <div className="flex min-w-[300px] flex-col items-center">

          <p className="mb-8 max-w-[900px] text-lg">
            The Athletics Kids Cup is supported by numerous partners.
          </p>
        </div>
      </div> */}

      {/*DSPowerParts Logo */}
      <div className="flex justify-center">
        <div className="mb-4 w-full min-w-[300px] cursor-pointer rounded-2xl border-[1.5px] border-gray-700 p-4 shadow-[2px_4px_0_#12141d] transition-all md:w-[300px] ">
          <a
            href="https://dspowerparts.ch/dspowerparts-sports/"
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
      <div className="relative mt-24 w-full bg-slate-100">
        <div className="container mx-auto flex flex-col p-4 md:flex-row">
          <div className="order-2 mb-4 w-full min-w-[300px] md:order-1 md:mb-0 lg:ml-24 md:w-1/2 md:px-12 ">
            <div className="max-w-[450px] md:mt-8">
              <div className="md:mt-12">
                <h2 className="text-4xl font-bold">Our team</h2>
                <div>
                  <Image
                    src="/images/svgs/our-team-underline.svg"
                    width={150}
                    height={16}
                    alt="black icon"
                  />
                </div>
              </div>
              <p className="mt-6 text-lg">
                Dspowerparts and its partners ensure that the Athletics Kids Cup
                gets children in India moving.
              </p>
              <p className="mt-4 text-lg">
                As many atheltes as possible should be able to have fun running,
                jumping and throwing.
              </p>
            </div>
          </div>
          <div className="relative order-1 mb-4 h-auto w-full sm:h-auto md:order-2 
          md:mb-0 lg:ml-48 md:ml-24 mx-auto flex items-center min-w-[300px] justify-center flex-col">
            <ImageMapComponent />
            {/* <figcaption className="text-center text-sm text-gray-700">
              <b>Our Team</b>
            </figcaption> */}
            <figcaption className="text-center text-sm text-gray-700 flex flex-row">
              <a href="https://www.linkedin.com/in/zahir-khan1" className="flex items-center space-x-1">
                <img src="images/about-akc/linkedin-svgrepo-com (1).svg" width={20} height={20} /><b>Zahir Khan</b>&nbsp;&nbsp;
              </a>
              <a href="https://www.linkedin.com/in/danielschenker" className="flex items-center space-x-1">
                <img src="images/about-akc/linkedin-svgrepo-com (1).svg" width={20} height={20} /><b>Daniel Schenker</b>&nbsp;&nbsp;
              </a>
              <a href="https://www.linkedin.com/in/runschelbi" className="flex items-center space-x-1">
                <img src="images/about-akc/linkedin-svgrepo-com (1).svg" width={20} height={20} /><b>Andreas Cueni</b>&nbsp;&nbsp;
              </a>
              <a href="https://www.linkedin.com/in/dr-anup-nastik-7b8ba6155" className="flex items-center space-x-1">
                <img src="images/about-akc/linkedin-svgrepo-com (1).svg" width={20} height={20} /><b>Dr. Anup Nastik</b>&nbsp;&nbsp;
              </a>
            </figcaption>
          </div>

        </div>
      </div>

      <div className="relative mt-12">
        <div className="container mx-auto p-4">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Sponsors And Partners
          </h2>
          <div className="flex justify-center gap-6 md:flex-row">
            <div className="flex-1 w-full min-w-[300px] md:ml-32 md:w-1/2">
              <div className="h-full overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d] flex flex-col">
                <div className="bg-[#57D081] p-6 text-xl font-bold text-[#1F2937]">
                  Main sponsor and enabler
                </div>
                <div className="min-h-[242px] bg-[#E3F7EA] p-6 font-medium text-[#1F2937] flex-grow flex flex-col">
                  <div className="mb-4 flex justify-center">
                    <a
                      href="https://www.ubs.com/"
                      className="cursor-pointer"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        src="/images/about-akc/ubs-logo.png"
                        alt="Image"
                        width={249}
                        height={90}
                        className="object-cover"
                      />
                    </a>
                  </div>
                  UBS is committed to drive sustainable social impact among its communities with a focus on enabling children and young adults to achieve their potential through catalytic interventions around education, wellbeing and the environment.
                </div>
              </div>
            </div>

            <div className="flex-1 w-full min-w-[300px] md:mr-32 md:w-1/2">
              <div className="h-full overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d] flex flex-col">
                <div className="bg-[#36BBFC] p-6 text-xl font-bold text-[#1F2937]">
                  Execution partner
                </div>
                <div className="min-h-[200px] bg-[#DDF3FE] p-6 font-medium text-[#1F2937] flex-grow flex flex-col">
                  <div className="mb-2 flex justify-center">
                    <a
                      href="https://stridersevents.in/"
                      className="cursor-pointer"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        src="/images/about-akc/striders-logo.png"
                        alt="Image"
                        width={249}
                        height={90}
                        className="object-cover"
                      />
                    </a>
                  </div>
                  Striders Miles is a central partner in the realisation of the Athletics Kids Cup. The Striders team has supported the Athletics Kids Cup from the very beginning and is the local contact for all schools and ensures the smooth organisation of the initiative.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Us Info */}
      <div className="relative my-24 px-4">
        <div className="container flex flex-col md:flex-row">
          <div className="mb-2 w-full md:w-3/4">
            <h2 className="mb-2 text-2xl font-bold">
              Information for media representatives
            </h2>
            <p className="mb-2 text-lg">
              We are available to media representatives at any time:  Please
              contact us via <a href="mailto:media@athleticskidscup.com" style={{ textDecoration: 'underline' }}>media@athleticskidscup.com</a>
            </p>
          </div>
          <div className="md:mr-16">
            <Link href="/contactUs" passHref className="mt-2">
              <Button
                variant={ButtonVariant.RED}
                className="flex items-center gap-3"
              >
                <span>Contact Us</span>
                <Arrow className="w-5 -rotate-45" fill="#FFFFFF" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/*Design Bar */}
      <DesignBar />
    </section>
  );
}
