import Image from 'next/image';
import React from 'react';

const items = [
  { src: "/images/becomeanorganizer/flapNew.svg", label: "1 start flap" },
  { src: "/images/becomeanorganizer/plugnail.svg", label: "6 plug nails" },
  { src: "/images/becomeanorganizer/balls.svg", label: "6 balls 200g" },
  { src: "/images/becomeanorganizer/whistles.svg", label: "2 whistles" },
  { src: "/images/becomeanorganizer/barriertape.svg", label: "1 barrier tape" },
  { src: "/images/becomeanorganizer/kitbag.svg", label: "Kit Bag" },
  { src: "/images/becomeanorganizer/stopwatches.svg", label: "2 stopwatches" },
  { src: "/images/becomeanorganizer/tape.svg", label: "1 roll of white tape" },
  { src: "/images/becomeanorganizer/redwhiteflags.svg", label: "2 red-white flags" },
  { src: "/images/becomeanorganizer/measuringtape50m.svg", label: "1 measuring tape 100m" },
  { src: "/images/becomeanorganizer/measuringtape30m.svg", label: "2 measuring tapes 30m" },
];

const OrganisationalMaterial: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Organisational material free of charge
      </h2>
      <p className="text-center mb-8">
        Every registered and approved Athletics Kids Cup event receives the following 
        basic material to organise a competition:
      </p>
      <div className="grid gap-4 place-content-center">
        {/* First Row - 6 Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-items-center">
          {items.slice(0, 6).map((item, index) => (
            <div key={index} className="flex flex-col  items-center">
              <div className="flex">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={60}
                  height={60}
                />
              </div>
              <p className="mt-2 text-center text-sm border border-black rounded-full shadow-black m-2 p-2 w-32 break-words">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        {/* Second Row - 5 Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center">
          {items.slice(6).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={60}
                  height={60}
                />
              </div>
              <p className="mt-2 text-center text-sm border border-black rounded-full shadow-black p-2 w-28 break-words">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganisationalMaterial;
