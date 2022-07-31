import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.3px;
  border: none;
  background-color: #2ed2c9;
  margin-bottom: 10px;
  color: #fff;
  cursor: pointer;
  &:disabled {
    opacity: 30%;
    cursor: default;
  }
  @media (max-width: 576px) {
    width: 100vw;
    height: 60px;
    padding: 0 15.65px 0;
  }
`;
