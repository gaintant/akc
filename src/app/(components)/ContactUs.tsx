"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

import Button, { ButtonVariant } from "./Button";
import Arrow from "./Icons/Arrow";
import InputFieldParent from "./InputFields/InputFieldParent";
import { handleContactUs } from "../../server/actions";
import { ContactUsFormSchema } from "~/lib/zod-schema";

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

const SubmitButton: React.FC<{ pending?: boolean }> = ({ pending }) => {
  return (
    <Button
      variant={ButtonVariant.CYAN}
      className="flex items-center gap-3"
      aria-disabled={pending}
    >
      <span>{pending ? "Sending message" : "Send message"}</span>
      <Arrow className="w-5 -rotate-45" fill="#374151" />
    </Button>
  );
};

// TODO: fix pending state
const ContactUs = () => {
  const [pending, setPending] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleAction = async (formData: FormData) => {
    setPending(true);

    const contactUsData = ContactUsFormSchema.safeParse(
      Object.fromEntries(formData.entries()),
    );

    if (!contactUsData.success) {
      const error = contactUsData.error.issues
        .map((issue) => {
          return `${issue.path[0]}: ${issue.message}`;
        })
        .join(".");

      toast.error(error);

      setPending(false);
      return;
    }

    try {
      const result = await handleContactUs(contactUsData.data);

      if (result?.error) {
        toast.error(result.error);
        setPending(false);
        return;
      }

      setPending(false);

      toast.success(
        "Thank you for contacting AKC! We will get back to you with your query shortly!",
      );

      formRef.current?.reset();
    } catch (err) {
      toast.error("Something went wrong!");
      setPending(false);
    }
  };

  return (
    <section id="contact-us" className="flex w-full justify-center">
      <div className="contact-us-bg relative flex w-full max-w-[1440px] items-center justify-center pb-16">
        <div className="absolute left-11 top-0">
          <Image
            src="/images/black-squiggle.png"
            alt="black squiggle line"
            height={133.57}
            width={80}
          />
        </div>
        <div className="absolute right-16 top-6">
          <Image
            src="/images/black-vector.png"
            alt="black squiggle line"
            height={37.04}
            width={39.14}
          />
        </div>
        <div className="box-content flex w-full max-w-6xl flex-1 justify-center px-4">
          <div className="z-10 mt-20 flex w-full flex-1 flex-col items-center gap-4 rounded-3xl border-[1.5px] border-defaultFontColor bg-[#F4F6F8] px-9 py-6 shadow-[3px_6px_0_#12141d]">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <form ref={formRef} action={handleAction} className="w-full">
              <div className="flex flex-col justify-center gap-6 md:flex-row">
                <div className="grid flex-1 grid-cols-1 grid-rows-1 gap-x-6 md:grid-cols-2 md:grid-rows-2">
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
                <div className="flex-1">
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
              <div className="flex items-center justify-center py-4">
                <SubmitButton pending={pending} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
