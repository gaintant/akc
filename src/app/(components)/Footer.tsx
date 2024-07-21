import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="page-container border-t border-gray-200 bg-white py-4">
      <div className="mx-auto mb-8 flex max-w-6xl px-6 flex-wrap items-center justify-between">
        <div className="mb-4 flex flex-col items-start">
          <span className="mb-2 text-sm font-bold">An initiative by</span>
          <Image
            src="/images/dcpowerparts-logo.png"
            alt="DCPOWERPARTS"
            width={150}
            height={36}
          />
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/images/AKCLogo_ALt.png"
            alt="Athletics Kids Cup"
            width={338.82}
            height={75.29}
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <span className="mb-2 text-sm font-bold">Follow us on Social</span>
          <div className="flex space-x-4">
            <Image
              src="/images/linkedin-icon.png"
              alt="LinkedIn"
              width={40}
              height={40}
            />
            <Image
              src="/images/instagram-icon.png"
              alt="Instagram"
              width={40}
              height={40}
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col items-end">
          <span className="mb-2 text-sm font-bold">Enabled by</span>
          <Image
            src="/images/ubs-logo.png"
            priority
            alt="UBS"
            width={72}
            height={36}
          />
        </div>
      </div>
      <div className="flex items-center justify-between bg-gray-800 px-4 py-4 text-xs text-white">
        <div>© 2024 DCpowerparts</div>
        <div>All Rights Reserved by DCpowerparts</div>
      </div>
    </footer>
  );
};

export default Footer;
