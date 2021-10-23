import React from "react";

import {
  Container,
  ImgContainer,
  ExitButton,
  BottomContainer,
  SubtitleContainer,
  
} from "./orderHeader-elements";
import { ReactComponent as Exit } from "../../svg/exit.svg";
import { Title } from "../title/title-elements";
import { Subtitle } from "../subtitle/subtitle-elements";


export const OrderHeader = (props) => {
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
          <Subtitle>{props.subTitle}</Subtitle>
        </SubtitleContainer>
      </BottomContainer>
    </Container>
  );
};

export default OrderHeader;
