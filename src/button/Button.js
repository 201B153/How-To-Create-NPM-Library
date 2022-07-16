import React from "react";

import classes from "./button.module.css";

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? classes.storybookButtonPrimary
    : classes.storybookButtonSecondary;
  return (
    <button
      type="button"
      className={[
        classes.storybookButton,
        classes[`storybookButton${size}`],
        mode,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;