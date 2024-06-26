{
  /*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/
}
import React from "react";
import IconContainer from "./IconContainer";

const Hero = () => {
  return (
    <>
      {/* <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"> */}
      <section className="relative bg-[url()] bg-cover bg-center bg-no-repeat">
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

            <div className="mt-8 flex flex-col items-start gap-4 text-center">
              <p>Pre-register your school now!</p>
              <a
                href="/pre-registration"
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                School pre-registration
              </a>
            </div>
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
            sport are specifically practised and perfected in atheltics
          </p>
        </div>
        <IconContainer />
      </section>
    </>
  );
};

export default Hero;
