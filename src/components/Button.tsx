import React from "react";
import styled from "styled-components";

export type ButtonProps = React.ComponentProps<"button">;

const StyledButton = styled.button`
  display: inline-block;

  padding: 1em 2em;

  background-color: var(--clr-secondary-400);
  color: var(--clr-fill-400);

  border-color: transparent;
  border-radius: 1em;

  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  cursor: pointer;
`;

// TODO make this work as='a' or as='Link'
export const Button = ({
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
