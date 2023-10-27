import React from "react";
import styled from "styled-components";

import { NavBar, NavBarProps, navBarHeight } from "./NavBar";
import { Footer } from "./Footer";
import "../styles/resets.css";
import "../styles/colors.css";
import footerImg from "../images/wide-silhouette-cropped.png";

export interface PageTemplateProps {
  children: React.ReactNode;
  navBar?: NavBarProps;
}

const MainLayout = styled.div`
  min-height: 100vh;
  min-height: 100dvh;

  display: grid;
  grid-template-rows: 1fr min-content;
`;

const MainWithSpacingDueToNavBarAndDecal = styled.main`
  position: relative;
  margin-block-start: ${navBarHeight};
  /* close enough */
  padding-block-end: ${navBarHeight};
  padding-inline: clamp(1em, 5vw, 10%);
  min-height: 90vh;
  min-height: 90dvh;

  @media screen and (min-width: 25rem) {
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
    <>
      <MainLayout>
        <NavBar className="nav-bar" />

        <MainWithSpacingDueToNavBarAndDecal className="main-content">
          {children}
          {/* TODO figure out what i really want to do with this. have it on every page? only hero? etc */}
          <FooterImg src={footerImg} />
        </MainWithSpacingDueToNavBarAndDecal>

        <Footer className="footer" />
      </MainLayout>
    </>
  );
};
