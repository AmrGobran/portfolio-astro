export type LinkTarget = "_blank" | "_parent" | "_self" | "_top";

export interface NavLink {
  href: string;
  label: string;
}
export interface SocialLink {
  name: string;
  href: string;
  title: string;
  target: LinkTarget;
}
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  links: {
    href: string;
    label: string;
    target: LinkTarget;
    iconName: string;
    iconTitle: string;
  }[];
}

export type NavLinks = NavLink[];
export type SocialLinks = SocialLink[];
export type Projects = Project[];
