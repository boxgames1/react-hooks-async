import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LinksList from "./components/LinksList";
import TeamsClass from "./components/TeamsClass";
import TeamsHooks from "./components/TeamsHooks";
import Home from "./components/Home";
import TeamsHooksReducer from "./components/TeamsHooksReducer";
import TeamsHooksContext from "./components/TeamsHooksContext";

const App = () => {
  return (
    <Router>
      <div>
        <LinksList />
        <Route path="/" exact component={Home} />
        <Route path="/teams-class/" component={TeamsClass} />
        <Route path="/teams-hooks/" component={TeamsHooks} />
        <Route path="/teams-hooks-reducer/" component={TeamsHooksReducer} />
        <Route path="/teams-hooks-context/" component={TeamsHooksContext} />
      </div>
    </Router>
  );
};

export default App;
