import styled from "styled-components";
import colors from "../../colors";


export const Subtitle = styled.div.attrs((props) => ({}))`
color:${colors.grey};
size:12px;
text-align: left;
margin: ${props => props.noneMargin ? 'none':'8px 16px 8px 16px' };
//visibility: ${props => (props.hidden ? "hidden" : "visible")};



  
`;