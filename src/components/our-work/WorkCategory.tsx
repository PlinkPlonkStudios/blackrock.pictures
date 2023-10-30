import React from "react";
import styled from "styled-components";

export interface WorkCategoryProps {
  title: string;
  description?: string;
}

const Section = styled.section`
  margin-block-start: 6em;
  margin-block-end: 12em;

  & > header {
    margin-block: 3em;
  }
`;

export const WorkCategory = ({
  title,
  description,
  children,
}: React.PropsWithChildren<WorkCategoryProps>) => {
  return (
    <Section>
      <header>
        <h2>{title}</h2>
        {/* TODO temporary filler for `description` */}
        <p>
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolore
          quibusdam eligendi ut perferendis quidem eum assumenda illo veniam
          voluptates.
        </p>
      </header>

      {children}

      {/* TODO temporary filler for `children` */}
      <li>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        culpa nemo repellendus placeat sequi voluptatem veniam unde soluta
        veritatis exercitationem iusto, vero nulla non dolorum libero iure est
        facilis. Eius illum reiciendis dolores voluptatibus doloremque
        dignissimos nisi dolorum quis dolore dicta facere nostrum culpa ex
        facilis aspernatur, eveniet distinctio consectetur?
      </li>
      <li>
        Doloribus aliquid obcaecati ea delectus quidem, repudiandae blanditiis
        reprehenderit, expedita, excepturi ducimus tempora! Atque quae veniam,
        explicabo fugiat consequuntur ipsa cupiditate. Vitae, fuga blanditiis
        velit unde, nemo rerum adipisci cupiditate sint omnis, ab ipsam in
        ipsum. Maxime quos assumenda atque, saepe perspiciatis incidunt,
        suscipit doloremque molestiae voluptas corrupti, inventore fugiat.
      </li>
      <li>
        Illum, veritatis? Commodi illo possimus, impedit inventore nam debitis
        corrupti, dignissimos quidem non, laboriosam amet praesentium rem itaque
        iusto sapiente. Enim aspernatur obcaecati temporibus dicta a nemo
        ducimus sed provident dolores magnam nihil cumque amet, mollitia
        cupiditate vitae ratione! Consequuntur ad blanditiis impedit asperiores
        reprehenderit ab omnis, obcaecati porro dolores?
      </li>
    </Section>
  );
};
