import React from "react";
import { createRegistrationData } from "../lib/actions";
import InputFieldParent from "../(components)/InputFields/InputFieldParent";

const fields = [
    {
        id:1,
        name: "School ID",
        isRequired: true,
        inputType: "text"
    },
    {
        id:2,
        name: "School Name",
        isRequired: true,
        inputType: "text"
    },
    {
        id:3,
        name: "Street Address",
        isRequired: true,
        inputType: "text"
    },
    {
        id:4,
        name: "City",
        isRequired: true,
        inputType: "text"
    },
    {
        id:5,
        name: "State",
        isRequired: true,
        inputType: "text"
    },
    {
        id:6,
        name: "Pincode",
        isRequired: true,
        inputType: "number"
    },
    {
        id:7,
        name: "School Website",
        isRequired: false,
        inputType: "text"
    },
    {
        id:8,
        name: "First Name",
        isRequired: true,
        inputType: "text"
    },
    {
        id:9,
        name: "Surname",
        isRequired: true,
        inputType: "text"
    },
    {
        id:10,
        name: "Daylight Telephone Number",
        isRequired: true,
        inputType: "number"
    },
    {
        id:11,
        name: "Email",
        isRequired: true,
        inputType: "email"
    },

]

const Page: React.FC = () => {
    return (
        <div className="m-6 p-5 md:w-3/4 lg:w-3/4 xl:w-2/3 h-7/8 mx-auto bg-white shadow-xl rounded-lg">
            <div className="font-bold .text-gray-800 text-xl text-center mb-6 border-b-2 pb-2">Pre Registration</div>
            <form action={createRegistrationData} method="POST" >

                {/* School Details Section */}
                <div className="border-b-2 pb-6">
                    <div className="flex flex-wrap">
                        {fields.map((item) => (
                        <div className="w-full md:w-1/3 h-20" key={item.id}>
                            {/*add telephone number rendering*/}
                            <InputFieldParent inputType={item.inputType} 
                            labelName={item.name} isRequired={item.isRequired} />
                        </div>))}


                    </div>
                </div>
                {/* Submission Section */}
                <div className="text-sm text-red-600"> * mandatory field </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-6 shadow-md transition-transform transform hover:scale-105"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page;
