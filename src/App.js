import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Main";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  return (
    <Main>
      <Switch>
        <Route exact path="/1" component={Page1} />
        <Route exact path="/2" component={Page2} />
      </Switch>
    </Main>
  );
}

export default App;
