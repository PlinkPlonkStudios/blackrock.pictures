import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

import { PageTemplate } from "../components";

const FillThePage = styled.main`
  /* Magic number based on heights of header & footer */
  min-height: 80vh;

  /* Center the content */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <FillThePage>
        <h1>404: Page not found</h1>
      </FillThePage>
    </PageTemplate>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Page Not found</title>;
