import React from "react";
import InputField from "./PlainTextInput";
import TelInputField from "./TelInputField";
import EmailInput from "./EmailInput";
import NumberInputField from "./NumberInputField";

interface IInputFieldParent {
    inputType: string;
    labelName: string;
    isRequired: boolean;
    validationError: string | undefined;
}

const InputFieldParent: React.FC<IInputFieldParent> = (props) => {
    const renderContent = () => {
        switch (props.inputType) {
            case 'text':
                return <InputField labelName={props.labelName} isRequired={props.isRequired} validationError={props.validationError} />;
            case 'textarea':
                return <InputField labelName={props.labelName} isRequired={props.isRequired} textArea validationError={props.validationError} />;
            case 'tel':
                return <TelInputField labelName={props.labelName} isRequired={props.isRequired} validationError={props.validationError} />;
            case 'email':
                return <EmailInput isRequired={props.isRequired} validationError={props.validationError}/>;
            case 'number':
                return <NumberInputField  labelName={props.labelName} isRequired={props.isRequired} validationError={props.validationError} />;
            case 'default':
                return <InputField labelName={props.labelName} isRequired={props.isRequired} validationError={props.validationError}/>;
        }
    };

    return (
        <>{renderContent()}</>
    )

}

export default InputFieldParent
