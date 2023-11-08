import React from "react";
import styled from "styled-components";

import { NavBar, NavBarProps, navBarHeight } from "./NavBar";
import { Footer } from "./Footer";
import "../styles/resets.css";
import "../styles/colors.css";
import { wideSilhouetteCropped } from "../images";

export interface PageTemplateProps {
  children: React.ReactNode;
  navBar?: NavBarProps;
}

const MainLayout = styled.div`
  min-height: 100vh;
  min-height: 100dvh;

  display: grid;
  grid-template-rows: 1fr min-content;

  overflow-x: hidden;
`;

const MainWithSpacingDueToNavBarAndDecal = styled.main`
  position: relative;
  margin-block-start: ${navBarHeight};
  /* close enough */
  padding-block-end: calc(${navBarHeight} * 4);
  padding-inline: clamp(1em, 5vw, 10%);
  min-height: 100vh;
  min-height: 100dvh;

  @media screen and (min-width: 35rem) {
    padding-inline: clamp(1em, 15vw, 25%);
  }
`;

const FooterImg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  object-fit: fill;
`;

export const PageTemplate = ({ children, navBar }: PageTemplateProps) => {
  return (
    <MainLayout>
      <NavBar className="nav-bar" />

      <MainWithSpacingDueToNavBarAndDecal className="main-content">
        {children}
        {/* TODO figure out what i really want to do with this. have it on every page? only hero? etc */}
        {/* TODO move this out of `main` because it's not main. Maybe as part of Footer? Would help with spacing silliness */}
        <FooterImg src={wideSilhouetteCropped} />
      </MainWithSpacingDueToNavBarAndDecal>

      <Footer className="footer" />
    </MainLayout>
  );
};
