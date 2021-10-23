import styled from "styled-components";
import colors from "../../colors";

export const Container = styled.div`
  background-color: ${colors.cream};
  padding: 3em;

  @media (max-width: 320px) {
    padding: 0em;
    padding-top: 2em;
    padding-bottom: 2em;
  };
`;

export const CardContainer = styled.div`
  padding: 3em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: space-around;
  align-items: center;

  @media (max-width: 320px) {
    padding: 0em;
  }

`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
