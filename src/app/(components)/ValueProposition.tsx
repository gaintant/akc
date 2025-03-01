import Image from "next/image";
import { Caveat } from "next/font/google";
import React from "react";

const caveat = Caveat({ subsets: ["latin"] });

interface ValueCardData {
  icon: string;
  title: string;
  description: string;
}

const valueCardsData: ValueCardData[] = [
  {
    icon: "/images/our_commitment.png",
    title: "Our Commitment",
    description:
      "We move the kids and strengthen their character, values, integrity, mutual respect and personal discipline.",
  },
  {
    icon: "/images/your_advantage.png",
    title: "Your Advantage",
    description:
      "We support schools to the full. Each school receives a ready-to-use toolkit to organise its own Athletics Kids Cup-competition.",
  },
  {
    icon: "/images/shared_vision.png",
    title: "Shared Vision",
    description:
      "Together we inspire the kids to get the best out of themselves and to pursue their own ambitious goals.",
  },
];

const ValueCard: React.FC<ValueCardData> = ({ icon, title, description }) => {
  return (
    <div className="flex max-w-sm flex-col items-center text-center">
      <div className="relative mb-4 h-[90px] w-[90px]">
        <Image src={icon} alt={title} fill={true} />
      </div>
      <h3 className="text-xl font-medium">{title.split(" ")[0]}</h3>
      <p className={`${caveat.className} mb-1 text-4xl font-normal italic`}>
        {title.split(" ")[1]}
      </p>
      <p className="mt-2 text-base font-medium">{description}</p>
    </div>
  );
};

const ValueProposition: React.FC = () => {
  return (
    <section id="value-proposition" className="md:mt-8">
      <div className="flex w-full items-center justify-center">
        <div
          className="flex min-h-[1024px] w-full max-w-[1440px] flex-col items-center justify-center gap-8 bg-no-repeat px-4 md:min-h-max md:flex-row md:p-8"
          style={{
            backgroundImage: 'url("/images/value-propostion-bg-img.png")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {valueCardsData.map((card, index) => (
            <ValueCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
