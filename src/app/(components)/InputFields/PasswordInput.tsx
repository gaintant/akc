import React from "react";

interface IPasswordInput {
  labelName: string;
  isRequired: boolean;
}

const PasswordInput: React.FC<IPasswordInput> = ({ labelName, isRequired }) => {
  return (
    <div className="m-5">
      <label className="block text-base leading-6 text-gray-900 mb-1">
        {labelName}
        {isRequired && <span className="text-red-600"> *</span>}
      </label>
      <input
        type="password"
        className="border-gray-200 border-4 h-10 rounded-md placeholder-gray-400 p-2 "
        required={isRequired}
      />
    </div>
  );
};

export default PasswordInput;
