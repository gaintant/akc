"use client";
import { useState } from "react";
import FAQCards from "../(components)/FaqCards";

const cards = [
  {
    id: 1,
    heading: "What is the Athletics Kids Cup?",
    content:
      "The Athletics Kids Cup is a competition format for children and adolescents supported by UBS. The children and adolescents between the ages of 7 and 15 will all compete in the same three events: 60m sprint, long jump and ball throw. Our primary goal is to provide a platform through the Athletics Kids Cup for young athletes and equip them with the tools and resources to ignite a lifelong passion for sports, promote physical activity and instill values like teamwork and discipline. By nurturing a love for sports and athletics from an early age, we're actively contributing to the development of well-rounded individuals and future leaders.",
  },
  {
    id: 2,
    heading: "Who can organise an Athletics Kids Cup competition?",
    content:
      "In its first season, the Athletics Kids Cup will take place exclusively in Mumbai and will be organised through local schools. Schools located in any of the following five regions can organise an Athletics Kids Cup. ",
  },
  {
    id: 3,
    heading: "Who can take part in an Athletics Kids Cup?",
    content:
      "The Athletics Kids Cup is open to all girls and boys up to the age of 15. In the first season, the competitions will focus on the Mumbai region. To be part of the Athletics Kids Cup, children have to participate in a competition organised by their school in one of the five regions of Mumbai.",
  },
  {
    id: 4,
    heading:
      "What disciplines does the Athletics Kids Cup include and does a child have to take part in all of them?",
    content:
      "The Athletics Kids Cup is an athletics triathlon consisting of a 60 m sprint, a long jump and a ball throw. For the evaluation of the individual performances, a predefined points table is used. The points for the three individual disciplines are added to the triathlon result. Only the total of all three disciplines counts towards the ranking.",
  },
  {
    id: 5,
    heading: "What support do schools receive with the organisation?",
    content:
      "The schools organise the competitions themselves. However, we support all schools with a ready-to-use toolkit. The toolkit contains all the material a school needs to organise a competition. From start bibs and measuring tapes to a simple evaluation tool, everything needed is included. Participating schools also receive support via explanatory videos, handbook, factsheets and consultancy.",
  },
  {
    id: 6,
    heading: "Are there only local school competitions?",
    content:
      "The Athletics Kids Cup is organised in a three-stage system. At the school competitions in the five Mumbai regions, all children can have fun with exercise and test and improve their individual skills. But the performance itself also counts. The best participants have the chance to qualify for the regional finals. The very best will even make it to the Grand Mumbai Final on 15 February at the Jio Institute's Athletic Centre in Navi Mumbai.",
  },
  {
    id: 7,
    heading: "How does a school have to register?",
    content:
      "The school organisations register their local Athletics Kids Cup competition online on this website. Once a competition has been registered for the first time, it is also possible to register further competitions using the same profile data. This means that a school can organise several AKC competitions within one season. After registration, the data will be checked. As soon as this check has been completed, the schools receive authorisation.",
  },
  {
    id: 8,
    heading: "How many children can take part in a local competition?",
    content:
      "This depends on the infrastructure, the time frame available and the number of volunteers. A competition with 100-150 children can easily be organised in half a day if the conditions are right. In the download area, schools can find volunteer schedules, sample schedules and other helpful information.",
  },
];

const FAQ = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  return (
    <section
      id="faq"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-100"
    >
      <div className="mt-6 flex w-full max-w-[900px] flex-col items-center gap-2 px-4">
        {cards.map((card) => (
          <FAQCards
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
    </section>
  );
};

export default FAQ;
