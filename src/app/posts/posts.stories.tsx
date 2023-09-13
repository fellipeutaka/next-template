import type { Meta, StoryObj } from "@storybook/react";

import { Providers } from "~/components/providers";

import NewPage from "./new/page";
import Page from "./page";

const meta = {
  title: "Pages/Posts",
  component: Page,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const New: Story = {
  render: NewPage,
};
