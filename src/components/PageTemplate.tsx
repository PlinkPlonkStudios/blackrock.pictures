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
        className={pushToTop ? "push-to-top" : undefined}
      >
        {children}
      </MainWithSpacingDueToNavBarAndDecal>

      <Footer />
    </MainLayout>
  );
};
