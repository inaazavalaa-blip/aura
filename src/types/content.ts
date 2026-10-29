export type GenderMode = "women" | "men";

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  desc: string;
  duration: string;
  format: string;
  features: string[];
}

export interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export interface SiteContent {
  brand: {
    name: string;
    studio: string;
    tagline: string;
  };
  nav: {
    approach: string;
    services: string;
    howItWorks: string;
    cta: string;
  };
  hero: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageSrc: string;
    imageAlt: string;
    badgeText: string;
    counterText: string;
  };
  beyond: {
    index: string;
    category: string;
    headlineStart: string;
    headlineHighlight: string;
    body: string;
    linkText: string;
  };
  approach: {
    index: string;
    category: string;
    title: string;
    highlight: string;
    titleEnd: string;
    intro: string;
    imageSrc: string;
    imageAlt: string;
    steps: StepItem[];
    cta: string;
  };
  services: {
    index: string;
    category: string;
    title: string;
    intro: string;
    items: ServiceItem[];
  };
  experience: {
    index: string;
    category: string;
    title: string;
    intro: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
    imageSrc: string;
    imageAlt: string;
    quote: string;
    authorName: string;
    authorRole: string;
    cta: string;
  };
  modal: {
    eyebrow: string;
    title: string;
    subtitle: string;
    services: string[];
  };
  footer: {
    ctaKicker: string;
    ctaHeadline: string;
    ctaHighlight: string;
    ctaButton: string;
    description: string;
  };
}
