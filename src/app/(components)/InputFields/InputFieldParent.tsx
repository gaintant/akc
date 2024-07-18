import React from "react";
import InputField from "./PlainTextInput";
import TelInputField from "./TelInputField";
import EmailInput from "./EmailInput";
import NumberInputField from "./NumberInputField";

interface IInputFieldParent {
    inputType: string;
    labelName: string;
    isRequired: boolean;
}

const InputFieldParent: React.FC<IInputFieldParent> = (props) => {
    const renderContent = () => {
        switch (props.inputType) {
            case 'text':
                return <InputField labelName={props.labelName} isRequired={props.isRequired} />;
            case 'tel':
                return <TelInputField labelName={props.labelName} isRequired={props.isRequired} />;
            case 'email':
                return <EmailInput isRequired={props.isRequired}/>;
            case 'number':
                return <NumberInputField  labelName={props.labelName} isRequired={props.isRequired} />;
            case 'default':
                return <InputField labelName={props.labelName} isRequired={props.isRequired} />;
        }
    };

    return (
        <div>{renderContent()}</div>
    )

}

export default InputFieldParent
