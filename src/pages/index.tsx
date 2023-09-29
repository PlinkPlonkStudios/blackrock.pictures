import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { PageTemplate } from "../components/PageTemplate";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <main>ayo</main>
    </PageTemplate>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>black rock pictures.</title>;
