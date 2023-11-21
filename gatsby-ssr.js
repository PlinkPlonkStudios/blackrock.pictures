import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="seagram-tfb"
      rel="preload"
      href="/fonts/Seagram tfb.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
  ]);
};
