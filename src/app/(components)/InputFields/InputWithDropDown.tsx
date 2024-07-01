import React from "react";

interface IInputWithDropDown {
  labelName: string;
  listOfDropdown: Array<string>;
  isRequired: boolean;
}
 

const InputWithDropDown: React.FC<IInputWithDropDown> = (props) =>  {
    const listOfDropdown: Array<string> = props.listOfDropdown
    console.log(props)
    return (
        <div className="dropdown">
            <label>{props.labelName}
                {props.isRequired &&
                    <div className="inline-block"> * </div>
                }
            </label>
            <br></br>
            <select name="drop" className="border-gray-200 border-4 h-10 rounded-md
             placeholder-gray-400 p-2">
                <option value="" disabled hidden>
                    Select an item
                </option>
                {listOfDropdown.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default InputWithDropDown