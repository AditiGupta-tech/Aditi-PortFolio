import {
  backend,
  mobile,
  web,
} from "../assets";

const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "experiences", title: "Experiences" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Data Structure and Algorithms",
    icon: mobile,
  },
  {
    title: "Open Source Enthusiast",
    icon: backend,
  },
];

const techCategories = [
  {
    title: "Languages",
    icon: "Laptop", 
    color: "#ff007f",
    type: "tech",
    items: [
      { name: "C", icon: "Code", proficiency: 90 },
      { name: "C++", icon: "TbBrandCpp", proficiency: 95 },
      { name: "Python", icon: "FaPython", proficiency: 75 },
      { name: "SQL", icon: "TbSql", proficiency: 75 },
      { name: "JavaScript", icon: "IoLogoJavascript", proficiency: 85 },
      { name: "TypeScript", icon: "SiTypescript", proficiency: 60 },
    ],
  },
  {
    title: "Frontend Development",
    icon: "Palette", 
    color: "#00fff7",
    type: "tech",
    items: [
      { name: "HTML5", icon: "FaHtml5", proficiency: 98 },
      { name: "CSS3", icon: "FaCss3Alt", proficiency: 96 },
      { name: "Tailwind CSS", icon: "SiTailwindcss", proficiency: 97 },
      { name: "React.js", icon: "FaReact", proficiency: 92 },
      { name: "Next.js", icon: "SiNextdotjs", proficiency: 95 },
    ],
  },
  {
    title: "Backend Development",
    icon: "Settings", 
    color: "#50fa7b",
    type: "tech",
    items: [
      { name: "Node.js", icon: "FaNodeJs", proficiency: 90 },
      { name: "Express.js", icon: "SiExpress", proficiency: 80 },
      { name: "ThunderClient", icon: "BsThunderbolt", proficiency: 95 },
    ],
  },
  {
    title: "Databases",
    icon: "Database", 
    color: "#ffc107",
    type: "tech",
    items: [
      { name: "MySQL", icon: "DiMysql", proficiency: 75 },
      { name: "MongoDB", icon: "DiMongodb", proficiency: 90 },
    ],
  },
  {
    title: "Tools",
    icon: "Hammer", 
    color: "#9933ff",
    type: "tech",
    items: [
      { name: "Visual Studio Code", icon: "SiVsco", proficiency: 98 },
      { name: "Figma", icon: "SiFigma", proficiency: 90 },
      { name: "Canva", icon: "SiCanva", proficiency: 95 },
    ],
  },
  {
    title: "DevOps",
    icon: "Workflow", 
    color: "#e34c26",
    type: "tech",
    items: [
      { name: "Git", icon: "FaGitAlt", proficiency: 80 },
      { name: "GitHub", icon: "FaGithub", proficiency: 90 },
    ],
  },
  {
    title: "Soft Skills",
    icon: "Usercheck", 
    color: "#F472B6",
    type: "soft",
    items: [
  { name: "Communication", icon: "MessageSquare", description: "Expressing my thoughts better", proficiency: 93 },
  { name: "Leadership", icon: "Users", description: "Growing by leading, guiding and owning team outcomes", proficiency: 95 },
  { name: "Adaptability", icon: "RefreshCw", description: "Thrived the industry through change", proficiency: 90 },
  { name: "Quick Learner", icon: "Bolt", description: "Learning and adapting to tech at pace", proficiency: 85 },
  { name: "Networking", icon: "Share2", description: "Collaborating with like-minded people", proficiency: 90 },
  { name: "Time Management", icon: "Clock", description: "Balancing chaos with calm execution", proficiency: 88 },
],
  },
];

