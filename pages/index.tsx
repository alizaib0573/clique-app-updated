import Form from "@/components/Form";
import InteractiveGradient from "@/components/InteractiveGradient/InteractiveGradient";
import Intro from "@/components/Intro";
import Render from "@/components/Render";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { Group } from "three";

export default function Home({
  tl,
}: {
  tl: React.RefObject<GSAPTimeline | null>;
}) {
  const [ready, setReady] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<Group>(null);
  const textRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!mobileRef.current || !textRef.current || !containerRef.current)
        return;
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: `(min-width: 800px)`,
          isMobile: `(max-width: 799px)`,
        },
        (context) => {
          let { isMobile } = context.conditions as { isMobile: boolean };

          const mobile = mobileRef.current!;
          const text = textRef.current!;

          tl.current = gsap
            .timeline({
              scrollTrigger: {
                trigger: containerRef.current!,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                // markers: true,
                end: () => `+=${innerHeight * 20} bottom`,
              },
            })
            .to(text, { opacity: 0 })

            .to(
              mobile.position,
              { x: isMobile ? 0 : 3, y: isMobile ? 1 : 0 },
              "<",
            )
            .to(
              mobile.rotation,
              { x: Math.PI * 0.45, y: Math.PI * 0.2, z: -Math.PI * 0.45 },
              "<",
            )
            .to(".heading-0", { x: "0%", opacity: 1 }, "<")
            .to(".desc-0", { x: "0%", opacity: 1 }, "<0.2")
            .to(mobile.position, { x: isMobile ? 0 : 4, y: isMobile ? 0.8 : 0 })
            .to(
              mobile.rotation,
              { x: Math.PI * 0, y: Math.PI * 1, z: Math.PI * 0 },
              "<",
            )
            .to(".heading-0", { x: "-20%", opacity: 0 }, "<")
            .to(".desc-0", { x: "-20%", opacity: 0 }, "<")
            .to(".heading-1", { x: "0%", opacity: 1 }, "<0.4")
            .to(".desc-1", { x: "0%", opacity: 1 }, "<0.2")
            .to(".badge", { x: "0%", opacity: 1 }, "<0.2")
            .addLabel("direct-to-fan")
            .to(mobile.position, { x: isMobile ? 0 : -4 })
            .to(
              mobile.rotation,
              { x: Math.PI * 0, y: Math.PI * 3, z: Math.PI * 0 },
              "<",
            )
            .to(".heading-1", { x: "-20%", opacity: 0 }, "<")
            .to(".desc-1", { x: "-20%", opacity: 0 }, "<")
            .to(".badge", { x: "-20%", opacity: 0 }, "<")
            .to(".heading-2", { x: "0%", opacity: 1 }, "<0.4")
            .to(".desc-2", { x: "0%", opacity: 1 }, "<0.2")
            .to(".content-2", { x: "0%", opacity: 1, stagger: 0.2 }, "<0.2")
            .addLabel("monetization")
            .to(mobile.position, { x: isMobile ? 0 : 0 })
            .to(
              mobile.rotation,
              { x: Math.PI * 0, y: Math.PI * 2, z: Math.PI * 0 },
              "<",
            )
            .to(".heading-2", { x: "-20%", opacity: 0 }, "<")
            .to(".desc-2", { x: "-20%", opacity: 0 }, "<")
            .to(".content-2", { x: "-20%", opacity: 0 }, "<")
            .to(".heading-3", { x: "0%", opacity: 1 }, "<0.4")
            .to(".content-3", { x: "0%", opacity: 1, stagger: 0.2 }, "<0.2")
            .addLabel("your-app")
            // .to(mobile.position, { x: isMobile ? 0 : -4 })
            // .to(
            //   mobile.rotation,
            //   { x: Math.PI * 0, y: -Math.PI * 1, z: Math.PI * 0 },
            //   "<",
            // )
            // .to(".heading-3", { x: "-20%", opacity: 0 }, "<")
            // .to(".content-3", { x: "-20%", opacity: 0 }, "<")
            // .to(".heading-4", { x: "0%", opacity: 1 }, "<0.4")
            // .to(".content-4", { x: "0%", opacity: 1, stagger: 0.2 }, "<0.2")
            // .to(mobile.position, { x: isMobile ? 0 : 0 })
            // .to(mobile.rotation, { x: Math.PI * 2, y: 0, z: 0 }, "<")
            // .to(".heading-4", { x: "-20%", opacity: 0 }, "<")
            // .to(".content-4", { x: "-20%", opacity: 0 }, "<")
            // .to(".heading-5", { x: "0%", opacity: 1 }, "<0.4")
            // .addLabel("how-it-works")
            // .to(".content-5", { x: "0%", opacity: 1, stagger: 0.2 }, "<0.2");
        },
      );
    },
    {
      scope: containerRef,
      dependencies: [ready, textRef],
    },
  );

  return (
    <>
      <Head>
        <title>Clique Apps</title>
      </Head>
      <section className="relative flex flex-col">
        <div ref={containerRef} className="relative h-screen w-full">
          <Image
            ref={textRef}
            className="absolute inset-1/2 z-10 h-full w-[80%] -translate-1/2 object-contain md:w-[40%]"
            src="/text.png"
            width={1366}
            height={689}
            alt="3d-text"
          />
          <Render
            containerRef={containerRef}
            mobileRef={mobileRef}
            onReady={() => setReady(true)}
          />
          {/* <Intro
            index={0}
            heading="Own your world"
            description="Premium & Immersive Apps for Artists, Creators & Brands"
            content={[]}
          /> */}
          <Intro
            index={1}
            heading="Direct to fan"
            description="Fans download YOUR  app, Not another social media or “Tech Platform-”"
            content={[]}
          />
         
          <Intro
            index={2}
             direction="right"
            heading="Your App Your Features"
            content={[
              {
                heading: "Push Notifications",
                description:
                  "Send automated push notifications upon “Going Live” or when sending a direct message.",
              },
              {
                heading: "4K Streaming Events",
                description:
                  "Live shows, Studio sessions, Listening parties and more.",
              },
              {
                heading: "Go Live",
                description:
                  "Behind the scenes, Q&A, Work life and personal life.",
              },
              {
                heading: "Presale & DM’s",
                description:
                  "Distribute unique presale codes and direct messages to all your fans or any audience subset you create.",
              },
              {
                heading: "Analytics Dashboard",
                description:
                  "Metrics derived from engagement, Frequency and monetization of Content, Subscribers and events.",
              },
            ]}
          />
           <Intro
            index={3}
            direction="left"
            heading="MONETIZATION"
            description="Engage with Your fans in your own private community."
            content={[
              {
                heading: "Integrated Event Ticketing",
                description:
                  "Create endless VIP experiences for your top fans through our turnkey ticketing suite.",
              },
              {
                heading: "Subscriptions",
                description:
                  "Provide unfiltered access and exclusive experience for your biggest fans with monthly or annual subscriptions.",
              },
              {
                heading: "Premium Content",
                description:
                  "Sell virtual classes, Lessons, Trainings, Live performances and more.",
              },
              {
                heading: "Store/Merch",
                description:
                  "Most exclusive “You” items for your fans as well as tickets for in-person events or streaming shows.",
              },
            ]}
          />
          {/* <Intro
            index={5}
            heading="How it works"
            content={[
              {
                heading: "No Upfront Costs",
                description:
                  "Custom Designed & Branded Creators own all IP, content & subscriptions",
              },
            ]}
            direction="right"
          /> */}
          {/* <Intro
            index={5}
            heading="Create content"
            content={[
              {
                heading: "GO LIVE",
                description: "Behind the scenes, Q&A, work life, personal life",
              },
              {
                heading: "4K",
                description:
                  "Live shows, studio sessions, listening parties, storytellers",
              },
            ]}
            direction="right"
          /> */}
        </div>
        <Form />
      </section>
    </>
  );
}
