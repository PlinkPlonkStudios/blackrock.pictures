import styled from "styled-components";

export const VideoContainer = styled.div`
  & > iframe {
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
  }
`;
