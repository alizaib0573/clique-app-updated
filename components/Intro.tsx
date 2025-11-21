import Image from "next/image";
import type { Ref } from "react";
import { div } from "three/tsl";

type Props = {
  heading: string;
  description?: string;
  content: { heading: string; description: string }[];
  direction?: "right" | "left" | "center";
  index: number;
};

const Intro: React.FC<Props> = ({
  index,
  heading,
  description,
  content,
  direction = "left",
}) => {
  return (
    <section
      data-direction={direction === "right"}
      data-center={direction === "center"}
      className="pointer-events-none absolute inset-0 z-10 mx-auto flex h-screen w-full max-w-[1200px] items-end px-4 data-[center='true']:items-end data-[center='true']:justify-center data-[direction='true']:justify-end md:items-center md:px-0"
    >
      <div className="flex w-full max-w-156 flex-col py-8">
        <h1
          data-center={direction === "center"}
          className={`heading-${index} -translate-x-[20%] text-center font-sans text-2xl text-white/80 opacity-0 data-[center='true']:translate-x-0 data-[center='true']:-translate-y-[20%] data-[center='true']:text-center md:text-left md:text-5xl`}
        >
          {heading}
        </h1>
        {description && (
          <p
            data-center={direction === "center"}
            className={`desc-${index} mt-5 mb-2.5 -translate-x-[20%] text-center text-sm opacity-0 data-[center='true']:translate-x-0 data-[center='true']:-translate-y-[20%] data-[center='true']:text-center md:text-left md:text-base`}
          >
            {description}
          </p>
        )}
        {content.map((elem, i) => {
          return (
            <div
              key={i}
              data-center={direction === "center"}
              className={`content-${index} flex -translate-x-[20%] flex-col opacity-0 data-[center='true']:translate-x-0 data-[center='true']:-translate-y-[20%] data-[center='true']:text-center`}
            >
              <h2
                className={`mt-5 text-center text-sm font-semibold uppercase md:text-left md:text-lg`}
              >
                {elem.heading}
              </h2>
              <p
                className={`mb-2.5 text-center text-sm md:text-left md:text-base`}
              >
                {elem.description}
              </p>
            </div>
          );
        })}
        {index === 1 && (
          <div className="badge mt-5    flex -translate-x-[20%] gap-2 opacity-0 justify-center sm:justify-normal  ">
            <Image
              className="h-16 w-fit object-contain"
              src="/badge/googleplay.png"
              width={1366}
              height={689}
              alt="badge"
            />
            <Image
              className="h-16 w-fit object-contain"
              src="/badge/appstore.png"
              width={1366}
              height={689}
              alt="badge"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Intro;
