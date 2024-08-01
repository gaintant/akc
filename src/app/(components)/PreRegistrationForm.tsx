"use client";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Modal from "react-modal";

import DiamondButton, { ButtonVariant } from "./DiamondButton";
import Button from "./Button";
import Arrow from "./Icons/Arrow";
import { createRegistrationData } from "../lib/actions";
import InputFieldParent from "./InputFields/InputFieldParent";
import Cross from "./Icons/Cross";

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

type PreRegisterState = {
  message: string;
  success: boolean;
  submitted: boolean;
};

type ButtonType = typeof Button | typeof DiamondButton;

const PreRegistrationButtonWithModalSubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant={ButtonVariant.CYAN}
      className="flex items-center disabled:pointer-events-none disabled:bg-gray-400"
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

const PreRegistrationForm: React.FC<IPreRegistrationForm> = ({ isDiamond }) => {
  const [open, setOpen] = useState(false);

  const initialState: PreRegisterState = {
    success: false,
    message: "",
    submitted: false,
  };
  const [state, formAction] = useFormState(
    createRegistrationData,
    initialState,
  );

  const [key, setKey] = useState(0);
  function closeModal() {
    setOpen(false);
    setKey((key) => key + 1);
    state.message = "";
    state.submitted = false;
    state.success = false;
  }

  const ButtonTag = isDiamond ? DiamondButton : Button;

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
            zIndex: '40'
          },
        }}
      >
        {state.submitted && (
          <p
            className={`m-2 p-4 text-center ${state.success ? "text-green-400" : "text-red-400"} text-xl lg:text-3xl`}
          >
            {state.message}
          </p>
        )}
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
          <form key={key} action={formAction}>
            <div className="border-b-2 pb-6">
              <div className="grid grid-cols-1 gap-y-1 gap-x-4 md:grid-cols-2">
                {fields.map((item) => (
                  <div className="h-20 w-full" key={item.id}>
                    <InputFieldParent
                      inputType={item.inputType}
                      labelName={item.name}
                      isRequired={item.isRequired}
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
