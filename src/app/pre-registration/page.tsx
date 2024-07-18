import "server-only";
import React from "react";
import { createRegistrationData } from "../lib/actions";
import InputFieldParent from "../(components)/InputFields/InputFieldParent";
import Button, { ButtonVariant } from "../(components)/Button";

const fields = [
  {
    id: 2,
    name: "School Name",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 3,
    name: "Street Address",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 4,
    name: "City",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 5,
    name: "State",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 6,
    name: "Pincode",
    isRequired: true,
    inputType: "number",
  },
  {
    id: 7,
    name: "School Website",
    isRequired: false,
    inputType: "text",
  },
  {
    id: 8,
    name: "First Name",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 9,
    name: "Surname",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 10,
    name: "Daylight Telephone Number",
    isRequired: true,
    inputType: "tel",
  },
  {
    id: 11,
    name: "Email",
    isRequired: true,
    inputType: "email",
  },
];

const PreRegistration: React.FC = () => {
  const preRegistrationAction = async (formData: FormData) => {
    "use server";
    await createRegistrationData(formData);
  };

  return (
    <div className="md:w-7/8 h-7/8 m-6 mx-auto rounded-lg bg-white p-5 shadow-xl lg:w-3/4 xl:w-2/3">
      <div className=".text-gray-800 mb-6 border-b-2 pb-2 text-center text-xl font-bold">
        Pre Registration
      </div>
      <form action={preRegistrationAction}>
        {/* School Details Section */}
        <div className="border-b-2 pb-6">
          <div className="flex flex-wrap">
            {fields.map((item) => (
              <div className="h-20 w-full md:w-1/3" key={item.id}>
                <InputFieldParent
                  inputType={item.inputType}
                  labelName={item.name}
                  isRequired={item.isRequired}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Submission Section */}
        <div className="text-sm text-red-600"> * mandatory field </div>
        <div className="text-center">
          <Button variant={ButtonVariant.RED}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default PreRegistration;
