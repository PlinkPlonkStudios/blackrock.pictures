import React from "react";
import styled from "styled-components";

import { wideSilhouetteCropped, yellowIconWhiteText } from "../images";
import classNames from "classnames";

const Wrapper = styled.footer`
  margin-top: 6em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledFooter = styled.div`
  padding-block: 5em;
  background-color: var(--clr-stroke-400);
  color: var(--clr-fill-400);
`;

const Logo = styled.img`
  height: 3em;
`;

const FooterText = styled.p`
  color: var(--clr-fill-600);
`;

const BrandColor = styled.span`
  color: var(--clr-accent-400);
`;

const FooterImg = styled.img`
  object-fit: fill;
`;

const FooterLink = styled.a`
  color: inherit;
`;

export const Footer = ({ className }: { className?: string }) => {
  return (
    <Wrapper>
      <FooterImg src={wideSilhouetteCropped} />

      <StyledFooter className={classNames(className, "flow", "content-grid")}>
        <Logo src={yellowIconWhiteText} alt="Black Rock Pictures logo" />
        <FooterText>
          &copy; Copyright 2023 PlinkPlonk Studios d.b.a.{" "}
          <BrandColor>Black Rock Pictures.</BrandColor> All Rights reserved.
        </FooterText>

        <FooterText as="div">
          <FooterLink href="https://www.termsfeed.com/live/9856e056-092e-42ed-a026-c15e3bfa5a6e">
            Privacy Policy
          </FooterLink>{" "}
          <FooterLink href="https://www.termsfeed.com/live/a5b54e56-27b0-4f0a-9699-db9ca00e9332">
            Terms &amp; Conditions
          </FooterLink>
        </FooterText>
      </StyledFooter>
    </Wrapper>
  );
};
