import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { ToastProvider, useToast, type Toast } from "./toast";

function Component(props: Toast) {
  const { toast } = useToast();
  return (
    <>
      <Button onClick={() => toast(props)}>Show toast</Button>
      <ToastProvider />
    </>
  );
}

const meta = {
  title: "Components/Toast",
  component: Component,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Toast title",
    description: "Toast description",
  },
} satisfies Meta<Toast>;

export default meta;
type Story = StoryObj<Toast>;

export const Default: Story = {};
