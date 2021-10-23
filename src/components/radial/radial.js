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

const Label = styled.label.attrs((props) => ({}))`
  position: relative;
  display: flex;
 
  margin: 0.6em 1em;

padding-top: 2px;
transform: scale(0.75);

margin-left: ${(props)=>props.marginLeft};

`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: ${colors.withe};
  position: absolute;
  top: 0em;
  left: -1.6em;
  border: 2px solid ${colors.red};
  border-radius: 1000%;

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
    transform: rotate(45deg) translate(-3px, -1px);
  }
`;

export function Radial({ id, label, disabled }) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      {label}
      <Input id={id} type="checkbox" />
      <Indicator />
    </Label>
  );
}
