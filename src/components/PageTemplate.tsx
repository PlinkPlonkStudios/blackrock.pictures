import React from "react";
import styled from "styled-components";
import classNames from "classnames";

import { NavBar, NavBarProps, navBarHeight } from "./NavBar";
import { Footer } from "./Footer";
import "../styles/resets.css";
import "../styles/global.css";
import "../styles/colors.css";
import "../styles/fonts.css";

export interface PageTemplateProps {
  children: React.ReactNode;
  navBar?: NavBarProps;
  pushToTop?: boolean;
  className?: string;
}

const MainLayout = styled.div`
  min-height: 100vh;
  min-height: 100lvh;

  display: grid;
  grid-template-rows: 1fr min-content;

  overflow-x: hidden;
`;

const MainWithSpacingDueToNavBarAndDecal = styled.main`
  position: relative;
  margin-block: ${navBarHeight};
  /* padding-inline: clamp(1em, 5vw, 10%); */

  @media screen and (min-width: 35rem) {
    /* padding-inline: clamp(1em, 15vw, 25%); */
  }

  &.push-to-top {
    margin-block-start: 0;
  }
`;

export const PageTemplate = ({
  children,
  navBar,
  pushToTop,
  className,
}: PageTemplateProps) => {
  return (
    <MainLayout>
      <NavBar className="nav-bar" {...navBar} />

      <MainWithSpacingDueToNavBarAndDecal
        className={classNames(
          "content-grid",
          {
            "push-to-top": pushToTop,
          },
          className
        )}
      >
        {children}
      </MainWithSpacingDueToNavBarAndDecal>

      <Footer />
    </MainLayout>
  );
};
