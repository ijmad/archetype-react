import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "src/Main";
import Page1 from "src/pages/Page1";
import Page2 from "src/pages/Page2";

function App() {
  return (
    <Main>
      <Switch>
        <Route exact path="/">
          <Redirect to="/1" />
        </Route>

        <Route exact path="/1" component={Page1} />
        <Route exact path="/2" component={Page2} />
      </Switch>
    </Main>
  );
}

export default App;
