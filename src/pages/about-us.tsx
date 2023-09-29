import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { PageTemplate } from "../components/PageTemplate";

const AboutUsPage: React.FC<PageProps> = () => {
  return (
    <PageTemplate>
      <main>
        <h1>About the Crew</h1>
        {/* Each person is an `article` */}
        {/* has header or h2 or h3 for name */}
        {/* has img */}
        {/* has description */}
        {/* has title/role */}
        {/* has quote */}
      </main>
    </PageTemplate>
  );
};

export default AboutUsPage;

export const Head: HeadFC = () => <title>About | black rock pictures.</title>;
