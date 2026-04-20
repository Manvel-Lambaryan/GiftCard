export type Language = "en";

type UsageRow = {
  title: string;
  subtitle: string;
};

type Step = {
  n: string;
  title: string;
  lines: readonly [string, string];
  glow?: boolean;
};

type AboutTag = {
  label: string;
};

type FooterLegal = {
  copyrightPrefix: string;
  companyName: string;
};

export type LandingText = {
  header: {
    callAria: string;
  };
  hero: {
    heading: string;
    imageAlt: string;
    descriptionLines: readonly [string, string];
    whatsappCta: string;
    validityNote: string;
  };
  values: {
    title: string;
    descriptionLines: readonly [string, string];
    availableValues: string;
  };
  usage: {
    title: string;
    rows: readonly UsageRow[];
  };
  steps: {
    titleLines: readonly [string, string];
    items: readonly Step[];
  };
  about: {
    title: string;
    lines: readonly string[];
    tags: readonly AboutTag[];
  };
  finalCta: {
    titleLines: readonly [string, string];
    whatsappCta: string;
    emailCta: string;
  };
  footer: {
    socialAria: string;
    legal: FooterLegal;
  };
};

export const LANDING_TEXT: Readonly<Record<Language, LandingText>> = {
  en: {
    header: {
      callAria: "Call Neetrino",
    },
    hero: {
      heading: "You've Received a Neetrino Gift Card",
      imageAlt: "You've Received a Neetrino Gift Card",
      descriptionLines: [
        "Use it as a direct discount on your next",
        "digital product with Neetrino.",
      ],
      whatsappCta: "Write to Us on WhatsApp",
      validityNote: "Valid for 3 months from the date of receipt.",
    },
    values: {
      title: "What Does Your Gift Card Give You?",
      descriptionLines: [
        "Get an immediate deduction on the final cost",
        "of your software development project.",
      ],
      availableValues: "Available values",
    },
    usage: {
      title: "Where Can You Use It?",
      rows: [
        { title: "Website", subtitle: "Corporate & Landing pages" },
        { title: "Mobile App", subtitle: "iOS & Android development" },
        { title: "CRM Systems", subtitle: "Business process automation" },
        { title: "SaaS Platforms", subtitle: "Cloud-based solutions" },
        { title: "AI Solutions", subtitle: "Machine learning modules" },
      ],
    },
    steps: {
      titleLines: ["4 Simple Steps to", "Redeem"],
      items: [
        {
          n: "1",
          title: "Contact on WhatsApp",
          lines: [
            "Start a conversation with our project",
            "manager to activate your card.",
          ],
        },
        {
          n: "2",
          title: "Send photo/details",
          lines: [
            "Provide a photo of your physical card or",
            "its unique identification details.",
          ],
        },
        {
          n: "3",
          title: "Choose product",
          lines: [
            "Discuss your needs and select the digital",
            "product you want to develop.",
          ],
        },
        {
          n: "4",
          title: "Amount deducted",
          lines: [
            "The card value is automatically deducted",
            "from your final project quote.",
          ],
          glow: true,
        },
      ],
    },
    about: {
      title: "Build With Neetrino",
      lines: [
        "Neetrino IT Company is a high-end software development firm",
        "specializing in architecting scalable, futuristic digital ecosystems.",
        "From complex CRM integrations to AI-driven interfaces,",
        "we build the tech that powers tomorrow.",
      ],
      tags: [
        { label: "Premium Design" },
        { label: "Agile Dev" },
        { label: "Scalable Architecture" },
      ],
    },
    finalCta: {
      titleLines: ["Ready to Use", "Your Gift Card?"],
      whatsappCta: "Write to Us on WhatsApp",
      emailCta: "Contact Us",
    },
    footer: {
      socialAria: "Social links",
      legal: {
        copyrightPrefix: "Copyright © 2026 | All Rights Reserved, Created by",
        companyName: "Neetrino IT Company",
      },
    },
  },
};
