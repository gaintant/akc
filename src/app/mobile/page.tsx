import Image from "next/image";
import React from "react";
import PreRegistrationButtonWithModal from "../(components)/PreRegistrationButtonWithModal";

const Mobile = () => {
  return (
    <div id="home-container">
      {/* <div className="container h-[700px] w-full">
        <Image
          src="/images/three-kids-hero.png"
          alt="Athletic Kids Images"
          fill={true}
          objectFit="contain"
          quality={100}
          className="px-4"
        />
      </div> */}
      <div className="flex flex-col items-center justify-center gap-3 px-4 lg:w-1/2">
        <p className="flex h-[32px] w-[168px] items-center justify-center rounded-full bg-greyBg px-[12px] py-[6px] text-sm tracking-[2px] lg:w-[187px]">
          #WE<span className="font-bold">MOVE</span>THE
          <span className="font-bold">KIDS</span>
        </p>
        <div className="flex w-max flex-col">
          <div className="flex gap-4">
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
        <p className="max-w-[486px] text-center text-base font-medium leading-7 tracking-[-0.01em] lg:text-left">
          The Athletics Kids Cup moves the kids! The three basic movement forms
          that are required in almost every sport are the basis of this unique
          sports initiative in India. Let&apos;s move the children together and
          encourage their personal development.
        </p>
        <PreRegistrationButtonWithModal />
      </div>
    </div>
  );
};

export default Mobile;
