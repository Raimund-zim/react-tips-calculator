import styled from "styled-components";
import circles from "../../assets/circles.svg";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: no-repeat url(${circles}) #eaf2f2;
  overflow: hidden;
`;
