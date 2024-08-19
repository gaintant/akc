import React from "react";
import Image from "next/image";
import LinkedIn from "./Icons/LinkedIn";
import Instagram from "./Icons/Instagram";

// TODO: fix 2px horizontal overflow
const Footer: React.FC = () => {
  return (
    <footer className="flex w-full items-center justify-center">
      <div className="box-content flex w-full max-w-[1440px] flex-col">
        <div className="flex items-center justify-center">
          <div className="flex w-full max-w-6xl flex-col flex-wrap items-center justify-between gap-5 px-4 py-9 md:flex-row">
            <div className="flex flex-1 flex-col items-center justify-around gap-5 md:flex-row-reverse">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/AKCLogo_ALt.png"
                  alt="Athletics Kids Cup"
                  width={303.53}
                  height={60}
                />
              </div>

              <div className="flex flex-col items-start gap-1">
                <span className="w-full text-center text-sm font-medium md:text-left">
                  An initiative by
                </span>
                <a
                  href="https://dspowerparts.ch/"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src="/images/dspowerparts.png"
                    alt="DSPOWERPARTS"
                    width={264.19}
                    height={48}
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-5 md:flex-row-reverse md:gap-16 lg:gap-28">
              <div className="flex flex-col items-end gap-1">
                <span className="w-full text-center text-sm font-medium md:text-left">
                  Enabled by
                </span>
                <a
                  href="https://www.ubs.com/"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                <Image
                  src="/images/ubs-logo.png"
                  priority
                  alt="UBS"
                  width={127.32}
                  height={46.06}
                />
                </a>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="text-sm font-medium">Follow us on Social</div>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/athletics-kids-cup/"
                    className="cursor-pointer"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkedIn />
                  </a>
                  <a
                    className="cursor-pointer"
                    href="https://www.instagram.com/athleticskidscupindia/?igsh=MWx3ZGFhdGJrZjA2aw%3D%3D"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-altTextColor">
          <div className="flex w-full max-w-6xl flex-col gap-2 p-4 text-sm font-medium text-white md:flex-row md:justify-between">
            <div className="w-full text-center">© 2024 Dspowerparts. All rights reserved</div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
