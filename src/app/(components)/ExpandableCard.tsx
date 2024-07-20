interface ExpandableCardProps {
  heading: string;
  content: string;
  isExpanded: boolean;
  onClick: () => void;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  heading,
  content,
  isExpanded,
  onClick,
}) => {
  const bulletPoints = [
    "A ready-to-use sport's day concept (including various ways of orgainising the event)",
    "Simple evaluation software that enables you to capture results and analyse them in ranking lists.",
    "Free result sheets to simplify the organisational process.",
    "Free orgainsational material for running the sports day(measuring taps, balls, stopwatches, etc.)",
    "You will receive bib numbers and participant certificates free of charge.",
    "Data protection is guranteed at all times.",
  ];

  return (
    <div
      onClick={onClick}
      className={
        isExpanded
          ? `cursor-pointer relative mb-4 w-full rounded-lg border border-black bg-white p-4 shadow-[0_4px_6px_rgba(0,0,0,0.8),0_1px_3px_rgba(0,0,0,0.08)] md:max-w-[60%]`
          : `cursor-pointer relative mb-4 w-full rounded-lg border border-black p-4 md:max-w-[60%]`
      }
    >
      <div className="flex items-center">
        <button
          className="flex h-8 w-8 transform items-center justify-center rounded-full bg-blue-500 text-white transition-transform duration-200"
        >
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="white"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z"
                fill="white"
              />
            </svg>
          )}
        </button>
        <h2 className=".how-it-works-heading ml-4 text-xl font-bold">
          {heading}
        </h2>
      </div>
      {isExpanded && heading == "Requirements of an Athelectics Kids Cup" ? (
        <div className=".how-it-works-content ml-12 mt-4 font-semibold">
          <ol className="list-inside list-decimal">
            <li>Registration of the school sports day on our website</li>
            <li>Wearing the starting numbers supplied free of charge</li>
            <li>
              Reporting of the results using the free evaluation software
              provided
            </li>
          </ol>
          <br></br>
          {content}
        </div>
      ) : isExpanded &&
        heading == "Advantages of organising an Atheletics Kids Cup" ? (
        <div className=".how-it-works-content ml-12 mt-4 font-semibold">
          {content}
          <br />
          <br />
          <ul className="pl- list-none">
            {bulletPoints.map((point, index) => (
              <li key={index} className="relative mb-2 pl-6">
                <span
                  className="absolute left-0 top-0 text-2xl leading-none text-black"
                  style={{ width: "0.5rem" }}
                >
                  •
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        isExpanded && (
          <div className=".how-it-works-content ml-12 mt-4 font-semibold">
            {content}
          </div>
        )
      )}
    </div>
  );
};

export default ExpandableCard;
