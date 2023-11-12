import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

import { ContactForm, Heading, PageTemplate, ReelHero } from "../components";

const MainContent = styled.div`
  min-height: 120vh;
  min-height: 120dvh;

  padding-block-start: 6em;

  & .subtle-button {
    --hidden-color: hsla(0, 0%, 0%, 20%);
    --visible-color-hsl: var(--clr-secondary-400-hsl);

    color: var(--clr-fill-400);
    border-color: transparent;
    border-radius: 1em;
    box-shadow: 0px 0px 2em 2em var(--hidden-color);
    cursor: pointer;

    background-color: var(--hidden-color);

    transition: background-color 150ms ease-out;

    &:hover,
    &:focus {
      background-color: hsl(var(--visible-color-hsl));

      &::after {
        opacity: 1;
      }
    }

    &::after {
      content: "";
      position: absolute;
      transition: transform 150ms ease-out, opacity 100ms ease-out;
    }

    &::after {
      inset: 0;
      box-shadow: 0px 0px 1em 1em hsla(var(--visible-color-hsl), 30%);
      border-radius: inherit;
      z-index: 99;

      opacity: 0;
    }
  }
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
  gap: 2em;

  margin-block: 24em;
  padding-block: 6em;

  @media screen and (min-width: 60rem) {
    grid-template-columns: 1fr 2fr;
  }
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

const ContactCopy = styled.aside`
  & > p {
    margin-block-end: 2em;
  }
`;

const DownArrow = styled.button`
  position: absolute;

  padding: 1em;
  right: 0;
  bottom: 6em;
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
    <PageTemplate pushToTop navBar={{ variant: navBarVariant }}>
      <MainContent>
        <ReelHero />

        {/* TODO split this out into its own component? */}
        <HeroSection>
          <StyledHeading>
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

        <div className="sr-only" id="after-hero" />

        {/* TODO testimonials / brands section */}

        <ContactSection id="contact">
          <ContactCopy>
            <h3>Connect with Us for Your Film</h3>
            <p>
              We at Black Rock Pictures are more than just a film production
              company; we're your creative partners in storytelling. Whether
              you're a seasoned filmmaker or just starting, our doors are open
              to collaborate and turn your cinematic dreams into reality. Our
              mission is to create memorable stories that resonate with
              audiences worldwide.
            </p>

            <h3>How to Get in Touch</h3>
            <p>
              Have a project in mind or want to discuss potential
              collaborations? The first step is reaching out to us. Use the
              contact form here to send us a message. We're eager to hear your
              ideas, answer your questions, or provide you with more information
              about our services. Feel free to let us know what you have in
              mind, and we'll get back to you promptly.
            </p>

            <h3>Your Journey Starts Here</h3>
            <p>
              Your next film adventure begins with a simple message. Whether
              it's a script you want to discuss, a project proposal, or you're
              seeking advice on your filmmaking career, we're here to help.
              We're excited to embark on this creative journey with you. Let's
              create exceptional cinematic experiences &mdash; together.
            </p>
          </ContactCopy>

          <ContactForm />
        </ContactSection>
      </MainContent>
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
