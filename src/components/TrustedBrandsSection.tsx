import React from "react";
import styled from "styled-components";
import { logos } from "../images";
import { navBarHeight } from "./NavBar";

interface TrustedBrandsSectionProps {
  className?: string;
  id?: string;
}

const Section = styled.section`
  display: grid;
  gap: 3em;
  grid-template-areas:
    "heading heading"
    "brands p1"
    "brands p2"
    "brands p3";
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: start;

  /* TODO standardize page/section spacing */
  margin-block: 8em;

  scroll-margin-block-start: calc(${navBarHeight} + 2rem);

  & > h2 {
    grid-column: 1 / -1;
  }

  & p {
    margin-block: 1em;
  }

  /* TODO optimize media queries, consolidate with CSS classes */
  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    grid-template-areas: "heading" "p1" "brands" "p2" "p3";

    justify-items: center;

    & .center-button-on-small {
      justify-items: center;
    }
  }
`;

const BrandsGrid = styled.div`
  grid-area: brands;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const BrandLogo = styled.img`
  max-width: 10em;
  pointer-events: none;

  @media (max-width: 40rem) {
    max-width: 5em;
  }
`;

const SectionHeading = styled.h2`
  grid-area: heading;
  font-size: 2em;
`;

const ParagraphOne = styled.p`
  grid-area: p1;
`;
const TextTwo = styled.div`
  grid-area: p2;
`;

const CTASection = styled.div`
  /* TODO refactor this grid stuff */
  grid-area: "p3";

  display: grid;
  justify-items: start;
  gap: 1em;
`;

// TODO refactor this to be reusable
const CTA = styled.a`
  display: inline-block;
  padding: 1em 2em;

  background-color: var(--clr-secondary-400);
  color: var(--clr-fill-400);

  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  border-radius: 1em;
`;

export const TrustedBrandsSection = ({
  // TODO this is a lil janky but i need it for the home screen scrolling button
  id,
  className,
}: TrustedBrandsSectionProps) => {
  return (
    <Section className={className} id={id}>
      <SectionHeading>We've Been Around the Block.</SectionHeading>

      <BrandsGrid>
        <BrandLogo src={logos.stigmaGray} alt="Stigma Logo" />
        <BrandLogo src={logos.fsfGray} alt="Full Spectrum Features Logo" />
        <BrandLogo src={logos.purdueGray} alt="Purdue University Logo" />
        <BrandLogo
          src={logos.atwaGray}
          alt="All The Way Around Productions Logo"
        />
        <BrandLogo src={logos.ifaLogoGray} alt="IFA Chicago Logo" />
        <BrandLogo src={logos.meyerLawGray} alt="Meyer Law Logo" />
        <BrandLogo src={logos.p33Gray} alt="P33 Chicago Logo" />
        <BrandLogo
          src={logos.redlineLogoGray}
          alt="Redline Creative Group Logo"
        />
        <BrandLogo src={logos.techriseP33LogoGray} alt="TechRise Logo" />
        <BrandLogo src={logos.wapGray} alt="Working Actor Pro Logo" />
      </BrandsGrid>

      <ParagraphOne>
        At Black Rock Pictures, collaboration is our superpower. We work closely
        with our clients and creative partners, turning concepts into cinematic
        diamonds in the rough.
      </ParagraphOne>

      <TextTwo>
        <p>
          Fostering dynamic connections &amp; partnerships results in
          captivating films that showcase the collective brilliance of all
          parties involved, and reveal truths about the human condition.
        </p>
      </TextTwo>

      <CTASection className="center-button-on-small">
        <p>
          Ready to bring your story to life? Let's create something
          extraordinary together.
        </p>
        <CTA href="#contact">Let's do this</CTA>
      </CTASection>
    </Section>
  );
};
