
export type SocialLink = {
  platform: string;
  url: string;
  icon: React.ElementType;
};

export type NavItem = {
  title: string;
  href?: string;
  description?: string;
  children?: {
    title: string;
    href: string;
    description?: string;
  }[];
};

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  link: string;
};

export type FactItem = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  id: number;
};
