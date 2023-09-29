import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import "../styles/resets.css";
import "../styles/colors.css";

export interface PageTemplateProps {
  children: React.ReactNode;
}

export const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
