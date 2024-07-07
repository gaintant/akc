// pages/index.js
import Head from "next/head";
import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Athletics Kids Cup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-2">
        <header className="top-0 mb-2 mt-[-50px] flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/AKCLogo_ALt.png"
              alt="Athletics Kids Cup Logo"
              className="mr-2 h-56 "
            />
          </div>
          <div className="flex items-center">
            <span className="text-xs text-lightFont sm:text-base">
              Enabled by
            </span>
            <img
              src="/ubs-logo.png"
              alt="UBS Logo"
              className="mr-2 inline h-8"
            />
          </div>
        </header>

        <div className="flex flex-wrap gap-8 md:flex-nowrap top-0 mb-2 mt-[-50px] ">
          <div className="w-full md:w-1/2">
            <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
              #WEMOVETHEKIDS
            </span>
            <p className="mt-4 text-4xl font-semibold">
              <p>
                <span
                  className={`font-thin text-primary sm:text-6xl ${caveat.className} mr-4`}
                >
                  Success
                </span>{" "}
                is not just
              </p>
              <p>about winning medals,</p>
              <p>
                it&apos;s about{" "}
                <span
                  className={`font-thin text-[#36BBFC] sm:text-6xl ${caveat.className} mr-4`}
                >
                  giving your best
                </span>
              </p>
              <p>
                and{" "}
                <span
                  className={`font-thin text-[#57D081] sm:text-6xl ${caveat.className} mr-4`}
                >
                  never giving up
                </span>
                .
              </p>
            </p>
            <p className="my-4">
              <span className=" text-boldFont font-semibold">Neeraj Chopra</span>
              <br />
              <span className="text-lightFont">Olympic and World Champion in Javelin</span>
            </p>
            <button className="rounded-full bg-primary mt-8 px-6 py-2 text-white transition hover:bg-red-7g00">
              Pre-register your school →
            </button>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-4 md:w-1/2 top-0 mb-2 mt-[-50px]">
          <img
              src="/images/three-kids-hero.png"
              alt="Athletic Kids Images"
              className="mr-2 h-[600px]"
            />
          </div>
        </div>
 
      </main>
      <div className="">
        <img
              src="/images/design-bar.png"
              alt="Design bar"
              className="my-20 h-16 w-full"
            />
        </div>
    </div>
  );
}
