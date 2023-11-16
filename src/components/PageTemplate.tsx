import React from "react";
import styled from "styled-components";

import { NavBar, NavBarProps, navBarHeight } from "./NavBar";
import { Footer } from "./Footer";
import "../styles/resets.css";
import "../styles/colors.css";

export interface PageTemplateProps {
  children: React.ReactNode;
  navBar?: NavBarProps;
  pushToTop?: boolean;
}

const MainLayout = styled.div`
  min-height: 100vh;
  min-height: 100dvh;

  display: grid;
  grid-template-rows: 1fr min-content;

  overflow-x: hidden;

  & > footer {
    margin-top: auto;
  }
`;

const MainWithSpacingDueToNavBarAndDecal = styled.main`
  position: relative;
  margin-block: ${navBarHeight};
  padding-inline: clamp(1em, 5vw, 10%);
  min-height: 100vh;
  min-height: 100dvh;

  @media screen and (min-width: 35rem) {
    padding-inline: clamp(1em, 15vw, 25%);
  }

  &.push-to-top {
    margin-block-start: 0;
  }

  /*
  .content-grid {
    // Parameters: Only change these
    --padding-inline: 1rem;
    --content-max-width: 70ch;
    --breakout-max-width: 90ch;

    // Calculated: Don't change here or below
    --gutter-size: minmax(var(--padding-inline), 1fr)
    --breakout-size: minmax(0, calc(
      (var(--breakout-max-width) - var(--content-max-width)) / 2
    ));
    --content-size: min(var(--content-max-width), 100% - (2 * var(--gutter-size)));
    
    display: grid;
    grid-template-columns:
      [full-width-start]
        var(--gutter-size)
        [breakout-start]
          var(--breakout-size)
          [content-start]
            var(--content-size)
          [content-end]
          var(--breakout-size)
        [breakout-end]
        var(--gutter-size)
      [full-width-end];
  }

  .content-grid > :not(.breakout, .full-width) {
    grid-column: content;
  }

  .content-grid > .breakout {
    grid-column: breakout;
  }

  .content-grid > .full-width {
    grid-column: full-width;
  }
  */
`;

export const PageTemplate = ({
  children,
  navBar,
  pushToTop,
}: PageTemplateProps) => {
  return (
    <MainLayout>
      <NavBar className="nav-bar" {...navBar} />

      <MainWithSpacingDueToNavBarAndDecal
        className={`${pushToTop ? "push-to-top" : undefined} content-grid`}
      >
        {children}
      </MainWithSpacingDueToNavBarAndDecal>

      <Footer />
    </MainLayout>
  );
};
