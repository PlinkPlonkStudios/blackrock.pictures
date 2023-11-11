import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { yellowIconWhiteText } from "../images";

export const navBarHeight = "5rem";

const SiteHeader = styled.header`
  --navbar-height: ${navBarHeight};
  --logo-height: 3rem;

  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  z-index: 999;

  color: var(--clr-fill-400);

  transition: background-color 250ms ease-in-out;

  &.default {
    background-color: var(--clr-stroke-400);
  }

  &.transparent {
    background-color: transparent;
  }
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
      z-index: 999;
    }
  }
`;

// TODO fun hover animation
const NavItem = styled.li`
  text-transform: uppercase;
  letter-spacing: -0.1ch;

  & > a {
    --color: var(--clr-fill-400);

    position: relative;
    color: var(--color);
    text-decoration: none;

    &.active {
      --color: var(--clr-accent-400);
    }

    &::after {
      content: "";
      position: absolute;

      width: 100%;
      height: 0.25ch;
      left: 0;
      bottom: -0.25ch;

      background-color: var(--color);

      transform: translateY(-100%);
      opacity: 0;

      transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
    }

    &:hover,
    &:focus-visible {
      &::after {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;

export interface NavBarProps {
  className?: string;
  variant?: "default" | "transparent";
}

export const NavBar = ({ className, variant = "default" }: NavBarProps) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <SiteHeader className={`${className} ${variant}`}>
      <VisuallyHiddenH2 id="primary-nav-label">
        Main Navigation Menu
      </VisuallyHiddenH2>

      <Nav id="primary-nav" aria-labelledby="primary-nav-label">
        <Link to="/">
          <VisuallyHidden>Home</VisuallyHidden>
          <Logo src={yellowIconWhiteText} alt="Black Rock Pictures logo" />
        </Link>

        <NavList aria-expanded={isNavExpanded}>
          <NavItem>
            <Link activeClassName="active" to="/">
              Home
            </Link>
          </NavItem>

          <NavItem>
            <Link activeClassName="active" to="/about-us">
              About
            </Link>
          </NavItem>

          <NavItem>
            <Link activeClassName="active" to="/our-work">
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
