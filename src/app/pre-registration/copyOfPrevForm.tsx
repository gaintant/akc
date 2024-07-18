import React from "react";
import PasswordInput from "../(components)/InputFields/PasswordInput";
import InputField from "../(components)/InputFields/PlainTextInput";
import EmailInput from "../(components)/InputFields/EmailInput";
import InputWithDropDown from "../(components)/InputFields/InputWithDropDown";
import NumberInputField from "../(components)/InputFields/NumberInputField";
import DateInputField from "../(components)/InputFields/DateInputField";
import { createRegistrationData } from "../lib/actions";

const Page: React.FC = () => {
  return (
    <div className="m-6 p-5 lg:w-3/4 xl:w-2/3 mx-auto bg-white shadow-xl rounded-lg">
      <div className="font-semibold text-red-900 text-xl mb-6 border-b-2 pb-2">Pre Registration</div>
      <form action={createRegistrationData} method="POST" className="space-y-6">
        {/* Login Details Section */}
        <div className="border-b-2 pb-6">
          <div className="font-semibold text-lg mb-4 text-green-800">Login Details</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EmailInput isRequired={true} />
            <PasswordInput labelName="Password" isRequired={true} />
          </div>
        </div>

        {/* School Details Section */}
        <div className="border-b-2 pb-6">
          <div className="font-semibold text-lg mb-4 text-green-800">School Details</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField labelName="School ID" isRequired={true} />
            <InputField labelName="School Name" isRequired={true} />
            <InputField labelName="Street Address" isRequired={true} />
            <InputField labelName="City" isRequired={true} />
            <InputField labelName="State" isRequired={true} />
            <InputField labelName="Pincode" isRequired={true} />
            <InputField labelName="Principal Name" isRequired={true} />
            <InputField labelName="School Website" isRequired={false} />
            <InputWithDropDown
              labelName="School Type"
              listOfDropdown={["Government School", "Private School", "Aided Government School"]}
              isRequired={true}
            />
            <InputWithDropDown
              labelName="School Board"
              listOfDropdown={["CBSE", "ICSE", "State Board"]}
              isRequired={true}
            />
            <InputWithDropDown labelName="Medium" listOfDropdown={["English", "Marathi", "Hindi"]} isRequired={true} />
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-1">
                <InputWithDropDown
                  labelName="Class From"
                  listOfDropdown={["Kindergarten", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"]}
                  isRequired={true}
                />
              </div>
              <div className="flex-1">
                <InputWithDropDown
                  labelName="Class Upto"
                  listOfDropdown={["Kindergarten", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"]}
                  isRequired={true}
                />
              </div>
            </div>
            
            <DateInputField labelName="Sports Day Date" isRequired={true} />
            <NumberInputField labelName="Expected Number of Participants" isRequired={true} />
            <div className="flex items-center space-x-4">
              <span>Do you have a sports ground?</span>
              <div className="flex items-center">
                <input type="radio" name="sportsGround" value="yes" required className="ml-2 mr-1" /> Yes
                <input type="radio" name="sportsGround" value="no" required className="ml-2" /> No
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Have you already held an Athletics Kids cup?</span>
              <div className="flex items-center">
                <input type="radio" name="athleticsKidsCup" value="yes" required className="ml-2 mr-1" /> Yes
                <input type="radio" name="athleticsKidsCup" value="no" required className="ml-2" /> No
              </div>
            </div>
          </div>
        </div>

        {/* Coordinator Details Section */}
        <div className="border-b-2 pb-6">
          <div className="font-semibold text-lg mb-4 text-green-800">Coordinator Details</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField labelName="School Coordinator Name" isRequired={true} />
            <EmailInput isRequired={true} />
            <InputField labelName="Daylight Telephone number" isRequired={true} />
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
