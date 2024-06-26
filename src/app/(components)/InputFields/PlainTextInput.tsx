import React from "react";

interface IInputField {
  labelName?: string;
  isRequired?: boolean;
}

const InputField: React.FC<IInputField> = (props) => {
  return (
    <div className="m-5 self-center">
      <label className="mb-1 block text-base leading-6 text-gray-900">
        {props.labelName}

        {props.isRequired && <div className="inline-block"> * </div>}
      </label>
      <input
        placeholder="text"
        className="h-10 rounded-md border-4 border-gray-200
             p-2 placeholder-gray-400"
      ></input>
    </div>
  );
};

export default InputField;
