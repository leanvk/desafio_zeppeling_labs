import styled from "styled-components";
//import colors from "../../colors";

const marginButon=  '8px 16px 8px 16px'

export const Button = styled.button.attrs((props) => ({

}))`

height : 32px ;
margin: ${marginButon};
margin-bottom: 16px;
background-color: ${(props => props.bgcolor)};
border-radius: 4px;
color: ${(props => props.color)};
border: none;
width: ${(props => props.width)};
display:flex;
flex-direction: row;
justify-content: ${(props => props.justify)};
align-items: center;
padding: 10px 11px 10px 11px; //top right bottom left

`;


export const Span = styled.span`
color: ${(props => props.color)};

  
`;