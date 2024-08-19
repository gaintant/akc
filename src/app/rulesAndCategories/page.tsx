import React from "react";
import TheCompetition from "../(components)/TheCompetition";
import Link from "next/link";
import Button, { ButtonVariant } from "../(components)/Button";
import Arrow from "../(components)/Icons/Arrow";

export default function page() {
  return (
    <section
      id="rulesAndCategories"
      className="flex min-h-screen w-full flex-col items-center justify-between bg-white p-4"
    >
      <div>
        <TheCompetition />
      </div>

      {/* Date and point system picked from starcaise componenent */}
      <div className="flex w-full items-center justify-center">
        <div className="box-content flex min-h-[559px] max-w-6xl flex-col items-center justify-center gap-6 px-4 md:flex-row">
          <div className="w-full max-w-[576px] md:mb-20">
            <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
              <div className="bg-[#57D081] p-6 text-xl font-bold text-[#1F2937]">
                Date
              </div>
              <div className="bg-[#E3F7EA] p-6 font-medium text-[#1F2937]">
                The Athletics Kids Cup season begins on 16 September 2024, from
                which date competitions can be held. All competitions held up to
                and including 10 December 2024 are part of the qualification
                period for the Regional Finals. Your school is free to organise
                an Athletics Kids Cup after 10 December. Of course, you will
                still receive our full support.
              </div>
            </div>
          </div>
          <div className="md:mb-18 w-full max-w-[576px] md:mt-[136px]">
            <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
              <div className="bg-[#36BBFC] p-6 text-xl font-bold text-[#1F2937]">
                Point system
              </div>
              <div className="bg-[#DDF3FE] p-6 font-medium text-[#1F2937]">
                In each of the three disciplines, the result is converted into a
                score. At the end, the scores are totalled. For the evaluation
                of the individual performances, a predefined points table is
                used. The points for the three individual disciplines are added
                to the triathlon result. Only the total of all three disciplines
                counts towards the ranking. The result then appears in the top
                list.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Handbook And Regulations button */}
      <div className="flex">
        <div className="mt-8 flex w-full items-center justify-between text-center">
          <Link href="pdfs/Competition/Athletics Kids Cup organisers handbook.pdf" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Button
              variant={ButtonVariant.RED}
              className="flex items-center gap-3"
            >
              <span>Handbook And Regulations</span>
              <Arrow className="w-5 -rotate-45" fill="#FFFFFF" />
            </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
