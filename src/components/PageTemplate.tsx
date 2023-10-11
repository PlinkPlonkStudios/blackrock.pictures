import React from "react";
import { NavBar, NavBarProps, navBarHeight } from "./NavBar";
import { Footer } from "./Footer";
import "../styles/resets.css";
import "../styles/colors.css";
import styled from "styled-components";

export interface PageTemplateProps {
  children: React.ReactNode;
  navBar?: NavBarProps;
}

const MainLayout = styled.div`
  --gutter-size: minmax(1em, 2vw);

  min-height: 100vh;
  min-height: 100dvh;

  display: grid;
  grid-template-columns: var(--gutter-size) 1fr var(--gutter-size);
  grid-template-rows: min-content 1fr min-content;

  & > .nav-bar,
  & > .footer {
    grid-column: 1 / -1;
  }

  & > .main-content {
    grid-column: 2 / -2;
  }

  @media screen and (min-width: 40rem) {
    --gutter-size: minmax(1em, 15vw);
  }
`;

const MainWithSpacingDueToNavBar = styled.main`
  margin-top: ${navBarHeight};
`;

export const PageTemplate = ({ children, navBar }: PageTemplateProps) => {
  return (
    <>
      <MainLayout>
        <NavBar className="nav-bar" />
        <MainWithSpacingDueToNavBar className="main-content">
          {children}
        </MainWithSpacingDueToNavBar>
        <Footer className="footer" />
      </MainLayout>
    </>
  );
};
