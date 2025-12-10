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
    title: "iPhone 15 Pro Website Clone",
    description:
      "This project is a clone of the iPhone 15 Pro website, built using modern web technologies to replicate the design and interactivity of the original site. The clone is developed with React.js for the frontend structure, Three.js for 3D animations and models, Tailwind CSS for styling, and GSAP for smooth animations and transitions.",
    techStack: ["React.js", "TailwindCSS", "Vite"],
    img: {
      src: "/images/tosta-sc.png",
      alt: "iPhone 15 Pro Tosta website",
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
    title: "Brainwave",
    description:
      "Brainwave is a modern web application built with React v19, leveraging the power of Tailwind CSS v4 for styling and ScrollParallax for immersive scroll-based animations. The app is designed to deliver a smooth, responsive, and visually engaging user experience.",
    techStack: ["React.js", "TailwindCSS", "Vite"],
    img: {
      src: "/images/brainwave-sc.png",
      alt: "A Screenshot of Brainwave website",
      width: 480,
      height: 2257,
    },
    links: [
      {
        href: "https://github.com/AmrGobran/brainwave",
        label: "GitHub Repo",
        target: "_blank",
        iconName: "github",
        iconTitle: "GitHub",
      },
      {
        href: "https://brainwave-reactapp.netlify.app/",
        label: "live Preview",
        target: "_blank",
        iconName: "preview",
        iconTitle: "Preview",
      },
    ],
  },
  {
    id: 3,
    title: "iPhone 15 Pro Website Clone",
    description:
      "This project is a clone of the iPhone 15 Pro website, built using modern web technologies to replicate the design and interactivity of the original site. The clone is developed with React.js for the frontend structure, Three.js for 3D animations and models, Tailwind CSS for styling, and GSAP for smooth animations and transitions.",
    techStack: ["React.js", "Three.js", "TailwindCSS", "GSAP", "Vite"],
    img: {
      src: "/images/iphone-15-pro-clone-sc.png",
      alt: "A Screenshot of iPhone 15 Pro Website Clone",
      width: 480,
      height: 1824,
    },
    links: [
      {
        href: "https://github.com/AmrGobran/Iphone-15-pro-clone",
        label: "GitHub Repo",
        target: "_blank",
        iconName: "github",
        iconTitle: "GitHub",
      },
      {
        href: "https://iphone-15-clone-reactapp.netlify.app/",
        label: "Live Preview",
        target: "_blank",
        iconName: "preview",
        iconTitle: "Preview",
      },
    ],
  },
  {
    id: 4,
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
