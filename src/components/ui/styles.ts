import styled from "styled-components";
import circles from "../../assets/circles.svg";

export const Wrapper = styled.div`
  display: grid;
  padding: 0 10px;
  place-items: center;
  min-height: 100vh;
  background: no-repeat url(${circles}) #eaf2f2;
  text-align: center;
  overflow: hidden;
`;
