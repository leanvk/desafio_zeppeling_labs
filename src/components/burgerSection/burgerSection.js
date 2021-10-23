import React from "react";
import { Container, CardContainer, Center } from "./burgerSection-elements";
import { SectionTitle } from "../sectionTitle/sectionTitle";
import { Card } from "../card/card";
import burgers from "../../data/burgers.json";

export const BurgerSection = (props) => {
  return (
    <Container>
      <Center>
        <SectionTitle claim="DELICIOUS" title="BURGERS" />
      </Center>

      <CardContainer>
        {burgers.map((i) => (
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

export default BurgerSection;
