import type { Meta, StoryObj } from "@storybook/react";
import { Trash } from "lucide-react";

import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    disabled: false,
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    variant: "default",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    variant: "default",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    "aria-label": "Delete",
    children: (
      <>
        <Trash className="h-4 w-4" />
        <span>Delete</span>
      </>
    ),
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    variant: "destructive",
    "aria-label": "Delete",
    children: <Trash />,
  },
};
