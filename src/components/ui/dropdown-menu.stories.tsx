import type { Meta, StoryObj } from "@storybook/react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "./button";
import { DropdownMenu } from "./dropdown-menu";

const meta = {
  title: "Components/Dropdown Menu",
  render(args) {
    return (
      <DropdownMenu.Root {...args}>
        <DropdownMenu.Trigger asChild>
          <Button>Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
          <DropdownMenu.Item>Billing</DropdownMenu.Item>
          <DropdownMenu.Item>Team</DropdownMenu.Item>
          <DropdownMenu.Item>Subscription</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<(typeof DropdownMenu)["Root"]>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ModeToggle: Story = {
  render(args) {
    return (
      <DropdownMenu.Root {...args}>
        <DropdownMenu.Trigger asChild>
          <Button variant="ghost" className="w-9 px-0">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item>Light</DropdownMenu.Item>
          <DropdownMenu.Item>Dark</DropdownMenu.Item>
          <DropdownMenu.Item>System</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  },
};
