import styled from "styled-components";
import colors from "../../colors";


export const Title = styled.div.attrs((props) => ({}))`
 color:${colors.black};
 
 text-align: left;
 margin: ${props => props.noneMargin ? 'none':'8px 16px 8px 16px' };
 font-size: ${props => props.fontSize }; ;
 font-weight: bold;
 //visibility: ${props => (props.hidden ? "hidden" : "visible")};


`;