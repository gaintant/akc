"use client";
import React, { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import Modal from "react-modal";
import toast from "react-hot-toast";

import DiamondButton, { ButtonVariant } from "./DiamondButton";
import Button from "./Button";
import Arrow from "./Icons/Arrow";
import InputFieldParent from "./InputFields/InputFieldParent";
import Cross from "./Icons/Cross";
import { PreRegistrationFormSchema } from "~/lib/zod-schema";
import { createRegistrationData } from "~/server/actions";

Modal.setAppElement("#home-container");

const fields = [
  {
    id: 2,
    name: "School Name",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 3,
    name: "Street Address",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 4,
    name: "City",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 5,
    name: "State",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 6,
    name: "Pincode",
    isRequired: true,
    inputType: "number",
  },
  {
    id: 7,
    name: "School Website",
    isRequired: false,
    inputType: "text",
  },
  {
    id: 8,
    name: "First Name",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 9,
    name: "Surname",
    isRequired: true,
    inputType: "text",
  },
  {
    id: 10,
    name: "Daytime Telephone Number",
    isRequired: true,
    inputType: "tel",
  },
  {
    id: 11,
    name: "Email",
    isRequired: true,
    inputType: "email",
  },
];

const PreRegistrationButtonWithModalSubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant={ButtonVariant.CYAN}
      className="flex items-center disabled:cursor-not-allowed disabled:bg-gray-400"
      disabled={pending}
    >
      <span>{pending ? "Submitting" : "Submit details"}</span>
      <Arrow className="w-5 -rotate-45" fill="#374151" />
    </Button>
  );
};

type IPreRegistrationForm = {
  isDiamond?: boolean;
};
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
type IPreRegistrationFormErrors = {
  [key: string]: string | undefined;
};
const PreRegistrationForm: React.FC<IPreRegistrationForm> = ({ isDiamond }) => {
  const [open, setOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<IPreRegistrationFormErrors>({});

  const formRef = useRef<HTMLFormElement>(null);

  function closeModal() {
    setOpen(false);
    setFormErrors({});
  }

  const ButtonTag = isDiamond ? DiamondButton : Button;

  const handleAction = async (formData: FormData) => {
    setFormErrors({});
    const preRegistrationData = PreRegistrationFormSchema.safeParse(
      Object.fromEntries(formData.entries()),
    );

    if (!preRegistrationData.success) {
      let errors = {};
      preRegistrationData.error.issues.forEach((issue) => {
        const pathName = issue.path[0] as string;
        errors = { [pathName]: issue.message, ...errors };
      });
      setFormErrors(errors);
      return;
    }

    try {
      const result = await createRegistrationData(preRegistrationData.data);

      if (result?.error) {
        toast.error(result.error, { duration: 5000 });
        return;
      }

      toast.success(
        `Registration Successful! You'll receive further information via email on ${preRegistrationData.data.email}.`,
        {
          duration: 10000,
        },
      );

      formRef.current?.reset();
      closeModal();
    } catch (err) {
      toast.error("Something went wrong! Please try again!");
    }
  };

  console.log("formerrors", formErrors);

  return (
    <>
      <ButtonTag
        variant={ButtonVariant.RED}
        onClick={() => {
          setOpen(true);
        }}
        {...(isDiamond
          ? {}
          : {
              className: "flex items-center gap-3",
            })}
      >
        <span>Pre-register your school</span>
        <Arrow className="w-5 -rotate-45" fill="white" />
      </ButtonTag>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        style={{
          content: {
            maxWidth: "720px",
            maxHeight: "80%",
            margin: "auto",
            borderRadius: "24px",
            height: "max-content",
            padding: 0,
            animation: "slideUp 0.5s ease-out",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: "40",
          },
        }}
      >
        <div className="rounded-lg bg-white p-5 shadow-xl">
          <header className="relative">
            <button
              className="absolute bottom-3 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E5E7EB]"
              onClick={closeModal}
            >
              <Cross />
            </button>
            <div className="mb-6 border-b-2 pb-3 text-center text-xl font-bold text-gray-800">
              Pre Registration
            </div>
          </header>
          <form ref={formRef} action={handleAction}>
            <div className="border-b-2 pb-6">
              <div className="grid grid-cols-1 gap-x-4 gap-y-1 md:grid-cols-2">
                {fields.map((item) => (
                  <div className="h-20 w-full" key={item.id}>
                    <InputFieldParent
                      inputType={item.inputType}
                      labelName={item.name}
                      isRequired={item.isRequired}
                      validationError={
                        formErrors[item.name.replace(/\s+/g, "")]
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-sm">* mandatory field </div>
            <div className="flex items-center justify-center py-4">
              <PreRegistrationButtonWithModalSubmitButton />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default PreRegistrationForm;
