import React from "react";

import { Button } from "../src";

export default {
  title: "Basics/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "Large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "Small",
  label: "Button",
};