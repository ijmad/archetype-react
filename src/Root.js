import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
