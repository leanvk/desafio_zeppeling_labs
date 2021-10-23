import React from "react";
import { ReactComponent as Exit } from "../../svg/exit.svg";
import { ReactComponent as Cart } from "../../svg/cart.svg";
import {
  Container,
  ImgContainer,
  ExitButton,
  BottomContainer,
  SubtitleContainer,
  ButtonContainer,
} from "./card-elements";

import { Button, Span } from "../buton/buton-elements";
import { Title } from "../title/title-elements";
import { Subtitle } from "../subtitle/subtitle-elements";


import colors from "../../colors";

export const Card = (props) => {
  return (
    <Container>
      <ImgContainer img={props.img}>
        <ExitButton hidden={props.exitBtnHidden}>
          <Exit></Exit>
        </ExitButton>
      </ImgContainer>
      <BottomContainer>
        <Title hidden={props.titleHidden}>{props.title}</Title>
        <SubtitleContainer>
         
          <Subtitle >
            {props.subTitle}
          </Subtitle>
        </SubtitleContainer>
        <ButtonContainer btnDisplayNone={props.btnDisplayNone}>
          <Button bgcolor={colors.lightgrey} color={colors.black} justify="center"  width="100%" >
            <Span>$</Span>
            {props.price}
          </Button>
          <Button bgcolor={colors.green} color={colors.withe} width="100%"  justify="center">
            <Cart /> &nbsp;&nbsp;{props.callToAction}
          </Button>
        </ButtonContainer>
      </BottomContainer>
    </Container>
  );
};

export default Card;
