import React from "react";

interface IInputWithDropDown {
  labelName: string;
  listOfDropdown: Array<string>;
  isRequired: boolean;
}

const InputWithDropDown: React.FC<IInputWithDropDown> = ({ labelName, listOfDropdown, isRequired }) => {
  let inputFieldName:string = labelName.length > 0 ? labelName : 'inputField'
  inputFieldName = inputFieldName.replace(/\s+/g, '')
  return (
    <div>
      <label className="block text-xs leading-5 .text-gray-700 mb-1">
        {labelName}
        {isRequired && <span className="text-red-600"> *</span>}
      </label>
      <select name={inputFieldName}
        className="border-black border h-10 rounded-3xl placeholder-gray-400 p-4" 
        required={isRequired}>
        <option value="--Select--" hidden className="text-xs">
        </option>
        {listOfDropdown.map((item) => (
          <option key={item} value={item} className="text-xs">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputWithDropDown;
