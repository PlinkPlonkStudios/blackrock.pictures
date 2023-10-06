import React from "react";
import { NavBar, NavBarProps } from "./NavBar";
import { Footer } from "./Footer";
import "../styles/resets.css";
import "../styles/colors.css";
import styled from "styled-components";

export interface PageTemplateProps {
  children: React.ReactNode;
  navBar?: NavBarProps;
}

const MainLayout = styled.div`
  min-height: 100vh;
  min-height: 100dvh;

  display: grid;
  grid-template-columns: minmax(1em, 10vw) 1fr minmax(1em, 10vw);

  & > .nav-bar,
  & > .footer {
    grid-column: 1 / -1;
  }

  & > .main-content {
    grid-column: 2 / -2;
  }
`;

export const PageTemplate = ({ children, navBar }: PageTemplateProps) => {
  return (
    <>
      <MainLayout>
        <NavBar className="nav-bar" />
        <main className="main-content">{children}</main>
        <Footer className="footer" />
      </MainLayout>
    </>
  );
};
