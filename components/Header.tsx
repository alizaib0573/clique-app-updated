import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  goToLabel: (label: string) => void;
};

const Header: React.FC<Props> = ({ goToLabel }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <header
        data-active={active}
        className="fixed top-0 left-0 z-40 mx-2 my-2 flex w-[calc(100%-16px)] items-center justify-between gap-2 rounded py-2 pr-4 pl-2 font-sans text-white backdrop-blur-lg data-[active='true']:rounded-b-none md:w-full md:items-center md:px-8 md:py-6 md:backdrop-blur-none"
      >
        <div className="flex items-center gap-16">
          <Link href="/" className="size-10">
            <Image
              className="h-full w-full object-contain"
              alt="logo"
              src="/logo.png"
              width={1028}
              height={1028}
            />
          </Link>
          <p className="hidden font-mono text-sm md:block">
            Premium & Immersive Apps for
            <br /> Artists, Creators & Brands
          </p>
        </div>
        <button
          onClick={() => setActive((prev) => !prev)}
          className="w-6 text-white md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23 16"
            fill="currentColor"
          >
            <circle cx="1.6" cy="1.67" r="1.25" />
            <circle cx="11.67" cy="1.67" r="1.25" />
            <circle cx="21.75" cy="1.67" r="1.25" />
            <circle cx="1.6" cy="14.33" r="1.25" />
            <circle cx="11.67" cy="14.33" r="1.25" />
            <circle cx="21.75" cy="14.33" r="1.25" />
          </svg>
        </button>
        <div className="group relative hidden h-10 w-10 items-center justify-center gap-10 rounded transition-all md:flex">
          <div className="absolute top-10 right-0 flex flex-col pt-2.5">
            <div className="flex flex-col gap-1 rounded p-2">
              <button
                onClick={() => goToLabel("direct-to-fan")}
                className="cursor-pointer text-right font-mono text-lg whitespace-nowrap uppercase transition duration-300 hover:text-red-500 hover:drop-shadow-[0_0_10px_red]"
              >
                Direct to Fan
              </button>
               <button
                onClick={() => goToLabel("monetization")}
                className="cursor-pointer text-right font-mono text-lg whitespace-nowrap uppercase transition duration-300 hover:text-red-500 hover:drop-shadow-[0_0_10px_red]"
              >
                Your App Your Features
              </button>
              <button
                onClick={() => goToLabel("your-app")}
                className="cursor-pointer text-right font-mono text-lg whitespace-nowrap uppercase transition duration-300 hover:text-red-500 hover:drop-shadow-[0_0_10px_red]"
              >
                Monetization
              </button>

               <button
                onClick={() => goToLabel("how-it-works")}
                className="cursor-pointer text-right font-mono text-lg whitespace-nowrap uppercase transition duration-300 hover:text-red-500 hover:drop-shadow-[0_0_10px_red]"
              >
                How it works
              </button>
             
              <Link
                href="/#contact"
                className="cursor-pointer text-right font-mono text-lg whitespace-nowrap uppercase transition duration-300 hover:text-red-500 hover:drop-shadow-[0_0_10px_red]"
              >
                Create Your App
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div
        data-active={active}
        className="pointer-events-none fixed top-0 left-0 z-30 mx-2 flex w-[calc(100%-16px)] flex-col gap-2 rounded-b px-4 py-2 opacity-0 backdrop-blur-lg transition-all duration-500 data-[active='true']:pointer-events-auto data-[active='true']:top-16 data-[active='true']:opacity-100"
      >
        {/* <Link
          onClick={() => setActive(false)}
          href="/comparison"
          className="text-bold text-lg"
        >
          CLIQUE VS EVERYONE
        </Link> */}
        <button
          onClick={() => {
            setActive(false);
            goToLabel("direct-to-fan");
          }}
          className="text-bold cursor-pointer text-left text-lg uppercase"
        >
          Direct to Fan
        </button>
        <button
          onClick={() => {
            setActive(false);
            goToLabel("monetization");
          }}
          className="text-bold cursor-pointer text-left text-lg uppercase"
        >
          Your App Your Features
        </button>
        <button
          onClick={() => {
            setActive(false);
            goToLabel("your-app");
          }}
          className="text-bold cursor-pointer text-left text-lg uppercase"
        >
          Monetization
        </button>
        <button
          onClick={() => {
            setActive(false);
            goToLabel("how-it-works");
          }}
          className="text-bold cursor-pointer text-left text-lg uppercase"
        >
          How it works
        </button>
        
        <Link
          onClick={() => setActive(false)}
          href="/#contact"
          className="text-bold cursor-pointer text-lg uppercase"
        >
          CREATE YOUR WORLD
        </Link>
      </div>
    </>
  );
};

export default Header;
