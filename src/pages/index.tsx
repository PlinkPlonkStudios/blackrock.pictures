import React, { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

import { Heading, PageTemplate } from "../components";
import ball from "../images/wide-silhouette-circle.png";

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
  background-image: url(${ball});
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

const ContactForm = styled.article`
  --form-gap: 2em;

  display: grid;
  gap: var(--form-gap);

  width: min(100%, 40rem);

  margin-block: 30em;
  padding: 3em;

  background-color: var(--clr-secondary-400);
  color: var(--clr-fill-400);
  border-radius: 2em;

  & a {
    color: inherit;
    font-weight: bold;
  }

  & > header {
    display: grid;
    gap: var(--form-gap);

    & > h2 {
      font-weight: bold;
    }
  }

  & > form {
    display: grid;
    justify-items: stretch;
    gap: 1em;

    & input[type="email"] {
      width: 50%;

      @media screen and (max-width: 50rem) {
        width: 100%;
      }
    }

    & label {
      display: grid;
      gap: 0.5em;

      & > p {
        font-weight: bold;
      }
    }

    & input,
    & textarea {
      padding: 0.5em;
    }

    & input[type="text"],
    & textarea {
      width: 100%;
    }

    & textarea {
      resize: vertical;
      padding-block: 1em;
    }

    & > footer {
      display: flex;
      width: 100%;
      gap: 1em;

      justify-content: stretch;
      align-items: stretch;

      & > button {
        position: relative;
        isolation: isolate;

        flex: 1;
        padding: 1rem 2em;
        margin-top: 0.5em;

        font-weight: bold;
        text-transform: uppercase;
        font-size: 2rem;

        background-color: var(--clr-accent-400);
        border-color: transparent;
        /* border-radius: 1em; */
        overflow: none;
      }
    }
  }
`;

const CF = () => (
  <ContactForm>
    <header>
      <h2>We heard you wanna talk.</h2>
      <p>
        Well, we do too. Leave us a message, or email us{" "}
        <a href="mailto:hello@plinkplonkstudios.com">directly</a>!
      </p>
    </header>

    <form>
      <label htmlFor="email">
        <p>Your Email</p>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="hello@plinkplonkstudios.com"
        />
      </label>
      <label htmlFor="subject">
        <p>Subject</p>
        <input
          id="subject"
          type="text"
          placeholder="Chicago Band interested in collaborating on music videos"
        />
      </label>

      <label htmlFor="body">
        <p>Body</p>
        <textarea
          id="body"
          rows={6}
          placeholder="We are PlinkPlonk Studios. We are one."
        />
      </label>

      <footer>
        <button type="submit">Send</button>
      </footer>
    </form>
  </ContactForm>
);

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
          <CF />
        </ContactSection>
      </MainContent>
    </PageTemplate>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>black rock pictures.</title>;
