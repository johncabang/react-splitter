import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #3d6666;
  max-width: 1440px;
  font-family: "Space Mono", monospace;
  font-size: 16px;
}

body {
  background-color: #c5e4e7;
}

`;

export default GlobalStyles;
