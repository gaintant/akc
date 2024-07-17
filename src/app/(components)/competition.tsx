import React from 'react';

const Competition: React.FC = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-full mx-auto">
            <div className="flex justify-between lg:flex-row mb-4 px-8 lg:px-32">
                <div className="w-full lg:w-1/3 flex flex-col justify-between items-start mb-4 lg:mb-0 lg:mr-4">
                    <div className="relative w-full h-64 mb-4">
                        <img
                            src="/images/competitions.png"
                            alt="The Competition"
                            className="w-[15.625rem] h-[10.42rem] object-cover rounded-md"
                        />
                        <img
                            src="/images/competitons_two.png"
                            alt="Second Photo"
                            className="absolute bottom-0 right-0 top-3/4 left-1/2 w-[11.25rem] h-[11.25rem] object-cover rounded-md"
                        />
                    </div>
                    <div className="text-left">
                        <h1 className="text-[1.5rem] font-normal leading-8 tracking-tight text-left bg-white text-gray-800 font-frutiger">Categories</h1>
                        <h2 className="text-[4rem] font-caveat font-normal leading-[4.5rem] tracking-tight text-left bg-white text-[#1F2937]">Season 1</h2>
                        <p className="mt-4 text-[1rem] font-normal leading-6 tracking-tight text-left bg-white text-gray-800 font-frutiger">
                            The Athletics Kids Cup is organised in age categories. There is one category per age group. There are rankings for girls and boys. The Athletics Kids Cup 2024/2025 is open to children who will be 15 years old or younger in 2024 (born in 2009 or later).
                        </p>
                    </div>
                </div>
                <div className="text-left">
                    <table className="block w-full h-11/12 justify-end bg-white border-2 border-gray-800 rounded-3xl shadow-black shadow-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-800 text-white text-left font-bold">
                                <th className="w-[15.625rem] h-[3.625rem] py-3 px-6 border">Born in</th>
                                <th className="w-[15.625rem] h-[3.625rem] py-3 px-6 border">Girls</th>
                                <th className="w-[15.625rem] h-[3.625rem] py-3 px-6 border">Boys</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { year: 2009, girls: 'G15', boys: 'B15' },
                                { year: 2010, girls: 'G14', boys: 'B14' },
                                { year: 2011, girls: 'G13', boys: 'B13' },
                                { year: 2012, girls: 'G12', boys: 'B12' },
                                { year: 2013, girls: 'G11', boys: 'B11' },
                                { year: 2014, girls: 'G10', boys: 'B10' },
                                { year: 2015, girls: 'G9', boys: 'B9' },
                                { year: 2016, girls: 'G8', boys: 'B8' },
                                { year: "2017 and younger", girls: 'G7*', boys: 'B7' },
                            ].map((row) => (
                                <tr key={row.year} className="even:bg-gray-50">
                                    <td className="py-2 px-4 border font-bold text-gray-800">{row.year}</td>
                                    <td className="py-2 px-4 border font-bold text-gray-800">{row.girls}</td>
                                    <td className="py-2 px-4 border font-bold text-gray-800">{row.boys}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-left mt-4 italic text-gray-600">
                        * In the categories G7 and B7 also younger children are allowed to start.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Competition;
