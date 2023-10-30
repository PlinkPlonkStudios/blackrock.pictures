import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { AboutCrewMember, Heading, PageTemplate } from "../components";
import styled from "styled-components";
import { crew } from "../data";

const CrewList = styled.ul`
  list-style: none;

  padding: 0;
  display: grid;
  gap: 4em;

  grid-template-columns: repeat(3, 1fr);

  & > li,
  & > li > :first-child {
    width: 100%;
    height: 100%;
  }

  /* 1, 3, 5, ... */
  & > li:nth-child(2n - 1) {
    grid-column: 1 / -2;
  }

  /* 2, 4, 6, ... */
  & > li:nth-child(2n) {
    grid-column: 2 / -1;
  }

  @media screen and (max-width: 50rem) {
    grid-template-columns: repeat(1, 1fr);

    & > li:nth-child(n) {
      grid-column: 1 / -1;
    }
  }
`;

const HeadingWithPadding = styled(Heading)`
  margin-block-start: 1em;
  /* TODO figure out consistent Heading spacing */
  margin-block-end: 1em;
`;

const AboutUsPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <HeadingWithPadding>About the Crew</HeadingWithPadding>

      <CrewList>
        {crew.map((dude, index) => (
          <li>
            <AboutCrewMember crewMember={dude} even={index % 2 === 0} />
          </li>
        ))}
      </CrewList>
    </PageTemplate>
  );
};

export default AboutUsPage;

export const Head: HeadFC = () => <title>About | black rock pictures.</title>;
