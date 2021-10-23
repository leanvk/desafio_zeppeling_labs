import React from "react";

import {
  ButtonContainer,
  ImgContainer,
  TextContainer,
  Header,
  Size,
  SodaFlavor,
  Toppings,
  LineDivider,
  Container,
  List,
  RightContainer
} from "./orderForm-elemets";

import { Button, Span } from "../buton/buton-elements";
import { Title } from "../title/title-elements";
import { Subtitle } from "../subtitle/subtitle-elements";
import { Checkbox } from "../checkbox/checkbox";
import { Radial } from "../radial/radial";
import { ReactComponent as Cart } from "../../svg/cart.svg";

import colors from "../../colors";

export const Card = (props) => {
  return (
    <Container>
      <Header hidden={props.headerHidden}>
     
        <ImgContainer img={props.img}>
       
        </ImgContainer>
        <RightContainer>
        <TextContainer>
          <Title fontSize="20px">{props.title}</Title>
          <Subtitle>{props.subTitle}</Subtitle>
        </TextContainer>
        <ButtonContainer>
          <Button>
            <Span>$</Span>
            {props.price}
          </Button>
          <Button bgcolor={colors.red} color={colors.withe}>
            <Cart /> 
            {props.callToAction}
          </Button>
        </ButtonContainer>
        </RightContainer>
      </Header>
      <Size displayNone={props.sizeDisplayNone}>
        <Title noneMargin>Tamaño</Title>
        <LineDivider />
        <List>
          {props.size.map((size) => (
            <Radial label={size} />
          ))}
        </List>
      </Size>
      <SodaFlavor displayNone={props.sodaFlavorNone}>
        <Title  noneMargin>Savor del refresco</Title>
        <LineDivider />
        <List>
          {props.sodaFlavor.map((sodaFlavor) => (
            <Radial label={sodaFlavor} />
          ))}
        </List>
      </SodaFlavor>
      <Toppings displayNone={props.toppingsDisplayNone}>
        <Title  noneMargin>Toppings</Title>
        <LineDivider />
        <List>
          {props.toppings.map((toppings) => (
            <Checkbox label={toppings} />
          ))}
        </List>
      </Toppings>
    </Container>
  );
};

export default Card;

//<Radial label="Chico"></Radial>
//<Radial label="Grande"></Radial>
