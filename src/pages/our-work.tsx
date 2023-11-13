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

const VideoContainer = styled.div`
  & > iframe {
    width: 100%;
    height: 100%;
  }
`;

const AboutUsPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <HeadingWithPadding>Our Work</HeadingWithPadding>

      <WorkCategory
        title="Independent Creative Work"
        description={
          <p>
            Our passion projects, experimental narratives, and visionary
            journeys that mirror our hivemind's collective soul.
          </p>
        }
      >
        <Grid>
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
    </PageTemplate>
  );
};

export default AboutUsPage;

export const Head: HeadFC = () => (
  <title>Our Work | black rock pictures.</title>
);
