import { type Metadata } from "next";

import { Providers } from "~/components/providers";
import { fontSans } from "~/config/fonts";
import { siteConfig } from "~/config/site";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: WithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body style={fontSans.style}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
