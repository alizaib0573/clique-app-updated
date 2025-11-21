import { Cancel, Check } from "../Icons";

type CompareData = {
  heading: string;
  clique: React.JSX.Element;
  appPasses: React.JSX.Element;
  fanfix: React.JSX.Element;
  patreon: React.JSX.Element;
};

export const compareData: CompareData[] = [
  {
    heading: "Custom Branded App (Your Logo & Color)",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
  },
  {
    heading: "Creator Owns All IP & Data",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Partial</p>
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Partial</p>
      </div>
    ),
  },
  {
    heading: "Fans Download *Your* App",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
  },
  {
    heading: "Export Fan Data / Emails",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
  },
  {
    heading: "Full Analytics & Insights",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Basic</p>
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Limited</p>
      </div>
    ),
  },
  {
    heading: "Revenue Split (Best in Industry)",
    clique: (
      <div className="flex items-center gap-2">
        <div className="hidden size-6 md:block">
          <Check />
        </div>
        <p className="text-xs md:text-lg">(Lower than 10%)</p>
      </div>
    ),
    appPasses: (
      <div className="flex items-center gap-2">
        <div className="hidden size-6 md:block">
          <Check />
        </div>
        <p className="text-xs md:text-lg">(90/10)</p>
      </div>
    ),
    fanfix: (
      <div className="flex items-center gap-2">
        <div className="hidden md:size-2">
          <Cancel />
        </div>
        <p className="text-xs md:text-lg">(80/20)</p>
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">(5 - 12% + fees)</p>
      </div>
    ),
  },
  {
    heading: "4K Live Streaming / Events",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Beta</p>
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">via Youtube embed</p>
      </div>
    ),
  },
  {
    heading: "Ticketing & Presales",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">External</p>
      </div>
    ),
  },
  {
    heading: "Push Notification / Live Widgets",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Basic</p>
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Email only</p>
      </div>
    ),
  },
  {
    heading: "In-App Community & Rewards",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Group Chat</p>
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Threads</p>
      </div>
    ),
  },
  {
    heading: "Monetize Subscriptions, Events, Merch, Lessons",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Limited</p>
      </div>
    ),
    fanfix: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Limited</p>
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Limited</p>
      </div>
    ),
  },
  {
    heading: "Design Freedom (No Templates)",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
  },
  {
    heading: "No Upfront Cost",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    patreon: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
  },
  {
    heading: "Scales for Artists, Brands, & Creators",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Mostly creators</p>
      </div>
    ),
  },
  {
    heading: "Fans Stay With You (Data Portability)",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    fanfix: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    patreon: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
  },
  {
    heading: "Follower Minimum Required",
    clique: (
      <div className="flex items-center gap-2">
        <p className="text-xs md:text-lg">200,000+ Followers </p>
      </div>
    ),
    appPasses: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">~100K</p>
      </div>
    ),
    fanfix: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg"> ~10K</p>
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <div className="hidden size-6 md:block">
          <Cancel />
        </div>
        <p className="text-xs md:text-lg">None</p>
      </div>
    ),
  },
  {
    heading: "Transparent Fees / No Hidden Costs ",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="size-6 md:size-8">
        <Cancel />
      </div>
    ),
    fanfix: <div className="size-4 bg-white md:size-6"></div>,
    patreon: <div className="size-4 bg-white md:size-6"></div>,
  },
  {
    heading: "Built-In Monetization Tools (1:1, DMs, Classes)",
    clique: (
      <div className="size-6 md:size-8">
        <Check />
      </div>
    ),
    appPasses: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Limited</p>
      </div>
    ),
    fanfix: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Basic</p>
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <div className="size-2 min-w-2 bg-white"></div>
        <p className="text-xs md:text-lg">Basic</p>
      </div>
    ),
  },
  {
    heading: "Best For",
    clique: (
      <div className="flex items-center gap-2">
        <p className="text-xs md:text-lg">
          Artists, Brands, & Influencers wanting full control
        </p>
      </div>
    ),
    appPasses: (
      <div className="flex items-center gap-2">
        <p className="text-xs md:text-lg">Platform creators</p>
      </div>
    ),
    fanfix: (
      <div className="flex items-center gap-2">
        <p className="text-xs md:text-lg">Gen Z creators</p>
      </div>
    ),
    patreon: (
      <div className="flex items-center gap-2">
        <p className="text-xs md:text-lg">General creators</p>
      </div>
    ),
  },
];
