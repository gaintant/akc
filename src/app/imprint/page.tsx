import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">Imprint</h1>

      {/* Cards Container */}
      <div className="flex w-full max-w-full flex-col md:flex-row gap-6 px-4">
        {/* First Card */}
        <div className="w-full max-w-[600px]">
          <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
            <div className="bg-[#57D081] p-6 text-xl font-bold text-[#1F2937]">
              Athletics Kids Cup
            </div>
            <div className="bg-[#E3F7EA] p-6 font-medium text-[#1F2937] space-y-2">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-black" />
                <div>
                  C/o Striders Foundation <br />
                  12, Satnam Mansion <br />
                  190, Dr. B. Ambedkar Road, <br />
                  Dadar (E), Mumbai 400014
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-black" />
                <span>contact@athleticskidscup.com</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2 text-black" />
                <span>+91 9321591799</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full max-w-[576px]">
          <div className="overflow-hidden rounded-3xl border-2 border-gray-800 shadow-[4px_6px_0_#12141d]">
            <div className="bg-[#36BBFC] p-6 text-xl font-bold text-[#1F2937] whitespace-nowrap">
              Organiser of the Athletics Kids Cup
            </div>
            <div className="bg-[#DDF3FE] p-6 font-medium text-[#1F2937] space-y-2">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-black" />
                <div>
                  Dspowerparts GmbH <br />
                  Feldhof 11 <br />
                  6300 Zug <br />
                  Switzerland
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-black" />
                <span>info@dspowerparts.ch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
