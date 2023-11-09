import * as React from "react";
import { Link, type HeadFC, type PageProps, navigate } from "gatsby";
import { Heading, PageTemplate } from "../components";
import styled from "styled-components";

const HeadingWithPadding = styled(Heading)`
  margin-block-start: 1em;
  /* TODO figure out consistent Heading spacing */
  margin-block-end: 1em;
`;

const GoBackButton = styled.button`
  display: flex;
  gap: 1em;
  align-items: center;

  margin-block: 2em;
  padding: 1em 2em;

  background-color: var(--clr-secondary-400);
  color: var(--clr-fill-400);

  font-weight: bold;
  text-transform: uppercase;
  border-color: transparent;
  border-radius: 2em;

  cursor: pointer;
`;

const ThanksPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <HeadingWithPadding>Thank you.</HeadingWithPadding>

      <p>Thanks for reaching out! We'll get back to you shortly.</p>

      <GoBackButton onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left" />
        <span>Back</span>
      </GoBackButton>
    </PageTemplate>
  );
};

export default ThanksPage;

export const Head: HeadFC = () => (
  <>
    <title>Thank you | black rock pictures.</title>
    <script
      src="https://kit.fontawesome.com/6ab573e32e.js"
      crossOrigin="anonymous"
    />
  </>
);
