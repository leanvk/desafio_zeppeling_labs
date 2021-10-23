import React from "react";

import { Container, ButtonContainer } from "./orderView-elements";
import OrderHeader from "../orderHeader/orderHeader";
//import colors from "../../colors";
import OrderForm from "../order-form/orderForm";
import combos from "../../data/combos.json";
import { ReactComponent as Cart } from "../../svg/cart.svg";
import { Button } from "../header/header-elements";
import { Span } from "../buton/buton-elements";
import colors from "../../colors";

export const OrderView = (props) => {
  return (
    <Container>
      <OrderHeader
        img={combos[1].img}
        title={combos[1].name}
        subTitle={combos[1].subTitle}
        btnDisplayNone
        width100
      />

      <OrderForm
        callToAction={combos[1].callToAction}
        img={combos[1].img}
        title={combos[1].name}
        subTitle={combos[1].subTitle}
        price={combos[1].price}
        size={combos[1].size}
        sodaFlavor={combos[1].sodaFlavor}
        toppings={combos[1].toppings}
      />

      <ButtonContainer>
        <Button
          bgcolor={colors.green}
          color={colors.withe}
          justify="space-between"
          width="40vw"
        >
          <Cart /> <Span color={colors.withe}>View order</Span>{" "}
          <Span>
            <Span color={colors.grey}>$</Span>11.99
          </Span>{" "}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default OrderView;
