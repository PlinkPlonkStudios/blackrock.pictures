import * as React from "react";
import { HeadFC, Link, PageProps, navigate } from "gatsby";
import styled from "styled-components";

import { Heading, PageTemplate } from "../components";

// TODO refactor these styles

const MainContent = styled.div`
  --link-padding: 0.75em 1.5em;

  padding-block-end: 12em;

  & > * + * {
    margin-block-start: 4em;
  }
`;

const SuggestionsSection = styled.div`
  & > * + * {
    margin-block-start: 2em;
  }

  & > nav {
    display: flex;
  }

  @media screen and (max-width: 40rem) {
    text-align: center;

    /* TODO tidy this up */
    & nav {
      justify-content: center;
    }
  }
`;

const LinkSet = styled.nav`
  display: flex;
  /* padding: 1em 0em; */
  gap: 1em;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    margin-inline-end: 1em;
  }
`;

const MainLink = styled(Link)`
  display: block;

  max-width: max-content;
  padding: var(--link-padding);

  font-weight: bold;
  text-decoration: none;

  background-color: var(--clr-secondary-400);
  color: var(--clr-fill-400);

  box-shadow: 0em 0.5em 0.5em hsla(0 0% 0% / 20%);
  border-radius: 9999px;
`;

const GoBackButton = styled.a`
  display: block;

  max-width: max-content;
  padding: var(--link-padding);

  font-weight: bold;
  text-decoration: none;

  background-color: var(--clr-fill-400);
  color: var(--clr-secondary-400);

  border: 0.25em solid var(--clr-secondary-400);
  border-radius: 9999px;

  cursor: pointer;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-block-start: clamp(2rem, 10vw, 10rem);
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <MainContent>
        <Header>
          <Heading>404: Page not found.</Heading>

          <p>Weird.</p>
        </Header>

        <SuggestionsSection>
          <header>
            <p>
              <em>...maybe you meant one of these?</em>
            </p>
          </header>

          <LinkSet>
            <MainLink to="/">Home</MainLink>
            <MainLink to="/about-us">About</MainLink>
            <MainLink to="/our-work">Our Work</MainLink>
          </LinkSet>
        </SuggestionsSection>

        <SuggestionsSection>
          <header>
            <p>
              <em>Or, just try again.</em>
            </p>
          </header>

          <LinkSet>
            <GoBackButton onClick={() => navigate(-1)}>Go Back</GoBackButton>
          </LinkSet>
        </SuggestionsSection>
      </MainContent>
    </PageTemplate>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Page Not found</title>;
