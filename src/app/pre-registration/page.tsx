import React from "react";
import PasswordInput from "../(components)/InputFields/PasswordInput";
import InputField from "../(components)/InputFields/PlainTextInput";
import EmailInput from "../(components)/InputFields/EmailInput";
import InputWithDropDown from "../(components)/InputFields/InputWithDropDown";
import NumberInputField from "../(components)/InputFields/NumberInputField";
import DateInputField from "../(components)/InputFields/DateInputField";
import { createRegistrationData } from "../lib/actions";

const fields = [
    {
        name: "School ID",
        isRequired: true
    },
    {
        name: "School Name",
        isRequired: true
    },
    {
        name: "Street Address",
        isRequired: true
    },
    {
        name: "City",
        isRequired: true
    },
    {
        name: "State",
        isRequired: true
    },
    {
        name: "Pincode",
        isRequired: true
    },
    {
        name: "Principal Name",
        isRequired: true
    },
    {
        name: "School Website",
        isRequired: false
    },
    {
        name: "First Name",
        isRequired: true
    },
    {
        name: "Surname",
        isRequired: true
    },
    {
        name: "Daylight Telephone Number",
        isRequired: true
    },
    {
        name: "Email",
        isRequired: true
    },

]

const Page: React.FC = () => {
    return (
        <div className="m-6 p-5 lg:w-3/4 xl:w-2/3 mx-auto bg-white shadow-xl rounded-lg">
            <div className="font-semibold text-red-900 text-xl mb-6 border-b-2 pb-2">Pre Registration</div>
            <form action={createRegistrationData} method="POST" className="space-y-6">

                {/* School Details Section */}
                <div className="border-b-2 pb-6">
                    <div className="flex flex-wrap">
                        {fields.map( (item) => (<div className="w-full md:w-1/3 p-4">
                            <InputField labelName={item.name} isRequired={item.isRequired} />
                        </div>) )}
                        
                        
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
