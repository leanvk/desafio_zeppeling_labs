import styled from "styled-components";
import colors from "../../colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 16px 16px;
  grid-template-areas:
    "header header header"
    "size sodaFlavor sodaFlavor"
    "toppings toppings toppings";

  font-family: SF Pro, -apple-system, BlinkMacSystemFont, ‘Segoe UI’, Roboto,
    Oxygen, Ubuntu, Cantarell, ‘Open Sans’, ‘Helvetica Neue’, sans-serif;
  border-radius: 8px;
  width:100%;
  height: fit-content;
  background-color: ${colors.withe};
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.12));
  box-sizing: border-box;
  overflow: hidden;

 @media (max-width: 320px) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1.5fr 0.5fr 1fr;
    grid-template-rows: 0.5fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.6fr 1.4fr;
    gap: 16px 16px;
    grid-template-areas:
      "header header header"
      "size toppings toppings"
      "sodaFlavor toppings toppings";
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  justify-content: space-evenly;
  width:200px;
`;

export const ImgContainer = styled.div.attrs((props) => ({}))`
 
 
 background-image: url(${(props) => props.img});

  background-color: ${colors.grey};
  height: 112px;
  min-width: 128px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


  height: 112px;
  width: 128px;
  @media (max-width: 320px) {
    
    height: 177px;
    min-width:117px;

  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  margin-top: 10px;
`;

export const Header = styled.div.attrs((props) => ({}))`
  grid-area: header;
  display: flex;
  border-bottom: 1px solid ${colors.grey};
  display: ${(props) => (props.displayNone ? "none" : "")};
  justify-content: flex-start;
  
  
  `;

export const RightContainer = styled.div`
  display: flex;

  @media (max-width: 320px) {
    flex-direction: column;
    
  }
`;

//

export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: -3px;
  text-align: center;
`;

export const Size = styled.div.attrs((props) => ({}))`
  grid-area: size;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 0px 0px 16px; //top right bottom left
  display: ${(props) => (props.displayNone ? "none" : "")};
`;

export const SodaFlavor = styled.div.attrs((props) => ({}))`
  grid-area: sodaFlavor;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 16px 0px 0px; //top right bottom left
  display: ${(props) => (props.displayNone ? "none" : "")};

  @media (max-width: 320px) {
    padding-left: 16px;
  }
`;

export const Toppings = styled.div.attrs((props) => ({}))`
  grid-area: toppings;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 16px 0px 16px; //top right bottom left\]
  display: ${(props) => (props.displayNone ? "none" : "")};
`;

//

export const LineDivider = styled.div`
  width: auto;

  border-bottom: 1px solid ${colors.grey};
`;
