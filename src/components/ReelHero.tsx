import React from "react";
import styled from "styled-components";

import { reelPlaceholder } from "../images";

const VideoContainer = styled.div`
  position: absolute;
  isolation: isolate;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
`;

const Shadow = styled.div`
  --top-color: transparent;
  --bottom-color: var(--clr-stroke-400);

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, var(--top-color), var(--bottom-color));

  @media screen and (max-width: 40rem) {
    --top-color: var(--clr-stroke-400);
    --bottom-color: transparent;
  }
`;

export const ReelHero = () => {
  return (
    <VideoContainer>
      <Shadow />
      <Video autoPlay loop muted>
        <source src={reelPlaceholder} type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};
