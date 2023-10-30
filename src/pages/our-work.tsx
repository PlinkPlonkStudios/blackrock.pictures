import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Heading, PageTemplate } from "../components";
import styled from "styled-components";
import { WorkCategory } from "../components/our-work";

const HeadingWithPadding = styled(Heading)`
  margin-block-start: 1em;
  /* TODO figure out consistent Heading spacing */
  margin-block-end: 1em;
`;

const AboutUsPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <HeadingWithPadding>Our Work</HeadingWithPadding>

      <WorkCategory title="Independent Creative Work" />
      <WorkCategory title="Collaborations" />
      <WorkCategory title="Client Projects" />
    </PageTemplate>
  );
};

export default AboutUsPage;

export const Head: HeadFC = () => (
  <title>Our Work | black rock pictures.</title>
);
