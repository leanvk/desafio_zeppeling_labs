import styled from "styled-components";
import colors from "../../colors";
const marginButon=  '8px 16px 8px 16px'
export const Container = styled.div`
  //max-height: 274px;
  //max-width: 264px;
  border-radius:0px 0px 32px 32px;
  display: flex;
  flex-direction: row;


  justify-content: space-around;
  align-items: flex-start;
  background-color:${colors.withe};


  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.12));
  box-sizing: border-box;
  overflow:hidden;
  font-family: -apple-system, BlinkMacSystemFont, ‘Segoe UI’, Roboto, Oxygen, Ubuntu, Cantarell, ‘Open Sans’, ‘Helvetica Neue’, sans-serif;
  
  
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


  height: 384px;
  width:100%;

  box-shadow: 0px 100px 800px black inset;

  @media (max-width: 744px) {
     height :265px;
     box-shadow: 0px 25px 400px black inset;

  }
  @media (max-width: 320px) {
     height :156px;
     box-shadow: 0px 25px 400px black inset;

  }


`;

export const Button = styled.button.attrs((props) => ({

}))`

height : 32px ;
margin: ${marginButon};
margin-bottom: 16px;
background-color: ${(props => props.bgcolor)};
border-radius: 4px;
color: ${(props => props.color)};
border: none;
width: 40vw;
display:flex;
flex-direction: row;
justify-content: ${(props => props.justify)};
align-items: center;
padding: 10px 11px 10px 11px; //top right bottom left;

@media (max-width: 320px) {
   width: 50vw;

  }

`;



export const ButtonContainer = styled.div`


background-color: ${colors.withe};
border-radius:0px 0px 8px 8px ;
width: fit-content;

`;