import PreRegistrationForm from "./PreRegistrationForm";

const PreRegistration = () => {
  return (
    <section id="pre-registration" className="w-full">
      <div className="relative flex h-[300px]">
        <div className="ribbon-down absolute top-0 h-full w-full"></div>
        <div className="ribbon-up absolute top-[100px] h-full w-full"></div>
        <div className="mt-[59.51px] flex flex-1 justify-center">
          <PreRegistrationForm isDiamond />
        </div>
      </div>
    </section>
  );
};

export default PreRegistration;
