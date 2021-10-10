import React from "react";
import {
  Switch,
  Route,
} from "react-router";
import OriginalCounterPage from "features/counter";
import GitlabSearch from "features/gitlab";
import ProjectPage from "features/gitlab/ProjectPage";
import { ERoute } from 'app/shared'

function App() {
  return (
    <Switch>
      <Route exact path={ERoute.ROOT} component={GitlabSearch} />
      <Route path={ERoute.PROJECT} component={ProjectPage} />
      <Route path={ERoute.ORIGINAL} component={OriginalCounterPage} />
    </Switch>
  );
}

export default App;
