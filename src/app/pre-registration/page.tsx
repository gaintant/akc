import InputField from "../(components)/InputFields/PlainTextInput"

export default function Page() {
    return (
    <div className="m-6 w-5/12">
        <div className="font-semibold text-black text-lg m-5">Pre Registration</div>
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
    </div>
    )
  }