import React, { useMemo, useState } from "react";
import styled from "styled-components";

const PurpleCard = styled.article`
  --form-gap: 2em;

  display: grid;
  gap: var(--form-gap);

  width: min(100%, 40rem);

  margin-block: 30em;
  padding: 3em clamp(1em, 5vw, 3em);

  background-color: var(--clr-secondary-400);
  color: var(--clr-fill-400);
  border-radius: 2em;

  & a {
    color: inherit;
    font-weight: bold;
  }

  & > h2 {
    font-weight: bold;
    font-size: clamp(2rem, 5vw, 3rem);
    text-align: center;
  }

  & > form {
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr;

    @media screen and (max-width: 40em) {
      justify-items: center;

      label {
        width: 100%;
      }
    }
  }

  & input,
  & textarea {
    width: 100%;
    padding: 0.75em;
    border-radius: 0.5em;
    border-style: none;
  }

  & input[type="checkbox"] {
    width: unset;
    margin: 1em;
  }
`;

const SubmitButton = styled.button`
  position: relative;
  isolation: isolate;

  font-size: 2rem;
  padding: 0.5em 1.5em;
  text-transform: uppercase;

  border-style: solid;
  border-radius: 1rem;

  cursor: pointer;

  color: var(--clr-secondary-400);
  background-color: var(--clr-accent-400);
  border-color: transparent;

  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    border-color 250ms ease-in-out, scale 100ms ease-in-out;

  &[disabled] {
    color: hsla(var(--clr-fill-hsl), 20%);
    background-color: var(--clr-secondary-400);
    border-color: hsla(var(--clr-fill-hsl), 20%);

    cursor: not-allowed;
    pointer-events: visible;

    &:hover {
      /* ignore scale-up from below */
      scale: 1;
    }

    &::after {
      transform: var(--transform-hide);
      opacity: 0;
    }
  }

  &:hover,
  &:focus-visible {
    scale: 1.05;
  }

  &:hover {
    &::after {
      transform: var(--transform-hide);
      opacity: 0;
    }
  }

  @keyframes point {
    from {
      translate: -0.25em;
    }

    to {
      translate: 0.25em;
    }
  }

  &::after {
    --width: 3em;
    --transform-y-align: translateY(-50%);
    --transform-hide: translateX(-200%) var(--transform-y-align);

    content: "";
    position: absolute;

    top: 50%;
    transform: var(--transform-y-align);
    right: calc(-1 * var(--width) - 1em);
    z-index: -1;

    transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
    animation-name: point;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    width: var(--width);
    aspect-ratio: 16 / 9;

    background: var(--clr-fill-400);
    clip-path: polygon(
      40% 0%,
      40% 20%,
      100% 20%,
      100% 80%,
      40% 80%,
      40% 100%,
      0% 50%
    );

    @media screen and (max-width: 40rem) {
      display: none;
    }
  }
`;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isValidEmail = (email: string) => {
  return emailRegex.test(email);
};

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [newsletter, setNewsletter] = useState(true);

  const readyToSubmit = useMemo(
    () => name.length > 0 && isValidEmail(email) && body.length > 0,
    [name, email, body]
  );

  return (
    <PurpleCard>
      <h2>Let's make something.</h2>

      <form>
        <label htmlFor="name">
          <p>Your Name</p>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <p>Your Email</p>
          <input
            id="subject"
            type="email"
            autoComplete="email"
            placeholder="hello@plinkplonkstudios.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="body">
          <p>Your Story</p>
          <textarea
            id="body"
            rows={6}
            placeholder="We are PlinkPlonk Studios. We are one."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>

        <label htmlFor="newsletter">
          <input
            type="checkbox"
            id="newsletter"
            checked={newsletter}
            onChange={() => setNewsletter((prev) => !prev)}
          />
          Sign up for our newsletter
        </label>

        <footer>
          <SubmitButton type="submit" disabled={!readyToSubmit}>
            Send it
          </SubmitButton>
        </footer>
      </form>
    </PurpleCard>
  );
};
