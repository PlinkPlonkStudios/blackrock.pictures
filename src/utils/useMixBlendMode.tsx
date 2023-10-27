import React, { useRef, useState } from "react";
import { v4 } from "uuid";

export function useMixBlendMode() {
  const uuid = useRef(v4());
  const options = [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
    "inherit",
    "initial",
    "revert",
    "revert-layer",
    "unset",
  ] as const;

  const [mixBlendMode, setMixBlendMode] =
    useState<(typeof options)[number]>("initial");

  const RadioGroup: React.FC<
    React.PropsWithChildren<{
      style?: React.StyleHTMLAttributes<HTMLDivElement>;
    }>
  > = ({ children, style }) => {
    return (
      <article style={{ ...style }}>
        <header>{children}</header>
        {options.map((option) => (
          <div>
            <label htmlFor={option}>
              <input
                type="radio"
                name={uuid.current}
                value={option}
                checked={mixBlendMode === option}
                onChange={() => setMixBlendMode(option)}
              />{" "}
              {option}
            </label>
          </div>
        ))}
      </article>
    );
  };

  return {
    options,
    mixBlendMode,
    setMixBlendMode,
    styles: { mixBlendMode },
    RadioGroup,
  };
}
