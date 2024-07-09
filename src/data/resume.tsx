import { Icons } from "@/components/icons";

export const DATA = {
  name: "Priyanka Pulugu",
  initials: "PP",
  url: "https://priyankapulugu.site/", 
  locationLink: "https://maps.app.goo.gl/xqmoVTxvRCgqZQyq5",
  description:
    "UI/Front-end Developer with 3+ years of experience in React development, specializing in responsive user interfaces and performance optimization.",
  summary:
    "I'm a UI Developer with 3+ years experienced React Developer with hands-on experience in identifying web-based user interactions along with designing & implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs & wireframes into high-quality code, and writing application interface code via Javascript and ReactJS workflows. Adept at monitoring & maintaining frontend performance and troubleshooting & debugging the same to bolster overall performance.",
  avatarUrl: "/Me.jpg", 
  skills: [
    "CSS",
    "CSS3",
    "HTML5",
    "HTML",
    "Bootstrap",
    "JavaScript",
    "Material UI",
    "Typescript",
    "ReactJS",
  ],
  contact: {
    email: "sunnypriyanka28@gmail.com",
    tel: "+917386596698",
    social: {
      GitHub: {
        url: "https://github.com/sunnypriyanka",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/priyanka-pulugu-1838a3232/",
        icon: Icons.linkedin,
      },
    },
  },

  work: [
    {
      company: "TATA ELXSI",
      href: "https://www.tataelxsi.com/",
      badges: [],
      location: "India",
      title: "UI & Full stack Developer",
      logoUrl: "/tata-elxsi-logo.webp", 
      start: "October 2021",
      end: "Present",
      description:
        "Developed dynamic web-based user interactions using React concepts. Translated designs into high-quality code. Debugged and optimized application performance. Implemented front-end architectures and developed user-facing features. Monitored and improved front-end performance.",
    },
  ],
  education: [
    {
      school: "Nagarjuna University",
      href: "https://www.nagarjunauniversity.ac.in/",
      degree: "Bachelor of Library and Information Science",
      logoUrl: "/nagarjuna-university-logo.jpeg", 
      start: "2019",
      end: "2020",
    },
    {
      school: "Bapatla Engineering Collage",
      href: "https://www.becbapatla.ac.in/",
      degree: "B.TECH (Electrical and Electronics Engineering)",
      logoUrl: "/bapatla-engineering-college-logo.png", 
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;