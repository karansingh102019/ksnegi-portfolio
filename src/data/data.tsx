"use client";
import { Skill } from "@/types/types";
import { MdEmail, MdLocationOn, MdSchedule } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiCss3,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactbootstrap,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export const skillsData: Skill[] = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "from-orange-500 to-red-500",
    iconColor: "text-orange-500",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "from-blue-500 to-blue-700",
    iconColor: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "from-yellow-400 to-yellow-600",
    iconColor: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "from-blue-500 to-blue-600",
    iconColor: "text-blue-500",
  },
  {
    name: "React",
    icon: SiReact,
    color: "from-cyan-400 to-blue-500",
    iconColor: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "from-gray-100 to-gray-300",
    iconColor: "text-white",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
  },
  {
    name: "Adobe Photoshop",
    icon: SiAdobephotoshop,
    color: "from-blue-600 to-blue-800",
    iconColor: "text-blue-600",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "from-cyan-400 to-blue-500",
    iconColor: "text-cyan-400",
  },
  {
    name: "Adobe Illustrator",
    icon: SiAdobeillustrator,
    color: "from-orange-600 to-yellow-500",
    iconColor: "text-orange-500",
  },
  {
    name: "Adobe XD",
    icon: SiAdobexd,
    color: "from-pink-500 to-purple-600",
    iconColor: "text-pink-500",
  },
  {
    name: "Bootstrap",
    icon: SiReactbootstrap,
    color: "from-purple-500 to-purple-700",
    iconColor: "text-purple-500",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "from-blue-400 to-blue-600",
    iconColor: "text-blue-400",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "from-orange-500 to-red-600",
    iconColor: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "from-gray-400 to-gray-600",
    iconColor: "text-gray-300",
  },
  {
    name: "Sass",
    icon: SiSass,
    color: "from-pink-400 to-pink-600",
    iconColor: "text-pink-400",
  },
];

export const experiences = [
  {
    year: "2025 - Present",
    role: "Frontend Developer",
    company: "Estivasoftech",
    description:
      "Frontend Developer creating responsive, interactive, and high-performance web applications using React, Next.js, and modern front-end technologies.",
  },
  {
    year: "2024 - 2025",
    role: "UI Developer",
    company: "Estivasoftech",
    description:
      "UI Developer turning designs into interactive, responsive, and user-friendly web experiences using React, Next.js, and modern front-end technologies",
  },
  {
    year: "2023 - 2024",
    role: "Ui/Ux Designer",
    company: "Digitechmate",
    description:
      "UI/UX Designer focused on creating clean, user-friendly interfaces and engaging digital experiences. Experienced in Figma, prototyping, and responsive design.",
  },
];

export const achievements = [
  {
    action: "+",
    number: 35,
    label: "Projects Completed",
  },
  {
    action: "+",
    number: 1,
    label: "Years Experience",
  },
  {
    action: "%",
    number: 99,
    label: "Happy Clients",
  },
  {
    action: "%",
    number: 99,
    label: "Satisfaction Rate",
  },
];

export const homeskills = [
  "User Experience",
  "Interface Design",
  "Prototyping",
  "User Research",
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A comprehensive admin dashboard for managing online store operations with real-time analytics and inventory management.",
    image: "/project/E.com.png",
    technologies: ["Next.js", "React.js", "Tailwind CSS"],
    category: "Web Application",
    status: "Completed",
    year: "2025",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Dashboard Design",
    description:
      "Clean and modern dashboard UI designed in Figma — featuring clear data visualization, minimal layout, and user-friendly navigation.",
    image: "/project/figmaproject.png",
    technologies: ["Figma"],
    category: "Web Design",
    status: "Completed",
    year: "2024",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Bexon",
    description:
      "Reverse-engineered a modern website, focusing on responsive design, fluid animations, and interactive micro-interactions to sharpen frontend execution skills.",
    image: "/project/Bexon.png",
    technologies: ["Next.js", "React.js", "Tailwind CSS"],
    category: "Website",
    status: "Completed",
    year: "2024",
    link: "https://bexon-web.vercel.app/",
    github: "https://github.com/karansingh102019/BexonWEB",
  },
  {
    id: 4,
    title: "Aleric",
    description:
      "Reverse-engineered a modern portfolio website, focusing on responsive design, fluid animations, and interactive micro-interactions to sharpen frontend execution skills.",
    image: "/project/Aleric.png",
    technologies: ["Next.js", "React.js", "Tailwind CSS"],
    category: "Website",
    status: "Completed",
    year: "2024",
    link: "https://aleric-ten.vercel.app/",
    github: "https://github.com/karansingh102019/aleric",
  },
  {
    id: 5,
    title: "Nexus-Blogging_Platform",
    description:
      "Nexus is more than just a blogging platform—it's a community of passionate writers and curious readers coming together to share knowledge, stories, and experiences.",
    image: "/project/blogging.png",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "ReactBits",
      "mySql",
      "JWT",
    ],
    category: "Website",
    status: "Completed",
    year: "2024",
    link: "https://nexus-bloggingplatform.vercel.app/",
    github: "https://github.com/karansingh102019/Blogging_PlatForm",
  },
];

export const contactInfo = [
  {
    iconName: <MdEmail />,
    title: "Email",
    value: "kn8610519@gmail.com",
    href: "mailto:kn8610519@gmail.com",
  },
  {
    iconName: <MdLocationOn />,
    title: "Location",
    value: "New Delhi, India",
    href: null,
  },
  {
    iconName: <MdSchedule />,
    title: "Availability",
    value: "Available for work",
    href: null,
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/karansinghnegiuidev",
    icon: <FaLinkedinIn />,
  },
  {
    name: "GitHub",
    href: "https://github.com/karansingh102019",
    icon: <FaGithub />,
  },
  {
    name: "Twitter",
    href: "https://x.com/KaranNe00082331",
    icon: <FaTwitter />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/___karan_negi___?igsh=OHp2OXdrYnFsNjA2",
    icon: <FaInstagram />,
  },
];
