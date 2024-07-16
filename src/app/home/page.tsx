import { Caveat } from "next/font/google";
import Image from "next/image";
import Button, { ButtonVariant } from "../(components)/Button";
import Arrow from "../(components)/Icons/Arrow";

// TODO: to use caveat for cursive fonts
const caveat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <main className="w-full px-2">
        <div className="top-0 mb-2 flex flex-wrap gap-8 md:flex-nowrap">
          <div className="flex w-full flex-1 flex-col justify-center gap-12 md:w-1/2">
            <span className="flex h-[32px] w-[180px] items-center justify-center rounded-full bg-greyBg px-[12px] py-[6px] text-sm tracking-[2px]">
              #WE<span className="font-bold">MOVE</span>THE
              <span className="font-bold">KIDS</span>
            </span>
            <div className="flex w-max flex-col">
              <div className="flex gap-4">
                <span className="text-5xl font-semibold">Running</span>
                <Image
                  src="/images/svgs/rjt-orange.svg"
                  width={35.4}
                  height={33.52}
                  alt="orange icon"
                />
                <span className="text-5xl font-semibold">Jumping</span>
              </div>
              <div className="flex justify-center gap-4">
                <Image
                  src="/images/svgs/rjt-left.svg"
                  width={29.38}
                  height={28.71}
                  alt="black icon"
                />
                <span className="text-5xl font-semibold">Throwing</span>
                <Image
                  src="/images/svgs/rjt-right.svg"
                  width={29.45}
                  height={28.78}
                  alt="black icon"
                />
              </div>
            </div>
            <p className="max-w-[479px] text-base font-medium tracking-[-0.01em] leading-7">
              The Athletics Kids Cup moves the kids! The three basic movement
              forms that are required in almost every sport are the basis of
              this unique sports initiative in India. Let&apos;s move the
              children together and encourage their personal development.
            </p>
            <Button variant={ButtonVariant.RED} className="flex gap-3 items-center">
              <span>Pre-register your school</span>
              <Arrow className="w-5 -rotate-45" fill="white" />
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
      <div
        className="w-full h-16"
        style={{
          backgroundImage: "url('/images/design-bar.png')",
          backgroundSize: "auto 100%",
        }}
      ></div>
    </div>
  );
}
