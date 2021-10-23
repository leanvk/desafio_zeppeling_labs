import React from "react";
import { Container, CardContainer, Center } from "./otherSection-elements";
import { SectionTitle } from "../sectionTitle/sectionTitle";
import { Card } from "../card/card";
import sides from "../../data/sides.json";

export const OtherSection = (props) => {
  return (
    <Container>
      <Center>
        <SectionTitle claim="MORE?" title="OTHER" />
      </Center>

      <CardContainer>
        {sides.map((i) => (
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

export default OtherSection;
