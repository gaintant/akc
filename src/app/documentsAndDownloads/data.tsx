import { LinkSectionDetails} from "./types";
const urlPath = "pdfs/";
export const linkSectionData: LinkSectionDetails[] = [

  {
    desc: "Competition",
    links: [
      { Name: "Organisers Handbook", URL: urlPath + "Competition/Athletics Kids Cup organisers handbook.pdf" },
      { Name: "qualification system finals", URL: urlPath + "Competition/qualification system finals season 1.pdf" }
    ],
  },
  // {
  //   desc: "Material",
  //   links: [
  //     { Name: "Material overview", URL: urlPath + "your_advantage.png" }
  //   ],
  // },
    // {
    //   desc: "Evaluation Software",
    //   links: [
    //     { Name: "Instructions and functions", URL: urlPath + "your_advantage.png" },
    //     { Name: "Collective registration form", URL: urlPath + "your_advantage.png" }
    //   ],
    // },
    {
      desc: "Events",
      links: [
        { Name: "60 m sprint", URL: urlPath + "Events/AKC How to organise - 60 m sprint.pdf" },
        { Name: "Ball throw", URL: urlPath + "Events/AKC How to organise - ball throw.pdf" },
        { Name: "Long jump", URL: urlPath + "Events/AKC How to organise - long jump.pdf" },
        { Name: "Long jump-alternative", URL: urlPath + "Events/AKC How to organise - long jump-alternative.pdf" },
        // { Name: "Ideas for activity space", URL: urlPath + "your_advantage.png" },
        // { Name: "Variants for team relays", URL: urlPath + "your_advantage.png" },
        // { Name: "Scoring table disciplines", URL: urlPath + "your_advantage.png" }
      ],
    },
    // {
    //   desc: "Disciplines",
    //   links: [
    //     { Name: "Volunteer planning", URL: urlPath + "your_advantage.png" },
    //     { Name: "Sample schedules", URL: urlPath + "your_advantage.png" },
    //   ]
    // },
    {
      desc: "Values",
      links: [
        { Name: "Ethics charter", URL: urlPath + "Values/Athletics Kids Cup ethics charter.pdf" },
      ]
    },
    // {
    //   desc: "Media Releases",
    //   links: [
    //     { Name: "20.08.2024-Launch Athletics Kids Cup", URL: urlPath + "your_advantage.png" },
    //   ]
    // },

  ];
