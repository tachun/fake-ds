import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Check, CircleHelp } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic Card with header and content
 */
export const Basic: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Basic Card</CardTitle>
        <CardDescription>
          This is a simple card with header and content.
        </CardDescription>
      </CardHeader>
      <CardContent>Here is some content inside the card.</CardContent>
    </Card>
  ),
};

/**
 * Card with footer section
 */
export const WithFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
      </CardHeader>
      <CardContent>
        This card has a footer section for actions or info.
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-sm flex justify-end w-full">
          Card Footer
        </p>
      </CardFooter>
    </Card>
  ),
};

/**
 * Card with action in header
 */
export const WithAction: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
      </CardHeader>
      <CardContent>This card demonstrates the CardAction slot.</CardContent>
      <CardFooter>
        <Button className="w-full">
          <CircleHelp /> Questions
        </Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * Full featured card with all components
 */
export const FullFeatured: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Full Featured Card</CardTitle>
        <CardDescription>
          All sections: header, content, action, footer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        This card showcases all possible slots and layout options.
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={() => fn()}>
          Cancel
        </Button>
        <Button onClick={() => fn()}>Save</Button>
      </CardFooter>
    </Card>
  ),
};
