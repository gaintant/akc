'use client'

{
  /*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/
}

import React, { useState } from "react";
import IconContainer from "./IconContainer";
import Button, { ButtonVariant } from "../(components)/Button";
import Arrow from "../(components)/Icons/Arrow";
// import PreRegistration from "../pre-registration/page";



const Hero = () => {
  const [preRegisterFormVisible, setPreRegisterFormVisible] = useState(false)
  return (
    <>
      {/* <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"> */}
      <section className="relative bg-cover bg-center bg-no-repeat">
        {/* {preRegisterFormVisible && <PreRegistration />} */}
        
        <div className="absolute inset-0 bg-white/35"></div>
        {/* Lighter opacity */}
        <div className="relative mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:items-start lg:px-8">
          <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-black sm:text-5xl">
              #wemovethekids
            </h1>

            <p className="mt-4 max-w-lg font-semibold text-black sm:text-xl/relaxed">
              &quot;Success is not just about winning medals, it&apos;s about
              giving your best and never giving up.&quot;
            </p>

            <p className="mt-4 max-w-lg text-sm text-black sm:text-base/relaxed">
              Neeraj Chopra - Olympic and world champion in javelin and
              Athletics Kids Cup ambassador
            </p>


            <a href="/pre-registration" onClick={() => setPreRegisterFormVisible(!preRegisterFormVisible)}>
              <Button
                variant={ButtonVariant.RED}
                className="flex items-center gap-3"
              >
                <span>Pre-register your school</span>
                <Arrow className="w-5 -rotate-45" fill="white" />
              </Button>
            </a>

          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center sm:text-center">
          <p className="mt-4 max-w-lg font-semibold text-black sm:text-3xl/relaxed">
            Running - Jumping - Throwing
          </p>
          <p className="mt-4 max-w-lg  text-center font-semibold text-black sm:text-xl/relaxed">
            The three basic movements forms that are required in almost every
            sport are specifically practised and perfected in athletics
          </p>
        </div>
        <IconContainer />
      </section>
    </>
  );
};

export default Hero;
