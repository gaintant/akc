"use client";
import React, { useState } from "react";
import { Caveat } from "next/font/google";
import Image from "next/image";

const caveat = Caveat({ subsets: ["latin"] });

interface VideoPlayerProps {
  thumbnailSrc: string;
  videoSrc: string;
  playIconSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  thumbnailSrc,
  videoSrc,
  playIconSrc,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative mx-auto w-full max-w-3xl rounded-[36px] border-2 border-gray-700 bg-[#F4F6F8] shadow-[2.16px_4.32px_0_#12141d]">
      {!isPlaying ? (
        <div className="relative">
          <Image
            src={thumbnailSrc}
            alt="Video Thumbnail"
            // TODO: Width and height to be updated as per final video
            width={1152}
            height={500}
            className="rounded-[36px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[36px] bg-black bg-opacity-40">
            <button
              onClick={handlePlay}
              className="mb-4 transform transition-transform duration-300 hover:scale-110 focus:outline-none"
            >
              <Image src={playIconSrc} alt="Play" width={75} height={75} />
            </button>
            <p className="text-xl font-semibold text-white">Watch it in</p>
            <p
              className={`${caveat.className} text-5xl font-semibold text-white`}
            >
              Action
            </p>
          </div>
        </div>
      ) : (
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full rounded-[36px]"
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
