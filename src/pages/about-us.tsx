import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { AboutCrewMember, PageTemplate } from "../components";
import styled from "styled-components";

const CrewList = styled.ul`
  list-style: none;

  padding: 0;
`;

const AboutUsPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <h1>About the Crew</h1>

      <CrewList>
        <AboutCrewMember
          name="Zac"
          role="Developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste aliquid mollitia ipsam doloribus saepe perspiciatis recusandae atque deleniti accusamus."
        />
      </CrewList>
      {/* Each person is an `article` */}
      {/* has header or h2 or h3 for name */}
      {/* has img */}
      {/* has description */}
      {/* has title/role */}
      {/* has quote */}
    </PageTemplate>
  );
};

export default AboutUsPage;

export const Head: HeadFC = () => <title>About | black rock pictures.</title>;
