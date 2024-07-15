// pages/index.js
import Head from "next/head";
import { Caveat } from "next/font/google";
import Image from "next/image";
import Button, { ButtonVariant } from "../(components)/Button";
import Arrow from "../(components)/Icons/Arrow";
const caveat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Head>
        <title>Athletics Kids Cup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full px-2">
        <header className="top-0 mb-2 mt-[-50px] flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/AKCLogo_ALt.png"
              alt="Athletics Kids Cup Logo"
              className="mr-2 h-56 "
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-lightFont sm:text-base">
              Enabled by
            </span>
            <img
              src="/images/ubs-logo.png"
              alt="UBS Logo"
              className="mr-2 inline h-8"
            />
          </div>
        </header>

        <div className="top-0 mb-2 mt-[-50px] flex flex-wrap gap-8 md:flex-nowrap">
          <div className="flex w-full flex-1 flex-col justify-center gap-12 md:w-1/2">
            <span className="flex h-[32px] w-[180px] items-center justify-center rounded-full bg-greyBg px-[12px] py-[6px] text-sm tracking-[2px]">
              #WE<span className="font-bold">MOVE</span>THE
              <span className="font-bold">KIDS</span>
            </span>
            <div className="flex flex-col w-max">
              <div className="gap-4 flex">
                <span className="text-5xl">Running</span>
                <Image
                  src="/images/svgs/rjt-orange.svg"
                  width={35.4}
                  height={33.52}
                  alt="orange icon"
                />
                <span className="text-5xl">Jumping</span>
              </div>
              <div className="gap-4 flex justify-center">
                <Image
                  src="/images/svgs/rjt-left.svg"
                  width={35.4}
                  height={33.52}
                  alt="black icon"
                />
                <span className="text-5xl">Throwing</span>
                <Image
                  src="/images/svgs/rjt-right.svg"
                  width={35.4}
                  height={33.52}
                  alt="black icon"
                />
              </div>
            </div>
            <p className="max-w-[479px] text-base tracking-[-0.02em] text-lightFont">
              The Athletics Kids Cup moves the kids! The three basic movement
              forms that are required in almost every sport are the basis of
              this unique sports initiative in India. Let&apos;s move the
              children together and encourage their personal development.
            </p>
            <Button variant={ButtonVariant.RED} className="flex gap-3">
              <span>Pre-register your school</span>
              <Arrow className="w-6 -rotate-45" fill="white" />
            </Button>
          </div>
          <div className="top-0 mb-2 mt-[-50px] flex w-full flex-1 flex-wrap items-center justify-center gap-4 md:w-1/2">
            <div className="relative mr-2 h-[700px] w-full">
              <Image
                src="/images/three-kids-hero.png"
                alt="Athletic Kids Images"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          </div>
        </div>
      </main>
      <div className="">
        <img
          src="/images/design-bar.png"
          alt="Design bar"
          className="my-20 h-16 w-full"
        />
      </div>
    </div>
  );
}
