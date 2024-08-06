import React from "react";

interface INumberInputField {
  labelName: string;
  isRequired: boolean;
  validationError: string | undefined;
}

const NumberInputField: React.FC<INumberInputField> = ({ labelName, isRequired, validationError }) => {
  let inputFieldName:string = labelName.length > 0 ? labelName : 'inputField'
  inputFieldName = inputFieldName.replace(/\s+/g, '')
  return (
    <div>
      <label className="block text-xs leading-5 .text-gray-700 mb-1">{labelName}
        {isRequired && <span className="inline-block"> *</span>}
        {validationError && <span className="text-red-600 block md:inline md:px-2">{validationError}</span>}
      </label>
      <input
        name={inputFieldName}
        type="number"
        className={`${validationError ? "border-red-600" : "border-black"} w-full border h-10 rounded-3xl placeholder-gray-400 p-4`}
        required={isRequired}
      />
    </div>
  );
};

export default NumberInputField;
