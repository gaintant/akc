import React from "react";
import HeroSection from "./(components)/HeroSection";
import DesignBar from "./(components)/DesignBar";
import HowItWorks from "./(components)/HowItWorks";
import TheCompetition from "./(components)/TheCompetition";
import StaircaseSection from "./(components)/StaircaseSection";
import PreRegistration from "./(components)/PreRegistration";
import ValueProposition from "./(components)/ValueProposition";
import VideoPlayer from "./(components)/VideoPlayer";
import ContactUs from "./(components)/ContactUs";
import KnowMoreAboutUs from "./(components)/KnowMoreAboutUs";

const Mobile = () => {
  return (
    <div id="home-container" className="w-full">
      <HeroSection />
      <DesignBar />
      <HowItWorks />
      <TheCompetition />
      <StaircaseSection />
      <PreRegistration />
      <ValueProposition />
      <VideoPlayer
        thumbnailSrc="/images/Athletics_Kids_Cup_Mumbai.png"
        videoSrc="/videos/AKC_video.mp4"
        playIconSrc="/images/svgs/vid-play-button.svg"
      />
      <KnowMoreAboutUs />
      <ContactUs />
    </div>
  );
};

export default Mobile;
