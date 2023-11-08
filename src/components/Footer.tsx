import React from "react";
import styled from "styled-components";

import { wideSilhouetteCropped, yellowIconWhiteText } from "../images";

const Wrapper = styled.footer``;

const StyledFooter = styled.div`
  padding: 3em;
  background-color: var(--clr-stroke-400);
  color: var(--clr-fill-400);
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

const FooterImg = styled.img`
  object-fit: fill;
`;

export const Footer = ({ className }: { className?: string }) => {
  return (
    <Wrapper>
      <FooterImg src={wideSilhouetteCropped} />

      <StyledFooter className={className}>
        <Logo src={yellowIconWhiteText} alt="Black Rock Pictures logo" />
        <FooterText>
          &copy; Copyright 2023 PlinkPlonk Studios d.b.a.{" "}
          <BrandColor>Black Rock Pictures.</BrandColor> All Rights reserved.
        </FooterText>
      </StyledFooter>
    </Wrapper>
  );
};
