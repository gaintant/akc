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

const PreRegistrationButtonWithModal = () => {
  const [open, setOpen] = useState(false);
  const { pending } = useFormStatus();
  const initialState: PreRegisterState = {
    success: false,
    message: "",
    submitted: false,
  };
  const [state, formAction] = useFormState(
    createRegistrationData,
    initialState,
  );
  const [showFormSubmissionStatus, setshowFormSubmissionStatus] = useState(true)

  const [key, setKey] = useState(0);
  function closeModal() {
    setOpen(false);
    setKey((key) => key + 1);
    setshowFormSubmissionStatus(false);
  }

  return (
    <>
      <DiamondButton
        variant={ButtonVariant.RED}
        onClick={() => {
          setOpen(true);
          setshowFormSubmissionStatus(true);
        }}
      >
        <span>Pre-register your school</span>
        <Arrow className="w-5 -rotate-45" fill="white" />
      </DiamondButton>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "720px",
            margin: "auto",
            borderRadius: "24px",
            height: "max-content",
            padding: 0,
            animation: "slideUp 0.5s ease-out",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)", // Semi-transparent black
          },
        }}
      >
        {state.submitted && !pending && showFormSubmissionStatus && (
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
            <div className="mb-6 border-b-2 pb-2 text-center text-xl font-bold text-gray-800">
              Pre Registration
            </div>
          </header>
          <form key={key} action={formAction}>
            {/* School Details Section */}
            <div className="border-b-2 pb-6">
              <div className="flex flex-wrap">
                {fields.map((item) => (
                  <div className="h-20 w-full md:w-1/3" key={item.id}>
                    <InputFieldParent
                      inputType={item.inputType}
                      labelName={item.name}
                      isRequired={item.isRequired}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Submission Section */}
            <div className="text-sm text-red-600"> * mandatory field </div>
            <div className="flex items-center justify-center">
              <Button
                variant={ButtonVariant.CYAN}
                className="flex items-center gap- disabled:bg-gray-400 disabled:pointer-events-none"
              >
                <span>{pending ? "Submitting" : "Submit"}</span>
                <Arrow className="w-5 -rotate-45" fill="#374151" />
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default PreRegistrationButtonWithModal;
