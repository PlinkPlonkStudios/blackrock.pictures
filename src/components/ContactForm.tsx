import React, { PropsWithChildren, useMemo, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import { navBarHeight } from "./NavBar";
import { navigate } from "gatsby";

const FullWidthSection = styled.section`
  --form-gap: 3em;

  display: grid;
  gap: var(--form-gap);
  grid-template-columns: 2fr 3fr;

  padding: 5em clamp(1em, 5vw, 8em);

  background-color: var(--clr-secondary-400);
  color: var(--clr-fill-400);

  scroll-margin-block-start: ${navBarHeight};

  & a {
    color: inherit;
    font-weight: bold;
  }

  & > h2 {
    font-weight: bold;
    font-size: clamp(2rem, 5vw, 3rem);
    text-align: center;

    grid-column: 1 / -1;
  }

  & > form {
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr;

    & footer {
      display: flex;
      flex-direction: row-reverse;
      justify-content: start;
      align-items: center;

      gap: 2em;

      isolation: isolate;
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
    z-index: 1;
    /* TODO get this to go under the slate top */
  }

  label#newsletter {
    border: 2px solid red;
  }

  & h3 {
    margin-block: 2em 1em;
  }

  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
    & > form {
      justify-items: center;

      label {
        width: 100%;
      }

      footer {
        flex-direction: column;
      }
    }
  }
`;

// TODO slate top background-image
// TODO slate bottom background-image
// TODO slate should be behind everything until hovered on
const SubmitButton = styled.button`
  position: relative;
  isolation: isolate;

  font-size: 2rem;
  padding: 0.5em 1.5em;
  text-transform: uppercase;

  border-style: solid;
  border-radius: 0 0 0.25em 0.25em;

  cursor: pointer;

  color: var(--clr-fill-400);
  background-color: var(--clr-stroke-400);

  border-width: 0;
  border-color: transparent;

  font-weight: bold;

  transition: color 250ms ease-in-out 150ms, border-color 250ms ease-in-out,
    scale 100ms ease-in-out;

  &:hover,
  &:focus-visible {
    scale: 1.05;
    color: var(--clr-accent-400);

    /* Clap the slate */
    &::after {
      transform: rotate(0deg);
    }
  }

  /* Slate top */
  &::after {
    content: "";
    position: absolute;

    top: -1em;
    left: 0;

    width: 100%;
    height: 1em;

    background-color: inherit;
    border-radius: 0.25em 0.25em 0 0;

    transform: rotate(-20deg);
    transform-origin: bottom left;

    transition: transform 400ms;

    transition-timing-function: cubic-bezier(1, -0.7, 1, 1.71);

    z-index: -1;
    pointer-events: none;

    @media (prefers-reduced-motion) {
      transform: unset !important;
    }
  }
`;

interface ContactFormProps {
  className?: string;
  title?: React.ReactNode;
}

export const ContactForm = ({
  className,
  title,
  children,
}: PropsWithChildren<ContactFormProps>) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        // TODO instead, have loading states for the form and set loading to false here
        return navigate("/thanks");
      }
    });
  };

  return (
    <FullWidthSection
      className={classNames("full-width", className)}
      id="contact"
    >
      <h2 className="breakout">{title ?? "Let's make something."}</h2>

      <div className="flow-2">{children}</div>

      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <input
          type="hidden"
          value="00005c50-546d-4cc5-856c-885884789a36"
          {...register("access_key")}
        />

        <label htmlFor="name">
          <p>Your Name</p>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            {...register("name")}
          />
        </label>
        <label htmlFor="email">
          <p>Your Email</p>
          <input
            id="subject"
            required
            type="email"
            autoComplete="email"
            placeholder="hello@plinkplonkstudios.com"
            {...register("email")}
          />
        </label>

        <label htmlFor="body">
          <p>Your Story</p>
          <textarea
            id="body"
            rows={6}
            placeholder="We are PlinkPlonk Studios. We are one."
            {...register("body")}
          />
        </label>

        <footer>
          <label htmlFor="newsletter">
            <input
              type="checkbox"
              id="newsletter"
              defaultChecked
              {...register("newsletter")}
            />
            Sign up for our newsletter
          </label>

          <SubmitButton type="submit" disabled={false}>
            Send it
          </SubmitButton>
        </footer>
      </form>

      <script src="https://web3forms.com/client/script.js" async defer />
    </FullWidthSection>
  );
};
