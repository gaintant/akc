import React from "react";

interface IInputField {
  labelName: string;
  isRequired: boolean;
  textArea?: boolean;
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
      </label>
      {props.textArea ? (
        <textarea
          name={inputFieldName}
          className="h-[7rem] rounded-3xl border border-black p-4 placeholder-gray-400"
        />
      ) : (
        <input
          name={inputFieldName}
          className="h-10 rounded-3xl border border-black p-4 placeholder-gray-400"
        ></input>
      )}
    </div>
  );
};

export default InputField;
