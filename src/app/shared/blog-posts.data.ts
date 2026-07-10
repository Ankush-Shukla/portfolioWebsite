export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tag: 'Blog' | 'Research' | 'Experience' | 'Reflection';
  content: string[];
}

// Add your real posts here. Each entry automatically gets its own page at
// /writing/<slug> and shows up in the list on the Writing page —
// no routing or template changes needed, just add an object below.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'fear-of-failure',
    title: 'The Fear of Failure After Success',
    summary:
      "Winning my first hackathon taught me something unexpected: success can create a fear of failing. This is a reflection on overcoming that fear, embracing uncertainty, and why growth begins the moment we choose to try again.",
    date: 'Jul 2026',
    tag: 'Reflection',
    content: [
      "Most people think fear comes before success. They imagine the hardest part is taking the first step—entering the competition, submitting the project, or putting themselves out there. But sometimes, the real fear arrives after you've already succeeded.",

      "I learned this after winning my first hackathon. It was one of the proudest moments of my academic journey. I had worked hard, built something I genuinely believed in, and somehow found myself standing among the winners. For a brief moment, I felt unstoppable.",

      "Then something unexpected happened.",

      "I stopped participating in hackathons and technical events.",

      "Not because I lost interest. Not because I became too busy. I stopped because I became afraid.",

      "Afraid that the next competition wouldn't end the same way. Afraid that people would think my first win was just luck. Afraid that I wouldn't be able to live up to the expectations I had unknowingly created for myself.",

      "Ironically, before winning that hackathon, I wasn't afraid of failure at all. I had nothing to lose. Every competition was simply another opportunity to learn, experiment, and improve. But after success, every opportunity suddenly felt like a test.",

      "I realized I wasn't afraid of losing a competition. I was afraid of losing the identity that came with winning one.",

      "That fear slowly became more limiting than failure itself. Every event I skipped felt like I was protecting my success, but in reality, I was protecting my comfort zone.",

      "It reminded me of the Greek myth of Icarus.",

      "Most people know the story as a warning against arrogance. Icarus escaped imprisonment using wings crafted by his father, Daedalus. Before taking flight, his father warned him not to fly too close to the sea or too close to the sun. Stay balanced, he said.",

      "But overwhelmed by the joy of flying, Icarus soared higher and higher until the sun melted the wax holding his wings together, sending him crashing into the sea.",

      "We often interpret this story as a lesson about pride. But I think there's another lesson hidden within it.",

      "Many of us never even allow ourselves to fly.",

      "We're so worried about falling that we stay grounded. We become attached to protecting our achievements instead of pursuing new ones. Success becomes a cage rather than a launchpad.",

      "The fear of failure is deceptive. It disguises itself as logic. It tells us to wait until we're more prepared, to skip this one opportunity, or to try next time instead. At first, those thoughts sound reasonable. Over time, they quietly build a life of hesitation.",

      "The biggest risk isn't failing. The biggest risk is never giving yourself another chance.",

      "Eventually, I realized something that changed my perspective completely: winning once doesn't define me, and failing once won't define me either.",

      "Neither success nor failure is an identity. They are simply outcomes. What truly matters is the willingness to keep showing up, to keep learning, and to keep building.",

      "Every person we admire—whether they're an entrepreneur, engineer, athlete, artist, or creator—has failed more times than most of us ever see. Their success wasn't built on avoiding failure. It was built on continuing despite it.",

      "Today, whenever I hesitate before applying for something new, I ask myself a different question.",

      "\"What will I miss if I don't try?\"",

      "That question shifts my perspective every time.",

      "Because success is temporary. Failure is temporary. But growth belongs to those who continue to participate.",

      "Winning my first hackathon taught me what I was capable of. The fear that followed taught me something even more valuable.",

      "Success should never become the reason we stop taking risks. It should become the reason we take even bigger ones.",

      "If there's one lesson I've taken from both my own journey and the story of Icarus, it's this:",

      "\"Don't let the fear of falling stop you from flying.\"",
    ],
  },
];