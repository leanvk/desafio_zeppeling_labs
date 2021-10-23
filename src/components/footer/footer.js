import React from "react";
import { Container } from "./footer-elements";

import { ReactComponent as Logo } from "../../svg/Logo.svg";

export const Footer = (props) => {
  return (
    <Container>
      <Logo></Logo>
    </Container>
  );
};

export default Footer;
