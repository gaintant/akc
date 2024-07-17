import React from "react";

interface IPasswordInput {
  labelName: string;
  isRequired: boolean;
}

const PasswordInput: React.FC<IPasswordInput> = ({ labelName, isRequired }) => {
  return (
    <div className="m-5">
      <label className="block text-xs leading-5 .text-gray-700 mb-1">
        {labelName}
        {isRequired && <span className="text-red-600"> *</span>}
      </label>
      <input
        type="password"
        className="border-black border h-10 rounded-3xl placeholder-gray-400 p-4 w-72 "
        required={isRequired}
      />
    </div>
  );
};

export default PasswordInput;
