import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Page1 from "/src/pages/Page1";
import Page2 from "/src/pages/Page2";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/1" />
      </Route>

      <Route exact path="/1" component={Page1} />
      <Route exact path="/2" component={Page2} />
    </Switch>
  );
}

export default App;
