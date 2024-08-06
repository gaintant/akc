import React from "react";

interface IEmailInput {
  isRequired: boolean;
  validationError: string | undefined;
}
const EmailInput: React.FC<IEmailInput> = ({ isRequired, validationError}) => {
  return (
    <div>
      <label className="block text-xs leading-5 .text-gray-700 mb-1">
        Email Address
        {isRequired && <span className="text-red-600"> *</span>}
        {validationError && <span className="text-red-600 block md:inline md:px-2">{validationError}</span>}
      </label>
      <input
        name="email"
        type="email"
        className={`${validationError ? "border-red-600" : "border-black"} w-full border h-10 rounded-3xl placeholder-gray-400 p-4`}
        required={isRequired}
      />
    </div>
  );
};

export default EmailInput;
