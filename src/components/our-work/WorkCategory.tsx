import React from "react";
import styled from "styled-components";

// TODO move props to right above component definition, across the board
// TODO rename styled components to be a bit clearer
export interface WorkCategoryProps {
  title: string;
  description?: React.ReactNode;
  className?: string;
}

const Section = styled.section`
  justify-items: start;

  & > header {
    margin-block-end: 3em;
  }

  & > section {
    display: grid;
    gap: 1em;

    margin-block: 3em;
  }

  @media screen and (max-width: 50rem) {
    justify-items: center;
  }
`;

export const WorkCategory = ({
  title,
  description,
  children,
  className,
}: React.PropsWithChildren<WorkCategoryProps>) => {
  return (
    <Section className={className}>
      <header>
        <h2>{title}</h2>
        {/* TODO temporary filler for `description` */}
        {description || (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolore
            quibusdam eligendi ut perferendis quidem eum assumenda illo veniam
            voluptates.
          </p>
        )}
      </header>

      {children}
    </Section>
  );
};
