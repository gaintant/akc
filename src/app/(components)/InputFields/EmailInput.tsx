import React from "react";

interface IEmailInput {
  isRequired: boolean;
}
const EmailInput: React.FC<IEmailInput> = ({ isRequired }) => {
  return (
    <div>
      <label className="block text-xs leading-5 .text-gray-700 mb-1">
        Email Address
        {isRequired && <span className="text-red-600"> *</span>}
      </label>
      <input
        name="email"
        type="email"
        className="border-black border h-10 rounded-3xl placeholder-gray-400 p-4 "
        required={isRequired}
      />
    </div>
  );
};

export default EmailInput;
