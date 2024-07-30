import Image from "next/image";

const LandingPageHeader = () => {
  return (
    <header className="content-container top-0 flex items-center justify-between bg-white py-3 px-4 md:p-4">
      <div className="flex items-center">
        <Image
          src="/images/AKCLogo_ALt.png"
          alt="Athletics Kids Cup Logo"
          height={71.16}
          width={360}
          className="h-auto w-[212px] md:w-[360px]"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:gap-4">
        <span className="text-[7px] sm:text-sm sm:font-medium">Enabled by</span>
        <Image
          src="/images/ubs-logo.png"
          alt="UBS Logo"
          height={54}
          width={146.12}
          className="h-auto w-[74px] md:w-[146px]"
        />
      </div>
    </header>
  );
};

export default LandingPageHeader;
