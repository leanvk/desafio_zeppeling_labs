import React from "react";
import { Span } from "../buton/buton-elements";
import { Container, ButtonContainer,Button } from "./header-elements";
import { ReactComponent as Logo } from "../../svg/Logo.svg";
import { ReactComponent as Bag } from "../../svg/bag.svg";
import colors from "../../colors";

export const Header = (props) => {
  return (
    <Container img={"https://i.imgur.com/tl4szn3.png"}>
      <Logo ></Logo>

      <ButtonContainer>
        <Button bgcolor={colors.red} color={colors.withe} justify='space-between' width="40vw"> 
          {" "}
          <Bag /> <Span color={colors.withe}>View order</Span>{" "}
          <Span>
            <Span color={colors.grey}>$</Span>11.99
          </Span>{" "}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
