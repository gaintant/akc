import React from "react";

const cards = [
  {
    id: 1,
    heading: "Data Collection ",
    content:
      "We collect personal data, including but not limited to your name, contact details, and any other information provided during registration. We also capture photographs and videos during events.",
  },
  {
    id: 2,
    heading: "Data Usage",
    content:
      "The personal information collected is used solely for the purpose of managing and organizing events. Photographs and videos may be used for promotional purposes on our website, social media, and other marketing channels.",
  },
  {
    id: 3,
    heading: "Data Protection",
    content:
      "We are committed to ensuring the security of your personal information. We take appropriate measures to protect against unauthorized access, alteration, or disclosure of your data.",
  },
  {
    id: 4,
    heading: "Consent",
    content:
      "By participating in our events, you consent to the collection and use of your personal information and media as outlined above. If you do not agree with these terms, please refrain from participating in the event or notify us prior to the event to opt out of media usage.",
  },
  {
    id: 5,
    heading: "Contact Us",
    content:
      "For any concerns or inquiries regarding your data privacy, please contact <a href='mailto:contact@athleticskidscup.com'>contact@athleticskidscup.com</a>.",
  },
];

export default function page() {
  return (
    <section
      id="data protection regulation"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-white p-4"
    >
      <div className="relative mb-2 flex md:text-center">
        <div className="mt-8 flex min-w-[300px] flex-col items-center md:w-full">
          <p className="mb-4 flex text-xl font-bold md:max-w-[750px] md:text-3xl ">
            Data Privacy Disclaimer
          </p>
          <p className="mb-8 flex text-lg md:max-w-[900px]">
            By registering for and participating in the Athletics Kids Cup (AKC), you agree to the collection, use, and processing of your personal information as described below:
          </p>

        </div>
      </div>

      <div className="mt-6 flex w-full max-w-[900px] flex-col items-center gap-2 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="mb-4 w-full min-w-[300px] cursor-pointer rounded-2xl border-[1.5px] border-gray-700 bg-white p-4 shadow-[2px_4px_0_#12141d] transition-all md:w-[700px] lg:w-[900px]"
          >
            <h3 className="text-xl font-semibold">{card.heading}</h3>
            {/* Ensure that dangerouslySetInnerHTML is used correctly with no children */}
            <p className="mt-2 text-gray-700" dangerouslySetInnerHTML={{ __html: card.content }} />
          </div>
        ))}
      </div>

    </section>
  );
}
