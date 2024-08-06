import React from "react";

interface IInputField {
  labelName: string;
  isRequired: boolean;
  textArea?: boolean;
  validationError: string | undefined;
}

const InputField: React.FC<IInputField> = (props) => {
  // console.log(props)
  let inputFieldName: string =
    props.labelName.length > 0 ? props.labelName : "inputField";
  inputFieldName = inputFieldName.replace(/\s+/g, "");
  // console.log(inputFieldName)
  return (
    <div className="h-full">
      <label className=".text-gray-700 mb-1 block text-xs leading-5">
        {props.labelName}

        {props.isRequired && <div className="inline-block"> * </div>}
        {props.validationError && <span className="text-red-600 block md:inline md:px-2">{props.validationError}</span>}
      </label>
      {props.textArea ? (
        <textarea
          name={inputFieldName}
          className={`h-[7rem] w-full rounded-3xl border ${props.validationError ? "border-red-600" : "border-black"} p-4 placeholder-gray-400`}
        />
      ) : (
        <input
          name={inputFieldName}
          className={`h-10 w-full rounded-3xl border ${props.validationError ? "border-red-600" : "border-black"} p-4 placeholder-gray-400`}
        ></input>
      )}
    </div>
  );
};

export default InputField;
