import React from "react";

interface INumberInputField {
  labelName: string;
  isRequired: boolean;
}

const NumberInputField: React.FC<INumberInputField> = ({ labelName, isRequired }) => {
  return (
    <div>
      <label className="block text-xs leading-5 .text-gray-700 mb-1">{labelName}
        {isRequired && <span className="inline-block"> *</span>}
      </label>
      <input
        type="number"
        className="border-black border h-10 rounded-3xl placeholder-gray-400 p-4 w-72"
        required={isRequired}
      />
    </div>
  );
};

export default NumberInputField;
