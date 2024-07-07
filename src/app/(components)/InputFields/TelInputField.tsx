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
      <label>{labelName}
        {isRequired && <span className="inline-block"> *</span>}
      </label>
      <input
        type="tel"
        pattern={pattern}
        placeholder={placeholder}
        className="border-gray-200 border-4 h-10 rounded-md placeholder-gray-400 p-2"
        required={isRequired}
      />
    </div>
  );
};

export default TelInputField;
