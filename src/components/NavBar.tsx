import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import yellowAndWhite from "../images/yellow-icon-white-text.png";

export const navBarHeight = "5rem";

const SiteHeader = styled.header`
  --navbar-height: ${navBarHeight};
  --logo-height: 3rem;

  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  color: var(--clr-fill-400);
  background-color: var(--clr-stroke-400);
`;

const Nav = styled.nav`
  --padding: calc((var(--navbar-height) - var(--logo-height)) / 2);
  display: flex;
  align-items: center;
  padding: var(--padding) clamp(1em, 5vw, 3em);
  width: 100%;

  & > :first-child {
    margin-inline-end: auto;
  }
`;

const MobileNavToggle = styled.button`
  aspect-ratio: 1 / 1;
  padding: 1em;

  border-color: transparent;
  border-width: 0px;
  background-color: transparent;
  font-weight: bold;

  cursor: pointer;

  @media (min-width: 45rem) {
    display: none;
  }
`;

const Hamburger = styled.div`
  position: relative;
  transition: transform 250ms ease-in-out;

  &,
  &::before,
  &::after {
    background-color: var(--clr-accent-400);
    width: 1.5em;
    aspect-ratio: 7 / 1;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
  }

  &::before {
    transform: translateY(-0.5em);
  }

  &::after {
    transform: translateY(0.5em);
  }

  &[aria-expanded="true"] {
    transform: rotate(45deg);

    &::before {
      opacity: 0;
      transform: translateY(0);
    }

    &::after {
      transform: rotate(-90deg);
    }
  }
`;

const VisuallyHiddenH2 = styled.h2`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

/**
 * https://www.a11yproject.com/posts/how-to-hide-content/
 */
export const VisuallyHidden = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Logo = styled.img`
  height: var(--logo-height);
  object-fit: cover;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1em;

  list-style-type: none;

  transition: opacity 250ms ease;

  @media (max-width: 45rem) {
    position: fixed;

    flex-direction: column;

    padding: 3em 2em;
    inset: var(--navbar-height) 0 0 0;

    font-size: 2em;
    text-align: center;

    background-color: var(--clr-stroke-400);

    opacity: 0;
    pointer-events: none;

    &[aria-expanded="true"] {
      opacity: 1;
      pointer-events: initial;
    }
  }
`;

const NavItem = styled.li`
  text-transform: uppercase;
  letter-spacing: -0.1ch;

  & > a {
    color: inherit;
    text-decoration: none;
  }
`;

export interface NavBarProps {
  className?: string;
  // TODO implement this
  variant?: "default" | "inverted" | "transparent";
}

export const NavBar = ({ className, variant }: NavBarProps) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <SiteHeader className={className}>
      <VisuallyHiddenH2 id="primary-nav-label">
        Main Navigation Menu
      </VisuallyHiddenH2>

      <Nav id="primary-nav" aria-labelledby="primary-nav-label">
        <Link to="/">
          <VisuallyHidden>Home</VisuallyHidden>
          <Logo src={yellowAndWhite} alt="Black Rock Pictures logo" />
        </Link>

        <NavList aria-expanded={isNavExpanded}>
          <NavItem>
            <Link activeStyle={{ color: "var(--clr-accent-400)" }} to="/">
              Home
            </Link>
          </NavItem>

          <NavItem>
            <Link activeStyle={{ color: "var(--clr-accent-400)" }} to="/about">
              About
            </Link>
          </NavItem>

          <NavItem>
            <Link
              activeStyle={{ color: "var(--clr-accent-400)" }}
              to="/our-work"
            >
              Our Work
            </Link>
          </NavItem>
        </NavList>
      </Nav>

      <MobileNavToggle
        aria-controls="primary-nav"
        aria-expanded={isNavExpanded}
        onClick={() => {
          console.log("clicked");
          setIsNavExpanded(!isNavExpanded);
        }}
        style={{ color: "white" }}
      >
        <VisuallyHidden>Menu</VisuallyHidden>

        <Hamburger aria-expanded={isNavExpanded} />
      </MobileNavToggle>
    </SiteHeader>
  );
};