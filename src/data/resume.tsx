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
    "Next.js",
    "TailwindCSS",
    "Shadcn UI",
    "Magic UI",
    "Data Visualization",
    "UI/UX Design",
    "State Management",
    "API Integration",
    "Performance Optimization",
    "Google Sheets API",
    "React Components",
    "Node.js",
    "MySQL",
    "Responsive Web Design",
    "Visual Studio",
    "Figma",
    "Visual Studio Code",
    "Git",
    "NPM",
    "Webpack",
    "Jira",
    "Confluence"
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
      title: "Product Designer Portfolio",
      href: "https://praveenmanchi.art/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a portfolio which hosts professional materials that exemplifies user beliefs, skills, qualifications, education, training, and experiences.",
      technologies: [
        "Next.js",
        "Typescript",,
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://praveenmanchi.art/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-0.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Real-time Financial Dashboard",
      href: "",
      dates: "May 2021 - Present",
      active: false,
      description:
        "Developed a modern dashboard layout using React components, created dynamic charts for real-time financial data visualization, implemented investment portfolio features, integrated financial news feed, and optimized application performance.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Data Visualization",
        "UI/UX Design",
        "State Management",
        "API Integration",
        "Performance Optimization",
      ],
      links: [],
      image: "/project-5.png",
      video: "",
    },

    {
      title: "Tackkle - Project finance tracker",
      href: "https://github.com/sunnypriyanka/tackkle-dashboard",
      dates: "June 2021",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Javascript",
        "React.js",
        "Bootstrap",
        "Material UI",
        "HTML",
      ],
      links: [
        {
          type: "Website",
          href: "https://tackkle-dashboard-sunny.herokuapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sunnypriyanka/tackkle-dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "public//project-1.png",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/project-4.png",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    {
      title: "Expenses",
      href: "https://github.com/sunnypriyanka/tackkle-dashboard",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Expense tracker using Google Sheets 📉 as a storage written in React",
      technologies: [
        "ReactJS",
        "MaterialUI",
        "Google Sheets API",
        "react-components",
      ],
      links: [
        {
          type: "Website",
          href: "https://expenses-sunny.herokuapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-3.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
      
    },
    
    {
      title: "Smart Toilet Seat Project",
      href: "",
      dates: "December 2022 - March 2024",
      active: false,
      description:
        "Developed a system for monitoring patient healthcare using excretion information, maintaining patient excretion profiles, detecting serious diseases, and visualizing information for nursing home staff.",
      technologies: [
        "ReactJS",
        "MaterialUI",
        "Node.js",
        "MySQL",
      ],
      links: [],
      image: "/NDA.png",
      video: "",
    },
    {
      title: "E-commerce Website Redesign",
      href: "",
      dates: "January 2022 - March 2022",
      active: false,
      description:
        "Redesigned B2B e-commerce website to enhance user experience and increase sales. Implemented mobile responsiveness, intuitive navigation, simplified checkout process, and interactive elements.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Web Design",
        "UI/UX Design",
      ],
      links: [],
      image: "/NDA.png",
      video: "",
    },
    // {
    //   title: "Finance Dashboard",
    //   href: "",
    //   dates: "October 2022 - Present",
    //   active: false,
    //   description:
    //     "Designed intuitive dashboard layout for displaying key financial data, implemented customization features, developed user authentication system, and ensured responsive design for desktop and mobile accessibility.",
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Data Visualization",
    //     "UI/UX Design",
    //   ],
    //   links: [],
    //   image: "/NDA.png",
    //   video: "",
    // },
    
  ],
} as const;