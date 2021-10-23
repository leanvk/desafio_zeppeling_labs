import React from "react";
import { Container, CardContainer, Center } from "./comboSection-elements";
import { SectionTitle } from "../sectionTitle/sectionTitle";
import { Card } from "../card/card";
import combos from "../../data/combos.json";

export const ComboSection = (props) => {
  return (
    <Container>
      <Center>
        <SectionTitle claim="COMPLETE FOR YOU" title="COMBO" />
      </Center>

      <CardContainer>
        {combos.map((i) => (
          <Card
            title={i.name}
            subTitle={i.subTitle}
            price={i.price}
            img={i.img}
            callToAction={i.callToAction}
            exitBtnHidden
          ></Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default ComboSection;
