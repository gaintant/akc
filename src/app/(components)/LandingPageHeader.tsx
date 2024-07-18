import Image from "next/image";

const LandingPageHeader = () => {
  return (
    <header className="top-0 flex items-center justify-between py-4 bg-white">
      <div className="flex items-center">
        <Image
          src="/images/AKCLogo_ALt.png"
          alt="Athletics Kids Cup Logo"
          height={71.16}
          width={360}
        />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Enabled by</span>
        <Image
          src="/images/ubs-logo.png"
          alt="UBS Logo"
          height={54}
          width={146.12}
        />
      </div>
    </header>
  );
};

export default LandingPageHeader;

