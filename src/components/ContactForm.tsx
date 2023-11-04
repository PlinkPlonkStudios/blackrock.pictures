import React from "react";
import styled from "styled-components";

const PurpleCard = styled.article`
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

export const ContactForm = () => (
  <PurpleCard>
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
  </PurpleCard>
);
