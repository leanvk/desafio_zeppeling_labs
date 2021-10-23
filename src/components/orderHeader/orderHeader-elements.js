//Container,ImgContainer,ExitButton,BottomContainer,Tittle,SubTittle,ButtonContainer,Button,

import styled from "styled-components";
import colors from "../../colors";

const marginCard = "8px 16px 8px 16px";

export const Container = styled.div`
  //max-height: 274px;
  //max-width: 264px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: f;
  background-color: ${colors.withe};
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.12));
  box-sizing: border-box;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, ‘Segoe UI’, Roboto, Oxygen,
    Ubuntu, Cantarell, ‘Open Sans’, ‘Helvetica Neue’, sans-serif;
  width: 100%;
  height: 243px;
  // margin:32px ;

 
`;

export const ImgContainer = styled.div.attrs((props) => ({}))`
  display: flex;
  background-image: url(${(props) => props.img});

  background-color: ${colors.grey};
  height: 176px;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  justify-content: flex-end;

  @media (max-width: 320px) {
    height: 165px;
    width: 208px;
    background-repeat: repeat-y;
  }
`;

export const ExitButton = styled.button.attrs((props) => ({}))`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  height: 23px;
  width: 23px;
  margin: ${marginCard};
  margin-right: 32px;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
`;

export const BottomContainer = styled.div`

  text-align: start;
  
`;

export const ButtonContainer = styled.div.attrs((props) => ({}))`
  display: flex;
  justify-content: space-between;
  display: ${(props) => (props.btnDisplayNone ? "none" : "flex")};
  margin:32px;
`;

export const SubtitleContainer = styled.div.attrs((props) => ({}))`
  @media (max-width: 320px) {
    display: none;
  }
`;
