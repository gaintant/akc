import React from "react";

interface IEmailInput {
  isRequired: boolean;
}
const EmailInput: React.FC<IEmailInput> = ({ isRequired }) => {
  return (
    <div className="m-5">
      <label className="block text-base leading-6 text-gray-900 mb-1">
        Email Address
        {isRequired && <span className="text-red-600"> *</span>}
      </label>
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="border-gray-200 border-4 h-10 rounded-md placeholder-gray-400 p-2"
        required={isRequired}
      />
    </div>
  );
};

export default EmailInput;
