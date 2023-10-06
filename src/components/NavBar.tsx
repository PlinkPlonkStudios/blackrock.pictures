import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import yellowAndWhite from "../images/yellow-icon-white-text.png";

const SiteHeader = styled.header`
  --logo-height: 3rem;

  position: sticky;

  color: var(--clr-fill-400);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1em clamp(1em, 5vw, 3em);

  background-color: var(--clr-stroke-400);

  & > :first-child {
    margin-inline-end: auto;
  }
`;

const MobileNavToggle = styled.button`
  position: absolute;
  top: 50%;
  right: 1em;
  z-index: 100;

  height: var(--logo-height);
  aspect-ratio: 1 / 1;
  transform: translateY(-50%);

  border-color: transparent;
  border-width: 0px;
  background-color: transparent;
  font-weight: bold;

  @media (min-width: 45rem) {
    display: none;
  }
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
`;

const NavList = styled.ul`
  display: flex;
  gap: 1em;

  list-style-type: none;

  transition: opacity 250ms ease;

  @media (max-width: 45rem) {
    position: fixed;

    flex-direction: column;

    padding: 3em;
    inset: 0;

    font-size: 2em;
    text-align: center;

    background-color: var(--clr-stroke-400);
    color: var(--clr-accent-400);

    opacity: 0;
    pointer-events: none;

    &[aria-expanded="true"] {
      opacity: 1;
      pointer-events: initial;
    }
  }
`;

const NavItem = styled.li`
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
      <h2 id="primary-nav-label">
        <VisuallyHidden>Main Navigation Menu</VisuallyHidden>
      </h2>

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
        <div className="hamburger-icon" />
        NAV
      </MobileNavToggle>

      <Nav id="primary-nav" aria-labelledby="primary-nav-label">
        <Link to="/">
          <VisuallyHidden>Home</VisuallyHidden>
          <Logo src={yellowAndWhite} alt="Black Rock Pictures logo" />
        </Link>

        <NavList aria-expanded={isNavExpanded}>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>

          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>

          <NavItem>
            <Link to="/our-work">Our Work</Link>
          </NavItem>
        </NavList>
      </Nav>
    </SiteHeader>
  );
};
