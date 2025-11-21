import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
