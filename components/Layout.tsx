import localFont from "next/font/local";
import InteractiveGradient from "./InteractiveGradient/InteractiveGradient";
import Header from "./Header";
import Footer from "./Footer";
import React, { useRef } from "react";
import { gsap } from "gsap";

const riftonNorm = localFont({
  src: "./fonts/rifton-norm-bold.woff",
  weight: "700",
  variable: "--local-font-rifton-norm",
});

const rubik = localFont({
  src: "./fonts/rubik-regular.woff2",
  weight: "400",
  variable: "--local-font-rubik",
});

type ChildWithTimelineProps = {
  tl: React.RefObject<GSAPTimeline | null>;
};

type Props = {
  children:
    | React.ReactElement<ChildWithTimelineProps>
    | React.ReactElement<ChildWithTimelineProps>[];
};

const Layout: React.FC<Props> = ({ children }) => {
  const tl = useRef<GSAPTimeline>(null);

  const goToLabel = (label: string) => {
    const st = tl.current?.scrollTrigger;
    if (!st) return;

    const y = st.labelToScroll(label);
    gsap.to(window, { duration: 1, scrollTo: y });
  };

  return (
    <main
      className={`${riftonNorm.variable} ${rubik.variable} relative bg-black font-mono text-white`}
    >
      <div className="fixed inset-0 h-full w-full">
        <InteractiveGradient
          color1="#000000"
          color2="#000000"
          color3="#bababa"
          color4="#000000"
        />
      </div>
      <Header goToLabel={goToLabel} />
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { tl }) : child,
      )}
      <Footer />
    </main>
  );
};

export default Layout;
