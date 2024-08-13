import Link from "next/link";

interface InfoCardProps {
  heading: string;
  points?: { text: string; href: string }[];
  href?: string;
  isExpanded: boolean;
  onClick: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  heading,
  points,
  href,
  isExpanded,
  onClick,
}) => {
  return (
    <div
      className="relative flex w-full min-w-[300px] flex-col rounded-lg border border-gray-400 bg-white p-4 shadow-lg transition-all duration-300 md:w-[300px]"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          {points && points.length > 0 ? (
            heading
          ) : (
            <Link href={href ?? "#"}>
              <span className="cursor-pointer text-blue-400">{heading}</span>
            </Link>
          )}
        </h3>
        {points && points.length > 0 && (
          <div
            className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
          >
            <svg
              className="h-6 w-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        )}
      </div>
      {isExpanded && points && points.length > 0 && (
        <div className="mt-4 space-y-2">
          {points.map((point, index) => (
            <div key={index}>
              <div className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-blue-500"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <Link key={index} href={point.href}>
                  <span className="cursor-pointer text-blue-400">
                    {point.text}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoCard;
