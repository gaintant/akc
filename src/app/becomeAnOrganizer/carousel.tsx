'use client'
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'images/organizer/image1.png',
    'images/organizer/image2.png',
    'images/organizer/image3.png',
    'images/organizer/image4.png',
    'images/organizer/image5.png',
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 1000); // Slide every 3 seconds
    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [currentIndex]);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Move entire carousel every 1 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    
    
    <div className="relative w-full flex flex-col items-center my-10">
      <div className="flex overflow-hidden w-full justify-center space-x-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-64 w-64 rounded-full bg-center bg-cover shadow-lg transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'scale-110' : 'scale-90'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.4)',
            }}
          ></div>
        //   <h4>Simple evaluation software to capture results and analyse them in top lists</h4>
        ))}
      </div>
      <div className="mt-4 flex justify-between w-1/6">
        <button
          onClick={handlePrevClick}
          className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600"
        >
          ←
        </button>
        <button
          onClick={handleNextClick}
          className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600"
        >
          →
        </button>
      </div>
    </div>

  );
};

export default Carousel;
