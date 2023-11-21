import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="english-towne"
      rel="preload"
      href="/fonts/EnglishTowne.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
  ]);
};
