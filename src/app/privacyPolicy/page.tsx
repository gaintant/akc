import React from "react";

const cards = [
  {
    id: 1,
    heading: "Identifying information",
    content:
      "In order to take advantage of certain features the Website may choose to offer including, but not limited to, quizzes, newsletters, public forums, you may be asked to complete a registration form which will provide us with personally identifiable information such as your name, email address, phone number, residential address (including photographs, video grabs, TV footage etc), Financial data, Technical data, Statistical data, Demographic data and other information as may be collected via online forms you submit to the Website. You may also be asked to choose a user ID and password in order to identify yourself during future visits to the Website.",
  },
  {
    id: 2,
    heading: "Information from children",
    content:
      "DSPP does not use personally identifying information collected from children for marketing or promotional purposes and does not disclose such information to any third party for any purpose whatsoever. DSPP will not collect or post information from a child under the age of 18 without the involvement of a parent or guardian.",
  },
  {
    id: 3,
    heading: "Blogs, chat rooms, forums and bulletin boards",
    content:
      "If you participate in any Blog activities, Website chat room, discussion forum or post messages on the Website's bulletin board, you should be aware that the information disclosed and shared will be broadly available to other persons, both inside and/or outside of DSPP, who have access to the chat rooms, forums or bulletin board. Some chat rooms, forums or bulletin boards have additional rules and conditions regarding participation. Participant's expressed opinion is his or her own and should not be considered as reflecting the opinion of DSPP.",
  },
  {
    id: 4,
    heading: "Surveys & Voting",
    content:
      "From time to time we may request personally identifiable information from you via surveys or voting polls. Participation is voluntary and you will have the opportunity to decide whether or not to disclose information. At times, you may have to register to vote or to take part in a survey.",
  },
  {
    id: 5,
    heading: "Links to other websites",
    content:
      "This Website may contain links to other web sites. DSPP is not responsible for the privacy practices or the content of those other web sites.",
  },
  {
    id: 6,
    heading: "Cookies Information",
    content:
      "When you visit the Website, we may send one or more cookies - a small text file containing a string of alphanumeric characters - to your computer that uniquely identifies your browser. The Website uses both session cookies and persistent cookies. A persistent cookie remains after you close your browser. Persistent cookies may be used by your browser on subsequent visits to the site. Persistent cookies can be removed by following your web browser help file directions. A session cookie is temporary and disappears after you close your browser. You can reset your web browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the Website may not function properly if the ability to accept cookies is disabled.",
  },
  {
    id: 7,
    heading: "Log File Information",
    content:
      "When you use the Website, our servers automatically record certain information that your web browser sends whenever you visit any website. These server logs may include information such as your web request, Internet Protocol ('IP') address, browser type, browser language, referring/exit pages and URLs, platform type, number of clicks, domain names, landing pages, pages viewed and the order of those pages, the amount of time spent on particular pages, the date and time of your request, and one or more cookies that may uniquely identify your browser.",
  },
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
            Privacy Policy
          </p>
          <p className="mb-8 flex text-lg md:max-w-[900px]">
            Dspowerparts GmbH ("DSPP") recognizes that its visitors, users, and
            others who use www.athleticskidscup.com value their privacy. This
            Privacy Policy details important information regarding the use and
            disclosure of user information collected via the
            www.athleticskidscup.com website. This Privacy Policy helps you make
            an informed decision about whether to use or continue using
            www.athleticskidscup.com. Your use of www.athleticskidscup.com and
            any personal information/personal data you provide on
            www.athleticskidscup.com remains subject to the terms of this
            Privacy Policy and our Terms & Conditions elsewhere on this site.
          </p>
          <p className="mb-8 flex text-lg md:max-w-[900px]">
            DSPP is the owner of www.athleticskidscup.com ("Website"). DSPP can
            be contacted by mail at "dspowerparts GmbH, Feldhof 11, 66300 Zug,
            Switzerland" or by e-mail at info@dspowerparts.ch. This online
            privacy policy discloses DSPP's information practices for this
            Website and Services (as defined below) including the type of
            information being collected, method of such information collection,
            use of such information and with sharing of such information with
            third parties. "Services" herein shall refer to services provided by
            DSPP or indirectly on behalf of DSPP's licensee's / marketing
            affiliates which encompasses the games and networking services of
            www.athleticskidscup.com being made available over the Website,
            cellular phones or any other similar electronic devices and IPTV
            accessed through any form or medium whatsoever, including but not
            limited to, internet, short message services and data networks.
          </p>
          <p className="mb-8 flex text-lg md:max-w-[900px]">
            PLEASE READ THE FOLLOWING TERMS OF OUR PRIVACY POLICY 
          </p>
          <p className="mb-8 flex text-lg md:max-w-[900px]">
            PERSONAL INFORMATION THAT MAY BE COLLECTED
          </p>
        </div>
      </div>

      <div className="mt-6 flex w-full max-w-[900px] flex-col items-center gap-2 px-4">
        {cards.map((card) => (
          <div className="mb-4 w-full min-w-[300px] cursor-pointer rounded-2xl border-[1.5px] border-gray-700 bg-white p-4 shadow-[2px_4px_0_#12141d] transition-all md:w-[700px] lg:w-[900px]">
            <h3 className="text-xl font-semibold">{card.heading}</h3>
            <p className="mt-2 text-gray-700">{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
