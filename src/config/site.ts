export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js Template",
  description: "Make beautiful websites regardless of your design experience.",
  links: {
    github: "https://github.com/fellipeutaka/next-template",
    twitter: "https://twitter.com/fellipeutaka",
  },
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Posts",
      href: "/posts",
    },
  ],
};
