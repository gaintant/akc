import InputField from "../(components)/InputFields/PlainTextInput"
import EmailInput from "../(components)/InputFields/EmailInput"

export default function Page() {
    return (
    <div className="m-6 w-5/12 p-5">
        <div className="font-semibold text-black text-lg">Pre Registration</div>
        <div className="flex justify-between">
            <InputField labelName="Full name" isRequired={true} />
            <EmailInput isRequired={true} />
        </div>
        <div className="flex justify-between">
            <InputField labelName="Phone Number" isRequired={true} />
            <InputField labelName="Subject" isRequired={true} />
        </div>
        <div className="self-center m-5">
            <label className="block text-base leading-6 text-gray-900 mb-1">
                Message* 
            </label>
            <input placeholder="Your Message" className="border-gray-200 border-4 h-40 rounded-md
             placeholder-gray-400 p-2 w-full">
            </input>
        </div>
        
        

        <div> * mandatory field </div>
        {/* create a button component also with text prop */}
        <button className="bg-red-900 w-40 h-12 text-slate-50 rounded-sm m-5">Send Message</button>
    </div>
    )
  }