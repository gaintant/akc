import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

const LandingPageHeader = () => {
  return (
    <header className="flex w-full items-center justify-center">
      <div className="top-0 box-content flex w-full max-w-6xl items-center justify-between bg-white px-4 py-3 md:p-4">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/images/AKCLogo_ALt.png"
              alt="Athletics Kids Cup Logo"
              height={71.16}
              width={360}
              className="h-auto w-[212px] md:w-[360px]"
            />
          </div>
        </Link>
        <div className="flex gap-10">
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
          <span className="text-[8px] font-medium md:text-sm">Enabled by</span>
          <Image
            src="/images/ubs-logo.png"
            alt="UBS Logo"
            height={54}
            width={146.12}
            className="h-auto w-[74px] md:w-[146px]"
          />
        </div>
        <Navbar />
        </div>
      </div>
    </header>
  );
};

export default LandingPageHeader;
