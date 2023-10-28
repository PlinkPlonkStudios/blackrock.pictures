import React from "react";
import styled from "styled-components";

import { yellowIconWhiteText } from "../images";

const StyledFooter = styled.footer`
  padding: 3em;
  background-color: var(--clr-stroke-400);
  color: var(--clr-fill-400);

  /* TODO this is a little odd. this element is positioning itself?? the audacity! */
  margin-top: auto;
`;

const Logo = styled.img`
  height: 3em;
`;

const FooterText = styled.p`
  color: #ffffffbb;
`;

const BrandColor = styled.span`
  color: var(--clr-accent-400);
`;

export const Footer = ({ className }: { className?: string }) => {
  return (
    <StyledFooter className={className}>
      <Logo src={yellowIconWhiteText} alt="Black Rock Pictures logo" />
      <FooterText>
        &copy; Copyright 2023 PlinkPlonk Studios d.b.a.{" "}
        <BrandColor>Black Rock Pictures.</BrandColor> All Rights reserved.
      </FooterText>
    </StyledFooter>
  );
};
