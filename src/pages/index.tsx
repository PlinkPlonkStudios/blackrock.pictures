import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

import { ContactForm, Heading, PageTemplate, ReelHero } from "../components";

const MainContent = styled.div`
  min-height: 120vh;
  min-height: 120dvh;
`;

const HeroSection = styled.header`
  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2em;

  min-height: 90vh;
  min-height: 90dvh;

  padding-block: 10em;

  @media screen and (max-width: 40rem) {
    padding-block: 3em;
    justify-content: flex-start;

    & > h1 {
      width: unset;
    }
  }
`;

const StyledHeading = styled(Heading)`
  color: var(--clr-fill-400);
  text-wrap: balance;

  z-index: 100;
  mix-blend-mode: lighten;
`;

const Highlight = styled.span`
  color: var(--clr-accent-400);
`;

const ContactSection = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;

  margin-block: 24em;
  padding-block: 6em;
`;

const CTA = styled.a`
  display: inline-block;

  padding: 0.5em 1.5em;
  width: max-content;

  font-size: clamp(1rem, 5vw, 2rem);
  color: var(--clr-fill-400);
  background-color: var(--clr-secondary-400);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 1em;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <MainContent>
        <ReelHero />

        {/* TODO split this out into its own component */}
        <HeroSection>
          <StyledHeading>
            We create art that tells <Highlight>stories.</Highlight>
          </StyledHeading>

          {/* TODO make this more subtle on first glance, then more apparent on focus/hover */}
          <CTA href="#contact">My turn</CTA>
        </HeroSection>

        {/* TODO testimonials / brands section */}

        <ContactSection id="contact">
          {/* TODO testimonial copy */}
          <ContactForm />
        </ContactSection>
      </MainContent>
    </PageTemplate>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>black rock pictures.</title>;
