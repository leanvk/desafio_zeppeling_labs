import styled from "styled-components";
import colors from "../../colors";

export const Container = styled.div.attrs((props) => ({}))`
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;
width: fit-content;



`;

export const ClaimContainer = styled.div.attrs((props) => ({}))`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width:100%;

`;

export const Line = styled.div.attrs((props) => ({}))`

width:100%;

border-bottom: 1px solid ${colors.purple}

`;

export const Text = styled.div.attrs((props) => ({}))`
  font-family: antonio;
  color: ${colors.purple};
  font-size: 16px;
  margin: 0px 5px 0px 5px;
  white-space: nowrap;
`;

export const SpecialTitle = styled.div.attrs((props) => ({}))`
  font-size: 40px;
  color: ${colors.purple};
  display: grid;
  
  
`;

export const Span = styled.div.attrs((props) => ({}))`
  grid-column: 1;
  grid-row: 1;
  
`;