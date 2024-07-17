import React from "react";

interface IDateInputField {
  labelName: string;
  isRequired: boolean;
}

const DateInputField: React.FC<IDateInputField> = ({ labelName, isRequired }) => {
  return (
    <div>
      <label className="block text-xs leading-5 .text-gray-700 mb-1">{labelName}
        {isRequired && <span className="inline-block"> *</span>}
      </label>
      <input
        type="date"
        className="border-black border h-10 rounded-3xl placeholder-gray-400 p-4 w-72"
        required={isRequired}
      />
    </div>
  );
};

export default DateInputField;
