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
  }

  & input[type="checkbox"] {
    width: unset;
    margin: 1em;
  }

  & button[type="submit"] {
    border-color: transparent;
    background-color: var(--clr-accent-400);
    color: var(--clr-stroke-400);

    font-size: 2em;
    padding: 0.5em 1.5em;
    text-transform: uppercase;

    transition: color 250ms ease-in-out, background-color 250ms ease-in-out;

    &[disabled] {
      background-color: var(--clr-fill-400);
      color: hsla(var(--clr-secondary-400-hsl), 20%);
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
          <p>Body</p>
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
          <button type="submit" disabled={!readyToSubmit}>
            Boom baby
          </button>
        </footer>
      </form>
    </PurpleCard>
  );
};
