import React from "react";

interface IPasswordInput {
  labelName: string;
  isRequired: boolean;
}

const PasswordInput: React.FC<IPasswordInput> = ({ labelName, isRequired }) => {
  let inputFieldName:string = labelName.length > 0 ? labelName : 'inputField'
  inputFieldName = inputFieldName.replace(/\s+/g, '')
  return (
    <div>
      <label className="block text-xs leading-5 .text-gray-700 mb-1">
        {labelName}
        {isRequired && <span className="text-red-600"> *</span>}
      </label>
      <input
        name={inputFieldName}
        type="password"
        className="border-black border h-10 rounded-3xl placeholder-gray-400 p-4 "
        required={isRequired}
      />
    </div>
  );
};

export default PasswordInput;
