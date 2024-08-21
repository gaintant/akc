import React from "react";

const cards = [
  {
    id: 1,
    heading: "Data protection",
    content:
      ["In order to register correctly for an Athletics Kids Cup, you must provide all data marked as required. These are currently:", "- Surname / first name", "- Postal address", "- Year of birth", "- Gender", "You have the option of registering additional persons. In this case, we are authorised to assume that you may pass on this person's data to us. If you register online, you must provide your e-mail address, as we need it for confirmation and any queries."]
  },
  {
    id: 2,
    heading: "Management of your personal data",
    content:
      ["Participant data is stored in the project database. The local organisers have access to the data of those participants who have registered for the relevant event."]
  },
  {
    id: 3,
    heading: "Consent to data processing",
    content:
      ["By registering, you consent to the publication of rankings and leaderboards with your first name, surname, year of birth, school or place of residence, the results achieved by this person and their ranking. This consent applies to publication on the internet, in the media, for the posting of lists and speaker announcements."
      ]
  },
  {
    id: 4,
    heading: "Disclosure of data to third parties",
    content:
      ["The data of participants at local competition level may be used by the organiser (dspowerparts GmbH) and the respective local organiser.",
        "The data of participants at the Regional Finals and Grand Mumbai Final level may also be used by sponsors and partners of the Athletics Kids Cup (currently UBS, Striders Miles) in addition to the above. Registration for the Regional Finals or the Grand Mumbai Final must be completed by a legal representative of the qualified child. Dspowerparts (DSPP) will treat all data confidentially and will not pass it on to other and previously unnamed third parties for commercial purposes."
      ]
  },
  {
    id: 5,
    heading: "Photo and film recordings",
    content:
      ["The photos and film recordings made in connection with the Athletics Kids Cup may be used for advertising purposes without any claims to remuneration. The organisers and partners of the Athletics Kids Cup (currently UBS, Striders Miles) may also use photos and film recordings at any time.",
        "- Photos and film recordings are used in particular for the following purposes:",
        "- Posts on the social channels of the Athletics Kids Cup (Facebook, Instagram, TikTok, YouTube and LinkedIn)",
        "- Website www.athleticskidscup.com",
        "- Newsletter and other direct mailings of the Athletics Kids Cup",
        "- Posts on the social channels of local organisers and partners",
        "- Websites of the local organisers",
        "- Posts on the social channels of the partners (currently UBS, Striders Miles)",
        "- Media releases",
        "- Livestream at the Grand Mumbai Final",
        "- Promotion of own work in the communication channels of contracted service providers (agencies, etc.)"
      ]
  },
  {
    id: 6,
    heading: "Organiser liability / insurance",
    content: ["The organisers of the Athletics Kids Cup and the individual local events, the regional finals and the Grand Mumbai Final decline any liability. Insurance is the responsibility of the participants."]
  }
];

export default function page() {
  return (
    <section
      id="privacy Policy"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-white p-4"
    >
      <div className="relative mb-2 flex md:text-center">
        <div className="mt-8 flex min-w-[300px] flex-col items-center md:w-full">
          <p className="mb-4 flex text-xl font-bold md:max-w-[750px] md:text-3xl ">
            Conditions of participation
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

            {card.content.map((item, i) => (
              <p key={i} className="mt-2 text-gray-700">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}
