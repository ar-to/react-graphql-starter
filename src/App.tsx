import React from "react";
import {
  Switch,
  Route,
} from "react-router";
import OriginalCounterPage from "./features/counter";

function App() {
  return (
    <Switch>
      <Route path="/" component={OriginalCounterPage} />
      <Route path="/original" component={OriginalCounterPage} />
    </Switch>
  );
}

export default App;
