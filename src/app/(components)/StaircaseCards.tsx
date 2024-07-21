import React from "react";

const StaircaseCards: React.FC = () => {
  return (
    <div className="flex justify-center h-[559px] gap-[24px]">
      <div className="left-[5rem] mb-20 w-[256px] lg:w-[300px] xl:w-[328px]">
        <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
          <div className="bg-[#57D081] p-6 text-xl font-medium text-[#1F2937]">
            Date
          </div>
          <div className="bg-[#E3F7EA] p-6 font-normal text-[#1F2937]">
            The Athletics Kids Cup season begins on 16 September 2024, from
            which date competitions can be held. All competitions held up to and
            including 10 December 2024 are part of the qualification period for
            the Regional Finals. Your school is free to organise an Athletics
            Kids Cup after 10 December. Of course, you will still receive our
            full support.
          </div>
        </div>
      </div>
      <div className="left-[24.5em] w-[256px] lg:w-[300px] xl:w-[328px] mb-20 mt-[148px]">
        <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
          <div className="bg-[#36BBFC] p-6 text-xl font-medium text-[#1F2937]">
            Point system
          </div>
          <div className="bg-[#DDF3FE] p-6 font-normal text-[#1F2937]">
            For the evaluation of the individual performances, a predefined
            points table is used. The points for the three individual
            disciplines are added to the triathlon result. Only the total of all
            three disciplines counts towards the ranking.
          </div>
        </div>
      </div>
      <div className="left-[49rem] w-[256px] lg:w-[300px] mt-[250px]">
        <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
          <div className="bg-[#E82C2A] p-6 text-xl font-medium text-white">
            Disciplines
          </div>
          <div className="bg-[#FAE1E1] p-6 font-normal text-[#1F2937]">
            The Athletics Kids Cup is a triathlon consisting of the following
            disciplines:
            <ul className="list-inside list-disc">
              <li>Sprint 60 m – 1 attempt</li>
              <li>Long jump with zone jump – 3 attempts</li>
              <li>Ball throw 200 g – 3 attempts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaircaseCards;
