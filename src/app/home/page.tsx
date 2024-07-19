import Image from "next/image";
import { ButtonVariant } from "../(components)/Button";
import DiamondButton from "../(components)/DiamondButton";
import Arrow from "../(components)/Icons/Arrow";
import ValueProposition from "../(components)/ValueProposition";
import VideoPlayer from "../(components)/VideoPlayer";
import HowItWorks from "../how-it-works/page";
import PreRegistrationButtonWithModal from "../(components)/PreRegistrationButtonWithModal";
import StaircaseCards from '../(components)/StaircaseCards';

export default function Home() {
  return (
    <div id="home-container" className="min-h-screen w-full bg-white">
      <main id="home" className="w-full px-2">
        <div className="top-0 mb-2 flex flex-wrap gap-8 md:flex-nowrap">
          <div className="flex w-full flex-1 flex-col justify-center gap-12 md:w-1/2">
            <span className="flex h-[32px] w-[180px] items-center justify-center rounded-full bg-greyBg px-[12px] py-[6px] text-sm tracking-[2px]">
              #WE<span className="font-bold">MOVE</span>THE
              <span className="font-bold">KIDS</span>
            </span>
            <div className="flex w-max flex-col">
              <div className="flex gap-4">
                <h1 className="text-5xl font-semibold">Running</h1>
                <Image
                  src="/images/svgs/rjt-orange.svg"
                  width={35.4}
                  height={33.52}
                  alt="orange icon"
                />
                <h1 className="text-5xl font-semibold">Jumping</h1>
              </div>
              <div className="flex justify-center gap-4">
                <Image
                  src="/images/svgs/rjt-left.svg"
                  width={29.38}
                  height={28.71}
                  alt="black icon"
                />
                <h1 className="text-5xl font-semibold">Throwing</h1>
                <Image
                  src="/images/svgs/rjt-right.svg"
                  width={29.45}
                  height={28.78}
                  alt="black icon"
                />
              </div>
            </div>
            <p className="max-w-[486px] text-base font-medium leading-7 tracking-[-0.01em]">
              The Athletics Kids Cup moves the kids! The three basic movement
              forms that are required in almost every sport are the basis of
              this unique sports initiative in India. Let&apos;s move the
              children together and encourage their personal development.
            </p>
            <PreRegistrationButtonWithModal />
          </div>
          <div className="top-0 mb-2 mt-[-50px] flex w-full flex-1 flex-wrap items-center justify-center gap-4 md:w-1/2">
            <div className="relative mr-2 h-[700px] w-full">
              <Image
                src="/images/three-kids-hero.png"
                alt="Athletic Kids Images"
                fill={true}
                objectFit="contain"
                quality={100}
              />
            </div>
          </div>
        </div>
      </main>

      <div className="relative h-16 w-full">
        <div className="design-bar absolute left-0 right-0 h-16"></div>
      </div>

      <section id="how-it-works" className="flex flex-col gap-8">
        <div className="mt-16 flex flex-col items-center gap-[0.125rem]">
          <h2 className="text-[2.5rem] font-semibold leading-[48px] tracking-[-0.04em]">
            How it works
          </h2>
          <Image
            src="/images/svgs/green-squiggle.svg"
            width={114.86}
            height={16}
            alt="black icon"
          />
        </div>
        <div className="how-it-works-bg h-[900px]">
          <HowItWorks />
        </div>
      </section>

      <section id="the-competition" className="mt-20">
        <div className="the-competition-bg h-[900px]">
          {/* TODO: The Competition Content */}
        </div>
      </section>
      <section id="the-cards" className="mt-20">
      <div >
      <StaircaseCards />
    </div>
      </section>
      <section>{/* TODO: The Tables */}</section>

      <section id="pre-registration">
        <div className="relative flex h-[370px]">
          <div className="ribbon-down absolute top-0 h-full w-full"></div>
          <div className="ribbon-up absolute top-[100px] h-full w-full"></div>
          <div className="mt-[59.51px] flex flex-1 justify-center">
            <DiamondButton variant={ButtonVariant.RED}>
              <span>Pre-register your school</span>
              <Arrow className="w-5 -rotate-45" fill="white" />
            </DiamondButton>
          </div>
        </div>
      </section>

      <section id="value-proposition" className="mt-8">
        <ValueProposition />
      </section>

      <section id="akc-video" className="my-12">
        <VideoPlayer
          thumbnailSrc="/images/Athletics_Kids_Cup_Mumbai.png"
          videoSrc="/videos/sample_vid.webm"
          playIconSrc="/images/svgs/vid-play-button.svg"
        />
      </section>

      <section id="contact-us">
        <div className="contact-us-bg h-[306px]">
          {/* TODO: Contact Us Content */}
        </div>
      </section>
    </div>
  );
}
