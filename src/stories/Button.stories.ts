import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../components/ui/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Secondary Button",
  },
};

export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
    children: "Large Button",
  },
};

export const Small: Story = {
  args: {
    variant: "default",
    size: "sm",
    children: "Small Button",
  },
};
