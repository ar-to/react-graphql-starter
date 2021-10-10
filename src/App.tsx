import React from "react";
import { Switch, Route } from "react-router";
import OriginalCounterPage from "features/counter";
import { ProjectPage, ProjectsSearchPage } from "features/gitlab";
import { ERoute } from "app/shared";

function App() {
  return (
    <Switch>
      <Route exact path={ERoute.ROOT} component={ProjectsSearchPage} />
      <Route path={ERoute.PROJECT} component={ProjectPage} />
      <Route path={ERoute.ORIGINAL} component={OriginalCounterPage} />
    </Switch>
  );
}

export default App;
