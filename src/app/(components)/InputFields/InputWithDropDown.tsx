import React from "react";

interface IInputWithDropDown {
  labelName: string;
  listOfDropdown: Array<string>;
  isRequired: boolean;
}

const InputWithDropDown: React.FC<IInputWithDropDown> = ({ labelName, listOfDropdown, isRequired }) => {
  return (
    <div className="m-5">
      <label className="block text-base leading-6 text-gray-900 mb-1">
        {labelName}
        {isRequired && <span className="text-red-600"> *</span>}
      </label>
      <select name="drop" className="border-gray-200 border-4 h-11 rounded-md placeholder-gray-400 p-2 " required={isRequired}>
        <option value="--Select--" hidden>
          --Select--
        </option>
        {listOfDropdown.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputWithDropDown;
