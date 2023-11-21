import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  ContactForm,
  Heading,
  PageTemplate,
  VideoContainer,
} from "../components";
import styled from "styled-components";
import { WorkCategory } from "../components/our-work";

const HeadingWithPadding = styled(Heading)`
  margin-block-start: 1em;
  /* TODO figure out consistent Heading spacing */
  margin-block-end: 1em;
`;

const Grid = styled.div`
  --aspect-ratio: 16 / 9;

  display: grid;
  gap: 1em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "big  big  lil1"
    "big  big  lil2"
    "lil3 lil4 lil5";

  width: 100%;
  aspect-ratio: var(--aspect-ratio);

  & > :nth-child(1) {
    grid-area: big;
  }

  & > :nth-child(2) {
    grid-area: lil1;
  }

  & > :nth-child(3) {
    grid-area: lil2;
  }

  & > :nth-child(4) {
    grid-area: lil3;
  }

  & > :nth-child(5) {
    grid-area: lil4;
  }

  & > :nth-child(6) {
    grid-area: lil5;
  }

  @media screen and (max-width: 50rem) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "big"
      "lil1"
      "lil2"
      "lil3"
      "lil4"
      "lil5";
    aspect-ratio: unset;

    & iframe {
      aspect-ratio: var(--aspect-ratio);
      max-width: 100%;
    }
  }
`;

// TODO refactor this to be reusable
const CTA = styled.a`
  /* TODO move this elsewhere */
  margin-block: 1em;
  /* TODO this should be on reusable one */
  text-align: center;

  display: inline-block;
  padding: 1em 2em;

  background-color: var(--clr-secondary-400);
  color: var(--clr-fill-400);

  /* TODO: should this be here? */
  font-size: 1.5rem;

  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  border-radius: 1em;
`;

const AboutUsPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate className="page-flow-small">
      <HeadingWithPadding>Our Work</HeadingWithPadding>

      <WorkCategory
        className="full-width content-grid"
        title="Independent Creative Work"
        description={
          <p>
            Our passion projects, experimental narratives, and visionary
            journeys that mirror our hivemind's collective soul.
          </p>
        }
      >
        <Grid className="breakout">
          <VideoContainer>
            <iframe
              src="https://www.youtube-nocookie.com/embed/NPHRn5Ix_oo?si=8YsDEJaPsDpwTKzF"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </VideoContainer>

          <VideoContainer>
            <iframe
              src="https://www.youtube-nocookie.com/embed/xw0oKr9R14U?si=FNqMPJGXHP0YqpXp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </VideoContainer>

          <VideoContainer>
            <iframe
              src="https://www.youtube-nocookie.com/embed/Y2JyT4UNmQg?si=y1x9g7qhiHjEWc_V"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </VideoContainer>

          <VideoContainer>
            <iframe
              src="https://www.youtube-nocookie.com/embed/B7g7VcnaJ9Y?si=CSHc3YxnJhcBmKES"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </VideoContainer>

          <VideoContainer>
            <iframe
              src="https://www.youtube-nocookie.com/embed/1y1S3dyWNF8?si=zQdvWnRIxmnJ5C4V"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </VideoContainer>

          <VideoContainer>
            <iframe
              src="https://www.youtube-nocookie.com/embed/1-noCYmj9ok?si=WmNjs4gajLGOxXGB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </VideoContainer>
        </Grid>

        <CTA href="#contact" className="breakout">
          I like what I see
        </CTA>
      </WorkCategory>

      <WorkCategory
        title="Collaborations"
        description={
          <p>
            Explore our cinematic collaborations. From compelling narratives to
            breathtaking visuals, our diverse portfolio showcases storytelling
            at its finest.
          </p>
        }
      />

      <WorkCategory
        title="Client Projects"
        description={
          <p>
            Elevate your brand with our cinematic touch. Collaborate with us for
            new commercial endeavors—from captivating ads to bespoke branded
            content, we bring your vision to life.
          </p>
        }
      />

      {/* TODO nested content-grid with this isn't working properly on mobile */}
      {/* eg .content-grid > .full-width.content-grid has x-overflow */}
      <ContactForm className="full-width" title={"We Want to Hear from You."}>
        <p>
          Like what you see above? We can make it happen &mdash; for you. Drop
          us a line and let's turn your vision into captivating visual
          storytelling. We're here to bring your ideas to life!
        </p>

        <div>
          <h3>Let's Create Together</h3>
          <p>
            Embark on your next film adventure with a simple message. Whether
            you have a script to discuss, a project proposal, or seek advice on
            your filmmaking career, we're here to help. Reach out through the
            contact form to share your ideas, ask questions, or learn more about
            our services. We're eager to collaborate and create exceptional
            cinematic experiences together, so drop us a line, and we'll get
            back to you promptly.
          </p>
        </div>
      </ContactForm>
    </PageTemplate>
  );
};

export default AboutUsPage;

export const Head: HeadFC = () => (
  <title>Our Work | black rock pictures.</title>
);
