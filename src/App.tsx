import React from "react";
import {
  Switch,
  Route,
} from "react-router";
import OriginalCounterPage from "features/counter";
import GitlabSearch from "features/gitlab";
import { ERoute } from 'app/shared'

function App() {
  return (
    <Switch>
      <Route path={ERoute.ORIGINAL} component={OriginalCounterPage} />
      <Route path={ERoute.ROOT} component={GitlabSearch} />
    </Switch>
  );
}

export default App;
