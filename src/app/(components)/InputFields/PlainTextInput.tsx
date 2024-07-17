import React from "react";

interface IInputField {
  labelName: string;
  isRequired: boolean;
}


const InputField: React.FC<IInputField> = (props) =>  {
    // console.log(props)
    let inputFieldName:string = props.labelName.length > 0 ? props.labelName : 'inputField'
    inputFieldName = inputFieldName.replace(/\s+/g, '')
    // console.log(inputFieldName)
    return (
        <div >
            <label className="block text-xs leading-5 .text-gray-700 mb-1">
                {props.labelName}
                
                {props.isRequired &&
                    <div className="inline-block"> * </div>
                }
            </label>
            <input name={inputFieldName} placeholder="text" 
                className="border-black border h-10 rounded-3xl placeholder-gray-400 p-4">
            </input>
        </div>
    )

}

export default InputField
