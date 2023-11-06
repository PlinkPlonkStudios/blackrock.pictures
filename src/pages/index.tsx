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
  --padding-x: 1.5em;
  --hidden-color: hsla(0, 0%, 0%, 20%);
  --visible-color-hsl: var(--clr-secondary-400-hsl);

  position: relative;

  display: inline-block;

  padding: 0.5em var(--padding-x);
  width: max-content;

  font-size: clamp(1rem, 5vw, 2rem);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 1em;

  background-color: var(--hidden-color);
  box-shadow: 0px 0px 2em 2em var(--hidden-color);

  color: var(--clr-fill-400);
  transition: background-color 150ms ease-out;

  &:hover,
  &:focus {
    background-color: hsl(var(--visible-color-hsl));

    &::before {
      transform: translateY(-100%);
      opacity: 0;
    }

    &::after {
      opacity: 1;
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: transform 150ms ease-out, opacity 100ms ease-out;
  }

  &::before {
    bottom: 0.5ch;
    width: calc(100% - 2 * var(--padding-x));
    left: var(--padding-x);
    height: 0.25ch;
    background: white;

    opacity: 1;
  }

  &::after {
    inset: 0;
    box-shadow: 0px 0px 1em 1em hsla(var(--visible-color-hsl), 30%);
    border-radius: inherit;
    z-index: 99;

    opacity: 0;
  }
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
