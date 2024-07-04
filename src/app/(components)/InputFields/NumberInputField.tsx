import React from "react";

interface INumberInputField {
  labelName: string;
  isRequired: boolean;
}

const NumberInputField: React.FC<INumberInputField> = ({ labelName, isRequired }) => {
  return (
    <div>
      <label>{labelName}
        {isRequired && <span className="inline-block"> *</span>}
      </label>
      <input
        type="number"
        className="border-gray-200 border-4 h-10 rounded-md placeholder-gray-400 p-2"
        required={isRequired}
      />
    </div>
  );
};

export default NumberInputField;
