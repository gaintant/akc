import React from "react";

const StaircaseCards: React.FC = () => {
  return (
    <div className="flex justify-center h-[559px] gap-[24px]">
      <div className="left-[5rem] top-[32px] mb-20 h-[368px] w-[328px] ">
        <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
          <div className="font-frutiger bg-[#57D081] p-6 text-xl font-medium text-[#1F2937]">
            Date
          </div>
          <div className="font-frutiger bg-[#E3F7EA] p-6 font-normal text-[#1F2937]">
            The Athletics Kids Cup season begins on 16 September 2024, from
            which date competitions can be held. All competitions held up to and
            including 10 December 2024 are part of the qualification period for
            the Regional Finals. Your school is free to organise an Athletics
            Kids Cup after 10 December. Of course, you will still receive our
            full support.
          </div>
        </div>
      </div>
      <div className="top-[32px]  left-[24.5em] w-[368px] h-[496px] mb-20 mt-[100px] style={{ padding: '120px 0' }}">
        <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
          <div className="font-frutiger bg-[#36BBFC] p-6 text-xl font-medium text-[#1F2937]">
            Point system
          </div>
          <div className="font-frutiger bg-[#DDF3FE] p-6 font-normal text-[#1F2937]">
            For the evaluation of the individual performances, a predefined
            points table is used. The points for the three individual
            disciplines are added to the triathlon result. Only the total of all
            three disciplines counts towards the ranking.
          </div>
        </div>
      </div>
      <div className="top-[32px] left-[49rem] w-[384px] h-[616px] mt-[250px] style={{ padding: '192px 0' }} ">
        <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
          <div className="font-frutiger bg-[#E82C2A] p-6 text-xl font-medium text-white">
            Disciplines
          </div>
          <div className="font-frutiger bg-[#FAE1E1] p-6 font-normal text-[#1F2937]">
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
