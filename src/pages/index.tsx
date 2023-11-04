import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

import { ContactForm, Heading, PageTemplate } from "../components";
import { wideSilhouetteCircle } from "../images";

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

  min-height: 90vh;
  min-height: 90dvh;

  padding-block: 10em;
  /* background-color: white; */
  /* z-index: -2; */
`;

const HeroImage = styled.div`
  background-image: url(${wideSilhouetteCircle});
  background-size: contain;
  position: absolute;
  right: 0;
  width: 50%;
  aspect-ratio: 1;
  z-index: -9;
  /* background-color: white; */

  animation-name: rotate-me;
  animation-duration: 60s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes rotate-me {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

const Highlight = styled.span`
  padding-inline: 0.1ch;
  background-color: var(--clr-accent-400);

  color: var(--clr-stroke-400);

  mix-blend-mode: unset;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 20%);
`;

const BackgroundShadow = styled.span`
  --bg-color: hsla(var(--clr-fill-hsl), 50%);
  --offset: 15%;

  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--bg-color) var(--offset),
    var(--bg-color) calc(100% - var(--offset)),
    transparent 100%
  );
  z-index: 100;
`;

const ContactSection = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <MainContent>
        <HeroSection>
          <Heading>
            <BackgroundShadow>
              Creating <Highlight>art</Highlight> that tells{" "}
              <Highlight>stories.</Highlight>
            </BackgroundShadow>
          </Heading>

          <HeroImage />
        </HeroSection>

        <ContactSection>
          <ContactForm />
        </ContactSection>
      </MainContent>
    </PageTemplate>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>black rock pictures.</title>;
