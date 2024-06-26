import React from "react";

interface IEmailInput {
  isRequired?: boolean;
}

const EmailInput: React.FC<IEmailInput> = (props: IEmailInput) => {
  return (
    <div className="self-center">
      <label className="mb-1 block text-base leading-6 text-gray-900">
        Email Address
        {props.isRequired && <div className="inline-block"> * </div>}
      </label>

      <input
        type="email"
        placeholder="text"
        className="h-10 rounded-md border-4 border-gray-200
             p-2 placeholder-gray-400"
      ></input>
    </div>
  );
};

export default EmailInput;
