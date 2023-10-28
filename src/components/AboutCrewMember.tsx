import React from "react";
import styled from "styled-components";
import { CrewMember } from "../data";

interface AboutCrewMemberProps {
  crewMember: CrewMember;
  even: boolean;
}

const Card = styled.article`
  display: flex;
  gap: 2em;
  padding: 1em;
  box-shadow: 0 0.25em 0.5em hsla(0, 0%, 0%, 20%);

  & > img {
    width: 50%;
    object-fit: contain;
  }

  &[data-even="false"] {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 50rem) {
    &,
    &[data-even] {
      flex-direction: column;
    }

    & > img {
      width: 100%;
    }
  }
`;

const Header = styled.header`
  margin-block: 1em;
`;

export const AboutCrewMember = ({ crewMember, even }: AboutCrewMemberProps) => {
  const { name, role, description, imgSrc } = crewMember;
  return (
    <Card data-even={even}>
      {imgSrc && <img src={imgSrc} alt={`${name}, ${role}`} />}

      <div>
        <Header>
          <h2>{name}</h2>
          <p>
            <em>{role}</em>
          </p>
        </Header>
        <p>{description}</p>
      </div>
    </Card>
  );
};
