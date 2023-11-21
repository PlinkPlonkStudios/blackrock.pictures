import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

import {
  ContactForm,
  Heading,
  PageTemplate,
  ReelHero,
  TrustedBrandsSection,
  VideoContainer,
} from "../components";

const HeroSection = styled.header`
  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2em;

  min-height: 100vh;
  min-height: 100svh;

  padding-block: 10em;

  @media screen and (max-width: 40rem) {
    padding-block: 6em;
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

const CTA = styled.a`
  --padding-x: 1.5em;

  position: relative;

  display: inline-block;

  padding: 0.5em var(--padding-x);
  width: max-content;

  font-size: clamp(1rem, 5vw, 2rem);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;

  transform: translateX(calc(-0.5 * var(--padding-x)));

  &:hover,
  &:focus {
    &::before {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  /* TODO refactor this, navbar-link hover effect into a CSS class */
  &::before {
    content: "";
    position: absolute;
    transition: transform 150ms ease-out, opacity 100ms ease-out;
  }

  &::before {
    bottom: 1ch;
    width: calc(100% - 2 * var(--padding-x));
    left: var(--padding-x);
    height: 0.125ch;
    background: white;

    opacity: 1;
  }
`;

const DownArrow = styled.button`
  position: absolute;

  padding: 1em;
  right: 0;
  bottom: 12em;
`;

const FilmSection = styled.section`
  /**
   * Not a fan of using !important but I have to override the main rule that
   * overrides this one without it
   */
  grid-column: full-width-start / breakout-end !important;

  position: relative;

  display: grid;
  grid-template-columns: 10fr 16fr;
  align-items: center;
  gap: 1rem;

  padding-inline-start: 10em;

  & h2 {
    font-size: clamp(1em, 8vw, 4rem);

    /* Constant with respect to font size up top for scroll button purposes */
    margin-block: 6rem 0.25em;
  }

  @media screen and (max-width: 95rem) {
    /* Overriding the override above :/ */
    grid-column: content !important;
    grid-template-columns: 1fr;
    gap: 4rem;

    padding: unset;
  }
`;

const LogoText = styled.span`
  font-family: Seagram;
  font-size: 1.25em;
  color: #940202;
`;

/* https://youtu.be/XoHI6Zus2UI */
const ReelHumanBean = styled(ReelHero)`
  /* not in the flow since it's position: absolute, so align it back to top */
  margin-top: 0 !important;
`;

const IndexPage: React.FC<PageProps> = () => {
  const [navBarVariant, setNavBarVariant] = useState<"default" | "transparent">(
    "transparent"
  );

  const scrollDown = () => {
    document.getElementById("after-hero")?.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const oldOnScroll = window.onscroll;
    function onScroll() {
      if (window.scrollY > 0) setNavBarVariant("default");
      else setNavBarVariant("transparent");
    }

    // In case we start low on the screen
    onScroll();

    window.onscroll = onScroll;

    return () => {
      window.onscroll = oldOnScroll;
    };
  }, []);

  return (
    <PageTemplate
      pushToTop
      navBar={{ variant: navBarVariant }}
      className="page-flow-large"
    >
      {/* TODO split this out into its own component? */}
      <HeroSection className="breakout">
        <StyledHeading className="text-contrast">
          We create art that tells <Highlight>stories.</Highlight>
        </StyledHeading>

        {/* TODO refactor buttons across the site */}
        <CTA className="subtle-button" href="#contact">
          My turn
        </CTA>

        <DownArrow className="subtle-button" onClick={scrollDown}>
          <i className="fa-solid fa-arrow-down" />
        </DownArrow>
      </HeroSection>

      <ReelHumanBean className="full-width" />

      <FilmSection id="after-hero">
        <h2 className="text-contrast">
          <LogoText>Saint Joseph.</LogoText> <br />
          Watch it.
        </h2>

        <VideoContainer>
          <iframe
            src="https://www.youtube-nocookie.com/embed/NPHRn5Ix_oo?si=8YsDEJaPsDpwTKzF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </VideoContainer>
      </FilmSection>

      <TrustedBrandsSection className="" />

      {/* TODO make the vertical spacing smaller here */}
      <ContactForm className="contact-form">
        <div>
          <h3>Connect with Us for Your Film</h3>
          <p>
            We at Black Rock Pictures are more than just a film production
            company; we're your creative partners in storytelling. Whether
            you're a seasoned filmmaker or just starting, our doors are open to
            collaborate and turn your cinematic dreams into reality. Our mission
            is to create memorable stories that resonate with audiences
            worldwide.
          </p>
        </div>

        <div>
          <h3>How to Get in Touch</h3>
          <p>
            Embark on your next film adventure with a simple message. Whether
            you have a script to discuss, a project proposal, or seek advice on
            your filmmaking career, we're here to help. Reach out through the
            contact form to share your ideas, ask questions, or learn more about
            our services. We're eager to collaborate and create exceptional
            cinematic experiences together, so drop us a line, and we'll get
            back to you promptly.
          </p>
        </div>
      </ContactForm>
    </PageTemplate>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>black rock pictures.</title>
    <script
      src="https://kit.fontawesome.com/6ab573e32e.js"
      crossOrigin="anonymous"
    />
  </>
);
