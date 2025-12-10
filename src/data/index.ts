import type { NavLinks, Projects, SocialLinks } from "./types";

export const navLinks: NavLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "mailto:amrgobran0100@gmail.com", label: "Contact" },
];

export const socialLinks: SocialLinks = [
  {
    name: "github",
    href: "https://github.com/AmrGobran/",
    title: "GitHub",
    target: "_blank",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/amr-gobran/",
    title: "Linkedin",
    target: "_blank",
  },
  {
    name: "x",
    href: "https://x.com/GobranAmr",
    title: "X (Twitter)",
    target: "_blank",
  },
];

export const projects: Projects = [
  {
    id: 1,
    title: "Tosta",
    description:
      "Tosta is a modern, responsive coffee shop website built with React and Tailwind CSS. It features smooth scrolling, contact and newsletter forms via FormSubmit, and clean design for showcasing a local brand.",
    techStack: ["React.js", "React Router Dom", "TailwindCSS", "Vite"],
    img: {
      src: "/images/tosta-sc.png",
      alt: "A Screenshot of Tosta website",
      width: 480,
      height: 1035,
    },
    links: [
      {
        href: "https://github.com/AmrGobran/tosta",
        label: "GitHub Repo",
        target: "_blank",
        iconName: "github",
        iconTitle: "GitHub",
      },
      {
        href: "https://amrgobran.github.io/tosta/",
        label: "Live Preview",
        target: "_blank",
        iconName: "preview",
        iconTitle: "Preview",
      },
    ],
  },
  {
    id: 2,
    title: "Olive & Oak Restaurant Website",
    description:
      "A modern, responsive restaurant website built with HTML, TailwindCSS v4, and vanilla JavaScript. Features a single-page application (SPA) architecture with smooth transitions and interactive components.",
    techStack: [" HTML", "CSS", "JavaScript", "TailwindCSS", "Vite"],
    img: {
      src: "/images/olive-and-oak-sc.png",
      alt: "A Screenshot of Olive & Oak Restaurant Website",
      width: 480,
      height: 938,
    },
    links: [
      {
        href: "https://github.com/AmrGobran/olive-oak-dining",
        label: "GitHub Repo",
        target: "_blank",
        iconName: "github",
        iconTitle: "GitHub",
      },
      {
        href: "https://olive-oak.netlify.app/",
        label: "Live Preview",
        target: "_blank",
        iconName: "preview",
        iconTitle: "Preview",
      },
    ],
  },
];
