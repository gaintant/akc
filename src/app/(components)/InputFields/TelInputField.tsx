import React from "react";

interface ITelInputField {
  labelName: string;
  isRequired: boolean;
  pattern?: string;
  placeholder?: string;
}

const TelInputField: React.FC<ITelInputField> = ({ labelName, isRequired, pattern, placeholder }) => {
  return (
    <div>
      <label className="block text-xs leading-5 .text-gray-700 mb-1">{labelName}
        {isRequired && <span className="inline-block"> *</span>}
      </label>
      <input
        type="tel"
        pattern={pattern}
        placeholder={placeholder}
        className="border-black border h-10 rounded-3xl placeholder-gray-400 p-4 w-72"
        required={isRequired}
      />
    </div>
  );
};

export default TelInputField;
