"use client";
import React, { useState } from "react";
import ExpandableCard from "../(components)/ExpandableCard";

const HowItWorks = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);

  const cards = [
    {
      id: 1,
      heading: "Overview",
      content:
        "The Athletics Kids Cup is a major youth project in India supported by UBS. " +
        "The children and adolescents between the ages of 7 and 15 will all compete in " +
        "the same three events: 60m sprint, long jump and ball throw. We recommend that you " +
        "orgainize the Atheletics Kids Cup as your atheletics sports day, as there are only three " +
        "requirements to met and you can benefit in many ways.",
    },
    {
      id: 2,
      heading: "Requirements of an Athelectics Kids Cup",
      content:
        "It's as simple as that. You can now express your interest in becoming part of the " +
        "Athletics Kids Cup movement by pre-registering your school. We will then inform you " +
        "as soon as registration for an event organised by you is possible.",
    },
    {
      id: 3,
      heading: "Advantages of organising an Atheletics Kids Cup",
      content:
        "We support you in orgainising an Atheletics Kids Cup. Each school receives a ready-to-use toolkit " +
        "to orgainse its own competition. The toolkit includes",
    },
    {
      id: 4,
      heading: "Regional Finals",
      content:
        "Numerous Atheletics Kids Cup competitions will be held throughout Mumbai from mid September 2024. " +
        "The best atheletes will be invited to one of the five regioinal finals in Januray 2025",
    },
    {
      id: 5,
      heading: "Grand Mumbai Final",
      content:
        "The Atheletics Kids Cup Grand Mumbai Final will take place on 15 February 2025 at the Jio Institute's " +
        "Atheletic Center in Navi Mumbai. In which the best girls and boys in each age category can participate.",
    },
  ];

  return (
    <div className="min-h-screen bg-green-100 md:bg-white">
      <div className=".how-it-works-heading p-6 text-center text-2xl font-semibold">
        How it works
      </div>
      <div className="relative flex min-h-screen flex-col md:flex-row">
        <div className="order-2 w-full bg-[#57D081] p-4 md:order-1 md:w-[80%] md:rounded-r-[30%]">
          <div className="flex flex-col items-start md:ml-8">
            {cards.map((card) => (
              <ExpandableCard
                key={card.id}
                heading={card.heading}
                content={card.content}
                isExpanded={expandedCard === card.id}
                onClick={() =>
                  setExpandedCard(expandedCard === card.id ? null : card.id)
                }
              />
            ))}
          </div>
        </div>
        <div className="relative order-1 flex w-full justify-center bg-white md:order-2 md:h-screen md:w-[30%] md:bg-transparent">
          <img
            src="/images/how-it-works.jpeg"
            alt="Right Image"
            className="oval-image h-auto max-h-[600px] w-3/4 max-w-[400px] object-cover md:absolute md:left-[-50%] md:top-1/2 md:w-[500px] md:-translate-y-1/2 md:transform lg:w-[600px] xl:w-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
