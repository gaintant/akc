"use client";
import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import { LinkDetails, LinkSectionDetails } from "./types";


const ArrowButton = ({ value }: { value: LinkDetails }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // This effect runs only on the client and prevent server side render
        setIsClient(true);
    }, []);

    const handleClick = (linkDetails: LinkDetails) => {
        console.log(linkDetails)
        console.log(linkDetails.Name)
        if (isClient) {

            const link = document.createElement('a');
            link.href = linkDetails.URL;
            link.download = linkDetails.Name;
            console.log(link)
            document.body.appendChild(link);

            link.click();
            document.body.removeChild(link);
        }

    };
    return (
        <div className="flex  flex-row items-center space-x-2"
            onClick={() => handleClick({...value})}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered ? (
                <button
                    className="flex h-8 w-8 min-w-8 transform items-center justify-center rounded-full 
            bg-white  text-white shadow-[2px_3px_0_#12141d] transition-transform duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path
                            d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                            fill="black"

                            transform="rotate(90 12 12)"
                        />
                    </svg>

                </button>
            ) : (
                <button
                    className="flex h-8 w-8 min-w-8 transform items-center justify-center rounded-full 
                bg-green-300  text-white shadow-[2px_3px_0_#12141d] transition-transform duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path
                            d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                            fill="black"

                            transform="rotate(135 12 12)"
                        />
                    </svg>
                </button>
            )}
            <div className={clsx(!isHovered ? 'text-black' : 'text-green-300 font-bold')}>
                {value.Name}
            </div>
        </div>

    );
};
const LinkDescription = ({ linkSectionDetails }: { linkSectionDetails: LinkSectionDetails }) => {
    return (
        <div className="flex flex-col lg:flex-row w-full mt-4 border-b-2 border-dashed pb-6 border-gray-400 pl-4 pr-4 lg:pl-0">
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <h2 className="text-2xl font-bold">{linkSectionDetails.desc}</h2>
            </div>
            <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {linkSectionDetails.links.map((link: LinkDetails, index: number) => (
                        <ArrowButton key={index} value={link} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LinkDescription