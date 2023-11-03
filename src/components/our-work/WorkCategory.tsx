import React from "react";
import styled from "styled-components";

export interface WorkCategoryProps {
  title: string;
  description?: React.ReactNode;
}

const Section = styled.section`
  margin-block-start: 6em;
  margin-block-end: 12em;

  & > header {
    margin-block: 3em;
  }

  & > section {
    display: grid;
    gap: 1em;

    margin-block: 3em;
  }
`;

export const WorkCategory = ({
  title,
  description,
  children,
}: React.PropsWithChildren<WorkCategoryProps>) => {
  return (
    <Section>
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
