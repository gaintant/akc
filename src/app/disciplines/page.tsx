import React from "react";
import Image from "next/image";
import DesignBar from "../(components)/DesignBar";
import Button, { ButtonVariant } from "../(components)/Button";
import Link from "next/link";
import Arrow from "../(components)/Icons/Arrow";

export default function page() {
  return (
    <section>
      <div className="relative mb-2 flex md:text-center">
        <div className="mt-8 flex min-w-[300px] flex-col items-center md:w-full">
          <p className="font-gray-900 flex text-2xl">The three disciplines</p>
          <div className="flex w-max flex-col py-6">
            <div className="flex justify-between gap-3 md:gap-4">
              <h1 className="text-3xl font-semibold lg:text-4xl">Running</h1>
              <Image
                src="/images/svgs/rjt-orange.svg"
                width={35.4}
                height={33.52}
                alt="orange icon"
              />
              <h1 className="text-3xl font-semibold lg:text-4xl">Jumping</h1>
            </div>
            <div className="flex justify-center gap-4">
              <Image
                src="/images/svgs/rjt-left.svg"
                width={29.38}
                height={28.71}
                alt="black icon"
              />
              <h1 className="text-3xl font-semibold lg:text-4xl">Throwing</h1>
              <Image
                src="/images/svgs/rjt-right.svg"
                width={29.45}
                height={28.78}
                alt="black icon"
              />
            </div>
          </div>
          <p className="mb-8 flex text-lg md:max-w-[750px]">
            Every child knows these three forms of movement just from playing
            with their friends. They are required in almost every sport and are
            practised and perfected in athletics.
          </p>
        </div>
      </div>

      {/* Big Image Below the discipline Paragraphs */}
      <div className="relative mx-auto mt-2 h-auto w-full px-32 py-4 sm:h-[auto]">
        <Image
          src="/images/disciplines/discipline-1.png"
          alt="Big Image"
          width={1152}
          height={358}
          layout="responsive"
          className="object-cover"
        />
      </div>

      <div className="my-16">
        <DesignBar />
      </div>

      {/*para and button*/}
      <div className="relative mb-8 md:text-center">
        <div className="flex min-w-[300px] flex-col items-center">
          <div className="mb-4 flex max-w-[900px] text-xl font-bold md:text-2xl ">
            The Athletics Kids Cup is a triathlon consisting of the following
            disciplines
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="relative m-4 cursor-pointer rounded-full border-2 border-gray-700 bg-red-200 px-6 py-3 text-base font-bold shadow-[4px_6px_0_#12141d] transition-all duration-100 ease-out hover:translate-x-0.5 hover:translate-y-[3px] hover:shadow-[2px_3px_0_#12141d] active:translate-x-1 active:translate-y-1.5 active:shadow-[1px_1px_0_#12141d]">
              Sprint 60m - 1 attempt
            </div>
            <div className="relative m-4 cursor-pointer rounded-full border-2 border-gray-700 bg-blue-200 px-6 py-3 text-base font-bold shadow-[4px_6px_0_#12141d] transition-all duration-100 ease-out hover:translate-x-0.5 hover:translate-y-[3px] hover:shadow-[2px_3px_0_#12141d] active:translate-x-1 active:translate-y-1.5 active:shadow-[1px_1px_0_#12141d]">
              Long Jump with Zone Jump - 3 attempts
            </div>
            <div className="relative m-4 cursor-pointer rounded-full border-2 border-gray-700 bg-green-200 px-6 py-3 text-base font-bold shadow-[4px_6px_0_#12141d] transition-all duration-100 ease-out hover:translate-x-0.5 hover:translate-y-[3px] hover:shadow-[2px_3px_0_#12141d] active:translate-x-1 active:translate-y-1.5 active:shadow-[1px_1px_0_#12141d]">
              Ball Throw 200 g - 3 attempts
            </div>
          </div>
        </div>
      </div>

      {/* Three similar para back to back - will create a separate component later for this */}
      <div>
        {/* Para 1 */}
        <div className="relative my-8 mt-8 w-full">
          <div className="container mx-auto flex flex-col p-4 md:flex-row-reverse">
            <div className="order-2 mb-4 w-full min-w-[300px] md:mb-0 md:mr-8 md:w-3/4 md:px-12">
              <div className="md:mt-8">
                <div className="md:mt-12">
                  <h2 className="text-[2.5rem] font-semibold leading-[48px] tracking-[-0.04em]">
                    Sprint 60 m
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
                  Whether you use the low start, as the pros do, or the "easier"
                  high start. The objective is clear: sprint to the finish line
                  as fast as possible! Attention: Don't start too early! Anyone
                  can make a false start. But if anyone starts a second time
                  before the starting signal, unfortunately they will be
                  disqualified.
                </p>
                <div className="mt-8">
                  <Link href="/disciplines" passHref>
                    <Button
                      variant={ButtonVariant.RED}
                      className="flex items-center gap-3"
                    >
                      <span>How to Sprint</span>
                      <Arrow className="w-5 -rotate-45" fill="#FFFFFF" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative order-1 mx-auto mb-4 flex h-auto w-full flex-row sm:h-[auto] md:mb-0 md:ml-24">
              <Image
                src="/images/disciplines/discipline-2.png"
                alt="Image"
                width={600}
                height={610}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Para 2 */}
        <div className="relative my-8 mt-8 w-full">
          <div className="container mx-auto flex flex-col p-4 md:flex-row">
            <div className="order-2 mb-4 w-full min-w-[300px] md:mb-0 md:mr-8 md:w-3/4 md:px-12">
              <div className="md:mt-8">
                <div className="md:mt-12">
                  <h2 className="text-[2.5rem] font-semibold leading-[48px] tracking-[-0.04em]">
                    Long jump with zone jump
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
                  The children take a running start, jump within an
                  80-centimetre-wide zone and fly as far as they can through the
                  air! The long jump is all about jumping power. Don't worry:
                  nobody has to hit the take-off bar exactly like the pros. The
                  jump is measured from where the athlete took off - as long as
                  this is done within the 80 centimetre wide, marked zone.
                </p>
                <div className="mt-8">
                  <Link href="/disciplines" passHref>
                    <Button
                      variant={ButtonVariant.CYAN}
                      className="flex items-center gap-3"
                    >
                      <span>How to Jump</span>
                      <Arrow className="w-5 -rotate-45" fill="#FFFFFF" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative order-1 mx-auto mb-4 flex h-auto w-full flex-row sm:h-[auto] md:mb-0 md:ml-24">
              <Image
                src="/images/disciplines/discipline-3.png"
                alt="Image"
                width={600}
                height={610}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Para 3 */}
        <div className="relative my-8 mt-8 w-full">
          <div className="container mx-auto flex flex-col p-4 md:flex-row-reverse">
            <div className="order-2 mb-4 w-full min-w-[300px] md:mb-0 md:mr-8 md:w-3/4 md:px-12">
              <div className="md:mt-8">
                <div className="md:mt-12">
                  <h2 className="text-[2.5rem] font-semibold leading-[48px] tracking-[-0.04em]">
                    Ball throw 200g
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
                  The ball weighs 200 grams and must be thrown as far as
                  possible through the air. As with the long jump, the athlete
                  should take a few steps before throwing the ball with full
                  momentum.
                </p>
                <div className="mt-8">
                  <Link href="/disciplines" passHref>
                    <Button
                      variant={ButtonVariant.GREEN}
                      className="flex items-center gap-3"
                    >
                      <span>How to Throw</span>
                      <Arrow className="w-5 -rotate-45" fill="#FFFFFF" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative order-1 mx-auto mb-4 flex h-auto w-full flex-row sm:h-[auto] md:mb-0 md:ml-24">
              <Image
                src="/images/disciplines/discipline-4.png"
                alt="Image"
                width={600}
                height={610}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
