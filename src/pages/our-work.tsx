import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Heading, PageTemplate } from "../components";
import styled from "styled-components";
import { WorkCategory } from "../components/our-work";

const HeadingWithPadding = styled(Heading)`
  margin-block-start: 1em;
  /* TODO figure out consistent Heading spacing */
  margin-block-end: 1em;
`;

const AboutUsPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <HeadingWithPadding>Our Work</HeadingWithPadding>

      <WorkCategory title="Independent Creative Work">
        <section>
          <header>
            <h3>Saint Joseph</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              doloribus odit illo vel velit quisquam nulla minus atque, sunt
              soluta.
            </p>
          </header>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/NPHRn5Ix_oo?si=8YsDEJaPsDpwTKzF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </section>

        <section>
          <header>
            <h3>yours truly, bullying</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              aut voluptatibus nisi molestiae quo laudantium accusamus
              repudiandae optio rerum dolores.
            </p>
          </header>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/xw0oKr9R14U?si=FNqMPJGXHP0YqpXp"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
      </WorkCategory>
      <WorkCategory title="Collaborations" />
      <WorkCategory title="Client Projects" />
    </PageTemplate>
  );
};

export default AboutUsPage;

export const Head: HeadFC = () => (
  <title>Our Work | black rock pictures.</title>
);
