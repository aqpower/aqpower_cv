import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import { InsIcon } from "@/components/icons/InsIcon";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

export const RESUME_DATA = {
  name: "Jiong Xiao",
  initials: "JX",
  location: "China, Jiangxi, NanChang",
  locationLink: "https://www.google.com/maps/place/%E4%B8%AD%E5%9B%BD%E6%B1%9F%E8%A5%BF%E7%9C%81%E5%8D%97%E6%98%8C%E5%B8%82/@28.6808292,115.7395766,11z/data=!3m1!4b1!4m6!3m5!1s0x343ab856f20dafb1:0xf180919945bad83e!8m2!3d28.6820199!4d115.8579399!16zL20vMDIyOW41?entry=ttu",
  about:
    "a Web-Designer, CSer and a Dreamer!",
  summary:
    "Passionate about Web development, I've explored projects in rCore Tutorial and TCP protocol. Skilled in TypeScript, Node.js, CSS, and Vue. With a focus on diligence and problem-solving, I aim to fuse creativity into Web Design and CS. My goal is to excel in Web Design, contributing to CS through ongoing learning and practical projects.",
  avatarUrl: "https://jgox-image-1316409677.cos.ap-guangzhou.myqcloud.com/avatar.png",
  personalWebsiteUrl: "https://aqpower.cn",
  contact: {
    email: "jiongxnext0809@gmail.com",
    tel: "+8613657965179",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aqpower",
        icon: GitHubIcon,
      },
      {
        name: "Ins",
        url: "https://www.instagram.com/aqpower28/",
        icon: InsIcon,
      },
    ],
  },
  education: [
    {
      school: "Nanchang Hangkong University",
      degree: "Computer Science and Technology discipline",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "WebRTC",
  ],
  projects: [
    {
      title: "EasyBook",
      techStack: [
        "Vue",
        "TypeScript",
        "Vite",
        "SpringBoot",
        "Tailwind CSS",
        "Alibaba Cloud",
      ],
      description: "colorful book, endless sharing!",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "http://easybook.aqpower.cn",
      },
    },
    {
      title: "rCoreTutorial",
      techStack: [
        "Rust",
        "OS",
        "qemu",
      ],
      description: "write an OS which can run on RISC-V in Rust from scratch!",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "MessageWall",
      techStack: [
        "Vue",
        "Node.js",
      ],
      description: "An anonymous message and photo board platform.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "http://messagewall.aqpower.cn",
      },
    },
  ],
} as const;
