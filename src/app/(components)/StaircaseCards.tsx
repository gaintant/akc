import React from 'react';

const StaircaseCards: React.FC = () => {
  return (
    <div className="relative h-screen p-12">
      <div className="absolute top-0 left-28 w-1/4 mb-20">
        <div className="rounded-3xl border-2 border-gray-800 shadow-lg shadow-black overflow-hidden">
          <div className="bg-[#57D081] text-[#1F2937] font-frutiger font-medium text-xl p-6">Date</div>
          <div className="bg-[#E3F7EA] text-[#1F2937] font-frutiger font-normal p-6">
            The Athletics Kids Cup season begins on 16 September 2024, from which date competitions can be held. All competitions held up to and including 10 December 2024 are part of the qualification period for the Regional Finals. Your school is free to organise an Athletics Kids Cup after 10 December. Of course, you will still receive our full support.
          </div>
        </div>
      </div>
      <div className="absolute top-28 left-1/3 w-1/4 mb-20">
        <div className="rounded-3xl border-2 border-gray-800 shadow-lg shadow-black overflow-hidden">
          <div className="bg-[#36BBFC] text-[#1F2937] font-frutiger font-medium text-xl p-6">Point system</div>
          <div className="bg-[#DDF3FE] text-[#1F2937] font-frutiger font-normal p-6">
            For the evaluation of the individual performances, a predefined points table is used. The points for the three individual disciplines are added to the triathlon result. Only the total of all three disciplines counts towards the ranking.
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-64 w-1/4">
        <div className="rounded-3xl border-2 border-gray-800 shadow-lg shadow-black overflow-hidden">
          <div className="bg-[#E82C2A] text-white font-frutiger font-medium text-xl p-6">Disciplines</div>
          <div className="bg-[#FAE1E1] text-[#1F2937] font-frutiger font-normal p-6">
            The Athletics Kids Cup is a triathlon consisting of the following disciplines:
            <ul className="list-disc list-inside">
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
