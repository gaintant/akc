"use client";
import { useState } from "react";
import InfoCard from "./InfoCard";

const KnowMoreAboutUs: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      heading: "Competition",
      points: [
        { text: "How it works", href: "/howItWorks" },
        { text: "Who can participate?", href: "/participation" },
        { text: "The three disciplines", href: "/disciplines" },
        { text: "Rules and categories", href: "/rulesAndCategories" },
        { text: "Finals", href: "/finals" },
      ],
    },
    {
      id: 2,
      heading: "Organizers",
      points: [
        { text: "Become an organizer", href: "/becomeAnOrganizer" },
        { text: "Documents and downloads", href: "/documentsAndDownloads" },
      ],
    },
    {
      id: 3,
      heading: "FAQ",
      points: [
        { text: "FAQ", href: "/faq" },
        {
          text: "Conditions Of Participation",
          href: "/conditionsOfParticipation",
        },
        { text: "Privacy policy", href: "/privacyPolicy" },
        { text: "Imprint", href: "/imprint" },
      ],
    },
    {
      id: 4,
      heading: "About AKC",
      points: [],
      href: "/aboutAKC",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8">
      <div className="mt-16 flex flex-col items-center gap-[0.125rem]">
        <h2 className="text-[1.75rem] font-semibold leading-[36px] tracking-[-0.04em] md:text-[2.5rem] md:leading-[48px]">
          Want to know more about us?
        </h2>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
        {cards.map((card) => (
          <InfoCard
            key={card.id}
            heading={card.heading}
            points={card.points}
            href={card.href}
            isExpanded={expandedCard === card.id}
            onClick={() =>
              setExpandedCard(expandedCard === card.id ? null : card.id)
            }
          />
        ))}
        <div className="mb-32"></div>
      </div>
    </section>
  );
};

export default KnowMoreAboutUs;
