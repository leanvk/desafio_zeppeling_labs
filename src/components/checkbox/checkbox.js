import React from "react";
import styled from "styled-components";
import colors from "../../colors";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;

  &:checked + div {
    background-color: ${colors.red};
  }
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  margin: 0.6em 1em;
  padding-top: 2px;
  transform: scale(0.75);
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background:${colors.withe};
  position: absolute;
  top: 0em;
  left: -1.6em;
  border: 2px solid ${colors.red};
  border-radius: 0.2em;

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid ${colors.withe};
    border-width: 0 0.2em 0.2em 0;
    transform: rotate(45deg) translate(-2.5px, -2.5px);
  
  }
`;

export  function Checkbox({ id, label, disabled }) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      {label}
      <Input id={id} type="checkbox" />
      <Indicator />
    </Label>
  );
}
