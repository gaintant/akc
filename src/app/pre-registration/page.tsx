import InputField from "../(components)/InputFields/PlainTextInput"
import EmailInput from "../(components)/InputFields/EmailInput"
import InputWithDropDown from "../(components)/InputFields/InputWithDropDown"

export default function Page() {
    return (
    <div className="m-6 w-5/12 p-5">
        <div className="font-semibold text-black text-lg">Pre Registration</div>
        <div className="flex justify-between">
            <InputField labelName="School ID" isRequired={true} />
            <InputField labelName="School Name" isRequired={true} />
        </div>
        <div className="flex justify-between">
            <InputField labelName="Street Address" isRequired={true} />
            <InputField labelName="City" isRequired={true} />
        </div>
        <div className="flex justify-between">
            <InputField labelName="State" isRequired={true} />
            <InputField labelName="Pincode" isRequired={true} />
        </div>
        <div className="flex justify-between">
            <InputField labelName="School Website" isRequired={false} />
        </div>

        <div className="font-semibold text-black text-lg">Contact</div>
        <div className="flex justify-between">
            <InputField labelName="First Name" isRequired={true} />
            <InputField labelName="Surname" isRequired={true} />
        </div>
        <div className="flex justify-between">
            <InputField labelName="Daylight Telephone number" isRequired={true} />
            <EmailInput isRequired={true} />
        </div>
        {/* Example usage of dropdown */}
        {/* <InputWithDropDown label="Choose your city" listOfDropdown={["a", "b", "c"]} isRequired={true} /> */}

        <div> * mandatory field </div>
        {/* create a button component also with text prop */}
        <button className="bg-red-900 w-40 h-12 text-slate-50 rounded-sm m-5">Submit</button>
    </div>
    )
  }