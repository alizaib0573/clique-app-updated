import { compareData } from "@/components/Data/compare";
import Head from "next/head";

export default function Comparison() {
  return (
    <>
      <Head>
        <title>Clique Apps - Comparison</title>
      </Head>
      <section className="relative z-20 mx-auto mt-[120px] mb-[26px] w-full max-w-[1350px] p-4 md:p-[60px]">
        {/* Header */}
        <div className="grid grid-cols-4 md:grid-cols-5">
          <div className="hidden md:block" />
          <h2 className="overflow-hidden rounded-tl-3xl border border-white/20 bg-red-500/25 p-3 text-center font-sans text-xs backdrop-blur-lg md:p-4 md:text-xl">
            Clique
          </h2>
          <h2 className="border-y border-r border-white/20 p-3 text-center text-xs backdrop-blur-lg md:p-4 md:text-lg">
            Passes
          </h2>
          <h2 className="border-y border-white/20 p-3 text-center text-xs backdrop-blur-lg md:p-4 md:text-lg">
            Fanfix
          </h2>
          <h2 className="overflow-hidden rounded-tr-3xl border border-white/20 p-3 text-center text-xs backdrop-blur-lg md:p-4 md:text-lg">
            Patreon
          </h2>
        </div>

        {/* Rows */}
        {compareData.map((elem, index) => (
          <div
            key={index}
            data-round={index === 0}
            data-last={index === compareData.length - 1}
            className="grid grid-cols-4 overflow-hidden backdrop-blur-lg data-[last='true']:rounded-br-3xl data-[last='true']:rounded-bl-3xl md:data-[round='true']:rounded-tl-3xl lg:grid-cols-5"
          >
            {/* Heading (always first column) */}
            <h1
              data-round={index === 0}
              data-last={index === compareData.length - 1}
              className="col-span-4 border border-white/20 p-4 text-base font-medium md:col-span-1 md:data-[last='true']:rounded-bl-3xl md:data-[round='true']:rounded-tl-3xl lg:text-xl"
            >
              {elem.heading}
            </h1>

            {/* Data columns */}
            <div className="flex items-center justify-center border border-white/20 p-4 md:bg-red-500/25">
              {elem.clique}
            </div>
            <div className="flex items-center justify-center border border-white/20 p-4">
              {elem.appPasses}
            </div>
            <div className="flex items-center justify-center border border-white/20 p-4">
              {elem.fanfix}
            </div>
            <div
              data-last={index === compareData.length - 1}
              className="flex items-center justify-center border border-white/20 p-4 data-[last='true']:rounded-br-3xl"
            >
              {elem.patreon}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
