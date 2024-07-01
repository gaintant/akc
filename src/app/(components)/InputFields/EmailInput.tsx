import React from "react";

interface IEmailInput {
  isRequired: boolean;
}
const EmailInput: React.FC<IEmailInput> = (props: IEmailInput) => {

    return (
        <div className="self-center m-5">
            <label className="block text-base leading-6 text-gray-900 mb-1">
                Email Address
                {props.isRequired &&
                    <div className="inline-block"> * </div>
                }
            </label>

            <input name="email" type="email" placeholder="text" className="border-gray-200 border-4 h-10 rounded-md
             placeholder-gray-400 p-2">
            </input>
        </div>
    )

}

export default EmailInput