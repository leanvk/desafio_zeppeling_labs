import styled from "styled-components";
import colors from "../../colors";

export const Container = styled.div`
  background-color: ${colors.black};

  height: 153px;
  width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
  

  @media (max-width: 744px) {
    height: 90px;
  }
  @media (max-width: 320px) {
    height: 90px;
  }
`;