const projects = [
  {
    title: "Zeen",
    description:
      "An inclusive learning space tailored for children with dyslexia, with comprehensive awareness tools for parents and educators.",
    tech: [
      "ViteJS",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "MediaPipe",
      "MongoDB",
      "JSONWebToken",
      "BcryptJS",
    ],
    code: "#projects",
    demo: "#projects",
    live: "#projects",
    screenshots: [
      "/Zeen/1.png", "/Zeen/2.png", "/Zeen/3.png", "/Zeen/4.png", "/Zeen/5.png", "/Zeen/6.png", 
      "/Zeen/7.png", "/Zeen/8.png", "/Zeen/9.png", "/Zeen/10.png", "/Zeen/11.png", "/Zeen/12.png", "/Zeen/13.png", "/Zeen/14.png", "/Zeen/15.png", 
      "/Zeen/16.png", "/Zeen/17.png", "/Zeen/18.png", "/Zeen/19.png", "/Zeen/20.png", "/Zeen/21.png", "/Zeen/22.png", "/Zeen/23.png", "/Zeen/24.png", "/Zeen/25.png", "/Zeen/26.png", 
      "/Zeen/27.png", "/Zeen/28.png", "/Zeen/29.png", "/Zeen/30.png",
    ],
  },
  {
    title: "NeoNest",
    description:
      "An AI-powered C code explainer that parses and explains C syntax with inline code blocks and examples using OpenAI API integration.",
    tech: [
      "NextJS",
      "TailwindCSS",
      "GeminiAPI",
      "MongoDB",
      "JSONWebToken",
      "BcryptJS",
    ],
    code: "https://github.com/AditiGupta-tech/neonest",
    demo: "https://youtu.be/YGtAwGaNsEE",
    live: "https://neonest-henna.vercel.app/",
    screenshots: ["/Neo/1.png", "/Neo/2.png", "/Neo/3.png", "/Neo/4.png", "/Neo/5.png", "/Neo/6.png", 
      "/Neo/7.png", "/Neo/8.png", "/Neo/9.png", "/Neo/10.png", "/Neo/11.png", "/Neo/12.png", "/Neo/13.png", "/Neo/14.png", "/Neo/15.png", 
      "/Neo/16.png", "/Neo/17.png", "/Neo/18.png", "/Neo/19.png", "/Neo/20.png", "/Neo/21.png",],
  },
  {
    title: "MediSync",
    description:
      "A hospital management app solving overcrowding, mismanagement and communication gaps with AI-powered report summaries, doctor trackings and smart appointments.",
    tech: ["Figma"],
    code: "#projects",
    demo: "https://youtu.be/ifYxC-juFEY",
    live: "#projects",
    screenshots: ["/Medi/1.png", "/Medi/2.png", "/Medi/3.png", "/Medi/4.png", "/Medi/5.png", "/Medi/6.png", 
      "/Medi/7.png", "/Medi/8.png", "/Medi/9.png", "/Medi/10.png", "/Medi/11.png", "/Medi/12.png", "/Medi/13.png", "/Medi/14.png", "/Medi/15.png", 
      "/Medi/16.png", "/Medi/17.png",],
  },
];

