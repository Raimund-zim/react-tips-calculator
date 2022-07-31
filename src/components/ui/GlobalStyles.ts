import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
body {
   max-width: 100vw;
	max-height: 100vh;
   background: #2ED2C9;
   font-family: 'Source Sans Pro', sans-serif;
   font-weight: 400;
   color: #000;
}
`;
