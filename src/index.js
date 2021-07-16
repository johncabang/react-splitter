import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SplitterProvider } from "./hooks/SplitterContext";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <SplitterProvider>
      <App />
    </SplitterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
