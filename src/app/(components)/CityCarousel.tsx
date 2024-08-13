"use client";
import { useRef } from "react";
import Image from "next/image";

const CityCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const cityImagesPaths = [
    "/images/finals/mumbai_city.png",
    "/images/finals/mumbai_suburb.png",
    "/images/finals/thane.png",
    "/images/finals/palghar.png",
    "/images/finals/raigad.png",
  ];

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex overflow-x-scroll"
      >
        {cityImagesPaths.map((cityPath, index) => (
          <div className="flex w-full flex-shrink-0 justify-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Image
              key={index}
              src={cityPath}
              alt="Image 1"
              width={151}
              height={161}
              className="m-4 object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-gray-800 p-2 text-white opacity-50 hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-gray-800 p-2 text-white opacity-50 hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default CityCarousel;
