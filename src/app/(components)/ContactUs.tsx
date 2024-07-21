import Image from "next/image";
import Button, { ButtonVariant } from "./Button";
import Arrow from "./Icons/Arrow";
import InputFieldParent from "./InputFields/InputFieldParent";

const fields = [
  {
    id: 1,
    name: "Full name",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 2,
    name: "Phone",
    isRequired: false,
    inputType: "tel",
  },
  {
    id: 3,
    name: "Email",
    isRequired: true,
    inputType: "email",
  },
  {
    id: 4,
    name: "Subject",
    isRequired: true,
    inputType: "text",
  },
];

const ContactUs = () => {
  return (
    <div className="relative z-10">
      <div className="content-container z-10 flex justify-center">
         <div className="absolute top-0 left-11">
            <Image
               src='/images/black-squiggle.png'
               alt="black squiggle line"
               height={133.57}
               width={80}
            />
         </div>
         <div className="absolute top-6 right-16">
            <Image
               src='/images/black-vector.png'
               alt="black squiggle line"
               height={37.04}
               width={39.14}
            />
         </div>
        <div className="mt-20 flex flex-1 flex-col items-center gap-4 rounded-3xl border-[1.5px] border-defaultFontColor bg-[#F4F6F8] px-9 py-6 shadow-[3px_6px_0_#12141d] max-w-[1030px] ">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <form>
            <div className="flex justify-center gap-6">
              <div className="grid grid-cols-2 grid-rows-2 gap-x-6">
                {fields.map((item) => (
                  <div className="h-20" key={item.id}>
                    <InputFieldParent
                      inputType={item.inputType}
                      labelName={item.name}
                      isRequired={item.isRequired}
                    />
                  </div>
                ))}
              </div>
              <div className="flex-[1]">
                <InputFieldParent
                  inputType="textarea"
                  labelName="Message"
                  isRequired
                />
              </div>
            </div>
            <div className="text-end text-sm text-altTextColor">
              * mandatory field{" "}
            </div>
            <div className="flex items-center justify-center">
              <Button
                variant={ButtonVariant.CYAN}
                className="flex items-center gap-3"
              >
                <span>Submit</span>
                <Arrow className="w-5 -rotate-45" fill="#374151" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
