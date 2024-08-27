import Link from "next/link";
import {SlArrowDown, SlArrowRight} from 'react-icons/sl';

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
      <div className="flex items-center justify-between  cursor-pointer">
        <h3 className="text-xl font-semibold">
          {points && points.length > 0 ? (
            heading
          ) : (
            <Link href={href ?? "#"}>
              <span className=" text-gray-700  hover:text-red-600 cursor-pointer">{heading}</span>
            </Link>
          )}
        </h3>
        {points && points.length > 0 && (
          <div
            className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
          >
            
            <SlArrowDown />
            
          </div>
        )}
      </div>
      {isExpanded && points && points.length > 0 && (
        <div className="mt-4 space-y-2">
          {points.map((point, index) => (
            <div key={index}>
              <div className="flex items-center">     
                <Link key={index} href={point.href} className="text-gray-600 text-lg hover:text-red-500 flex items-center cursor-pointer">
                  <SlArrowRight className="mr-2" />
                    {point.text}
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
