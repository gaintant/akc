'use client';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      image: '/images/organizer/image1.png',
      text: 'Another service description',
    },
    {
      image: '/images/organizer/image2.png',
      text: 'Simple evaluation software to capture results and analyze them in top lists',
    },
    {
      image: '/images/organizer/image3.png',
      text: 'Free result sheets to simplify the organisational process',
    },
    {
      image: '/images/organizer/image4.png',
      text: 'Free organisational material for running the sports day',
    },
    {
      image: '/images/organizer/image5.png',
      text: 'Bib number certificates for participants',
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  const getVisibleItems = () => {
    const visibleItems = [];
    const itemsToShow = window.innerWidth < 640 ? 1 : 3; // Show 1 item on mobile, 3 on larger screens

    for (let i = 0; i < itemsToShow; i++) {
      visibleItems.push(items[(currentIndex + i) % items.length]);
    }
    return visibleItems;
  };

  return (
    <div className="relative w-full flex flex-col items-center my-10">
      <h2 className="text-center text-2xl font-semibold mb-4">You benefit – Our services for you</h2>
      <p className="text-center mb-8">
        We support you in organising an Athletics Kids Cup. Each school/organiser receives a ready-to-use toolkit to organise its own competition. The toolkit includes:
      </p>
      <div className="w-full flex overflow-hidden justify-center">
        <div className="w-full flex justify-center relative">
          {getVisibleItems().map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center mx-1"
              style={{ width: window.innerWidth < 640 ? '80%' : '200px', textAlign: 'center' }} // Adjust size for mobile
            >
              <div
                className="h-48 w-48 rounded-full bg-center bg-cover shadow-lg border-4 border-black transition-transform duration-500 ease-in-out"
                style={{
                  backgroundImage: `url(${item?.image})`,
                  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.7)',
                }}
              ></div>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                {item?.text}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between w-2/6 sm:w-1/6"> {/* Adjust button width for mobile */}
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