const achievements = [
  {
    name: "Finalist - Innovate4Humanity'25, NSUT",
    description: (
      <>
        Built a{" "}
        <span className="text-yellow-400 font-semibold underline underline-offset-2">
          hospital management app prototype
        </span>{" "}
        using <span className="text-pink-400 font-bold">Figma</span>. <br />
        Secured a place amongst{" "}
        <span className="text-green-400 font-bold">Top 36</span> teams.
      </>
    ),
    tags: [
      { name: "Hackathon", color: "text-pink-400 border-pink-400" },
      { name: "UI/UX", color: "text-yellow-400 border-yellow-400" },
      { name: "Figma", color: "text-yellow-400 border-yellow-400" },
      { name: "HospitalManagement", color: "text-yellow-400 border-yellow-400" },
    ],
    image: "/images/hackverse.png",
  },
  {
    name: "Semi Finalist - Build With India'25, Google",
    description: (
      <>
        Proposed a platform for{" "}
        <span className="text-yellow-400 font-medium underline underline-offset-2">
          jobs and internships
        </span>{" "}
        along with resources. <br />
        Placed in{" "}
        <span className="text-green-400 font-bold">Top 500</span> out of{" "}
        <span className="text-pink-400 font-bold">25,128</span> registrations.
      </>
    ),
    tags: [
      { name: "Google", color: "text-blue-400 border-blue-400" },
      { name: "Innovation", color: "text-cyan-400 border-cyan-400" },
      { name: "UI/UX", color: "text-cyan-400 border-cyan-400" },
      { name: "Figma", color: "text-cyan-400 border-cyan-400" },
    ],
    image: "/images/codeclash.png",
  },
  {
    name: "Semi Finalist - Smart Delhi Ideathon'25, GGSIPU | Vigyan Bhawan",
    description: (
      <>
        <span className="font-bold text-blue-400">Track: SDI002</span> <br />
        Proposed a platform for{" "}
        <span className="underline underline-offset-2 text-cyan-400 font-medium">
          waste management at source
        </span>{" "}
        with AI-powered waste scanner and scrap dealings. <br />
        Achieved{" "}
        <span className="text-green-400 font-bold">Top 33</span> rank in track.
      </>
    ),
    tags: [
      { name: "SDI", color: "text-pink-400 border-pink-400" },
      { name: "WasteManagement", color: "text-yellow-400 border-yellow-400" },
      { name: "UI/UX", color: "text-yellow-400 border-yellow-400" },
      { name: "Figma", color: "text-yellow-400 border-yellow-400" },
    ],
    image: "/sdi.jpg",
  },
  {
    name: "Cleared Round1 - CodeClash 2.0 2025, GGSIPU | Google",
    description: (
      <>
        Developed a full stack wesbite with cutting edge technology for{" "}
        <span className="underline underline-offset-2 text-cyan-400 font-medium">
          new born care
        </span>{" "}
        with AI-powered schedule trackers and smart loggings. <br />
        Achieved a place amongst selected teams for mentoring round.
      </>
    ),
    tags: [
      { name: "TeamSynTechs", color: "text-blue-400 border-blue-400" },
      { name: "FullStack", color: "text-cyan-400 border-cyan-400" },
      { name: "CodeClash", color: "text-cyan-400 border-cyan-400" },
      { name: "Baby Care", color: "text-cyan-400 border-cyan-400" },
    ],
    image: "/cc.jpg",
  },
  {
    name: "Participant - AlgoVerse'25, HWI | Microsoft",
    description: (
      <>
        <span className="font-bold text-blue-400">Track: SDI002</span> <br />
        Built a full stack website support for children suffering from{" "}
        <span className="underline underline-offset-2 text-purple-500 font-medium">
          dyslexia and related issues
        </span>{" "}.
      </>
    ),
    tags: [
      { name: "TeamHeuristics", color: "text-pink-400 border-pink-400" },
      { name: "FullStack", color: "text-yellow-400 border-yellow-400" },
      { name: "Dyslexia", color: "text-yellow-400 border-yellow-400" },
      { name: "ChildSupport", color: "text-yellow-400 border-yellow-400" },
    ],
    image: "/algo.jpg",
  },
];

const experiences = {
  professional: [
    {
      title: "GenAI and Prompt Engineering Training Program",
      company: "IGDTUW",
      duration: "June 2025 – July 2025 (6 weeks)",
      description:
        "Built an AI News Bias Detector using StreamLit, TextBlob, Hugging Face, PyTorch and NewsAPI.",
    },
    {
      title: "Open Source Contributor",
      company: "Social Summer of Code",
      duration: "June 2025 – August 2025",
      description:
        "Contributed frontend components, explored various projects and networked with mentors and admins.",
    },
  ],
  volunteer: [
    {
      title: "Head Coordinator - Event Management",
      company: "Taarangana'25, IGDTUW",
      duration: "Feb 2025 – March 2025",
      description:
        "Contributed creative ideas for the fest, organized events, and led the team efficiently.",
    },
    {
      title: "Public Relations Lead",
      company: "Aarohan'25, BHAV IGDTUW",
      duration: "Dec 2024 – Feb 2025",
      description:
        "Promoted the event with creative strategies, resulting in a 15% increase in participation.",
    },
  ],
  societies: [
    {
      title: "Web Dev Club Member",
      company: "Microsoft Student Chapter, IGDTUW",
      duration: "July 2025 – Present",
      description:
        "Polishing the official website with engaging updates and UI enhancements.",
    },
    {
      title: "Content Team",
      company: "Assetmerkle, IGDTUW",
      duration: "Sep 2024 – Present",
      description:
        "Created content for Twitter, LinkedIn, Instagram. Currently leading the AM Dev Community content team.",
    },
    {
      title: "Social Media Member",
      company: "HackClub, IGDTUW",
      duration: "Dec 2024 – Present",
      description:
        "Managing social media engagement and content flow for HackClub’s events.",
    },
    {
      title: "Debate & GD Member",
      company: "BHAV, IGDTUW",
      duration: "Sep 2024 – Present",
      description:
        "Sharpening communication and articulation through regular debates and discussions.",
    },
  ],
};

export {
  navLinks,
  services,
  techCategories,
  projects,
  achievements,
  experiences,
};
