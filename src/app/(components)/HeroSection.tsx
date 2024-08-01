import Image from "next/image";

import PreRegistrationForm from "./PreRegistrationForm";

const HeroSection = () => {
  return (
    <main id="home" className="flex w-full items-center justify-center">
      <div className="box-content flex w-full max-w-6xl flex-col gap-2 px-4 pt-0 md:flex-row-reverse lg:gap-20">
        {/* // TODO: fix horizontal overflow because of the image on smaller scrrens */}
        <div className="flex flex-1 justify-center px-2">
          <div className="flex max-w-[486px] flex-1 justify-center lg:max-w-[570px]">
            <Image
              src="/images/three-kids-hero.png"
              alt="Athletic Kids Images"
              layout="responsive"
              width={327}
              height={397.4}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-0 py-8 md:items-start md:gap-6">
          <p className="flex h-[32px] items-center justify-center rounded-full bg-greyBg px-[12px] py-[6px] text-sm tracking-[2px]">
            #WE<span className="font-bold">MOVE</span>THE
            <span className="font-bold">KIDS</span>
          </p>
          <div className="flex w-max flex-col">
            <div className="flex justify-between gap-3 md:gap-4">
              <h1 className="text-4xl font-semibold lg:text-5xl">Running</h1>
              <Image
                src="/images/svgs/rjt-orange.svg"
                width={35.4}
                height={33.52}
                alt="orange icon"
              />
              <h1 className="text-4xl font-semibold lg:text-5xl">Jumping</h1>
            </div>
            <div className="flex justify-center gap-4">
              <Image
                src="/images/svgs/rjt-left.svg"
                width={29.38}
                height={28.71}
                alt="black icon"
              />
              <h1 className="text-4xl font-semibold lg:text-5xl">Throwing</h1>
              <Image
                src="/images/svgs/rjt-right.svg"
                width={29.45}
                height={28.78}
                alt="black icon"
              />
            </div>
          </div>
          <p className="max-w-[486px] text-center text-base font-medium leading-7 tracking-[-0.01em] md:text-left">
            The Athletics Kids Cup moves the kids! The three basic movement
            forms that are required in almost every sport are the basis of this
            unique sports initiative in India. Let&apos;s move the children
            together and encourage their personal development.
          </p>
          <div className="py-10 md:py-12">
            <PreRegistrationForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
