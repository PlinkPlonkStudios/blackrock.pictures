import React from "react";
import styled from "styled-components";

import yellowAndWhite from "../images/yellow-icon-white-text.png";

const StyledFooter = styled.footer`
  padding: 3em;
  background-color: var(--clr-stroke);
  color: var(--clr-fill);
`;

const Logo = styled.img`
  height: 3em;
`;

const FooterText = styled.p`
  color: #ffffffbb;
`;

const BrandColor = styled.span`
  color: var(--clr-accent);
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Logo src={yellowAndWhite} alt="Black Rock Pictures logo" />
      <FooterText>
        &copy; Copyright PlinkPlonk Studios d.b.a.{" "}
        <BrandColor>Black Rock Pictures.</BrandColor> All Rights reserved.
      </FooterText>
    </StyledFooter>
  );
};
