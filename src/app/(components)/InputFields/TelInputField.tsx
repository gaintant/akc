import React from "react";

interface ITelInputField {
  labelName: string;
  isRequired: boolean;
}

const TelInputField: React.FC<ITelInputField> = ({ labelName, isRequired }) => {
  let inputFieldName:string = labelName.length > 0 ? labelName : 'inputField'
  inputFieldName = inputFieldName.replace(/\s+/g, '')
  return (
    <div>
      <label className="block text-xs leading-5 .text-gray-700 mb-1">{labelName}
        {isRequired && <span className="inline-block"> *</span>}
      </label>
      <input
        name={inputFieldName}
        // minLength={10}
        // maxLength={10}
        type="tel"
        placeholder="phone number"
        className="border-black border h-10 rounded-3xl placeholder-gray-400 p-4"
        required={isRequired}
      />
    </div>
  );
};

export default TelInputField;
