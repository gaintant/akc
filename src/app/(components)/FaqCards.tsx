interface ExpandableCardProps {
  heading: string;
  content: string;
  isExpanded: boolean;
  onClick: () => void;
}

const FAQCards: React.FC<ExpandableCardProps> = ({
  heading,
  content,
  isExpanded,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`mb-4 w-full min-w-[300px] cursor-pointer rounded-2xl border-[1.5px] border-gray-700 bg-white p-4 shadow-[2px_4px_0_#12141d] transition-all md:w-[700px] lg:w-[900px]`}
    >
      <div className="flex items-center">
        <button className="flex h-8 w-8 min-w-8 transform items-center justify-center rounded-full bg-green-200 text-white shadow-[2px_3px_0_#12141d] transition-transform duration-200">
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="black"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z"
                fill="black"
              />
            </svg>
          )}
        </button>
        <h2 className="how-it-works-heading ml-4 text-xl font-bold">
          {heading}
        </h2>
      </div>
      {isExpanded && (
        <div className=".how-it-works-content ml-12 mt-4 font-semibold">
          {content}
        </div>
      )}
    </div>
  );
};

export default FAQCards;
