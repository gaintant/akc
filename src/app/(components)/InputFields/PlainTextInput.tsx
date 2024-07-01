import React from "react";

interface IInputField {
  labelName: string;
  isRequired: boolean;
}


const InputField: React.FC<IInputField> = (props) =>  {
    // console.log(props)
    var inputFieldName:string = props.labelName.length > 0 ? props.labelName : 'inputField'
    inputFieldName = inputFieldName.replace(/\s+/g, '')
    // console.log(inputFieldName)
    return (
        <div className="self-center m-5">
            <label className="block text-base leading-6 text-gray-900 mb-1">
                {props.labelName}
                
                {props.isRequired &&
                    <div className="inline-block"> * </div>
                }
            </label>
            <input name={inputFieldName} placeholder="text" className="border-gray-200 border-4 h-10 rounded-md
             placeholder-gray-400 p-2">
            </input>
        </div>
    )

}

export default InputField
