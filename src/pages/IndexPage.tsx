import * as React from "react";
import type { PageProps } from "gatsby";
import { Heading, PageTemplate } from "../components";
import {
  MainContent,
  HeroSection,
  BackgroundShadow,
  Highlight,
  HeroImage,
  ContactSection,
  CF,
} from ".";

export const IndexPage: React.FC<PageProps> = () => {
  const [transparency, setTransparency] = useState(50);

  return (
    <PageTemplate>
      <MainContent>
        <HeroSection>
          <Heading>
            <BackgroundShadow data-transparency={transparency}>
              Creating <Highlight>art</Highlight> that tells{" "}
              <Highlight>stories.</Highlight>
            </BackgroundShadow>

            <div>
              <input
                type="range"
                min="0"
                max="100"
                value={transparency}
                onChange={(e) => setTransparency(e.target.value)}
              />
            </div>
          </Heading>

          <HeroImage />
        </HeroSection>

        <ContactSection>
          <CF />
        </ContactSection>
      </MainContent>
    </PageTemplate>
  );
};
