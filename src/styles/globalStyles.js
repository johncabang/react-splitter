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

p {
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  color: #7F9D9F;
}

h1 {
  font-weight: bold;
  font-size: 48px;
  line-height: 71px;
  letter-spacing: -1px;
  color: #26C2AE;
}

h3 {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}

`;

export default GlobalStyles;
