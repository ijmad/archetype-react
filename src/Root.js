import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "src/GlobalStyle";
import App from "src/App";

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
