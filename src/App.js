import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LinksList from "./components/LinksList";
import TeamsClass from "./components/TeamsClass";
import TeamsHooks from "./components/TeamsHooks";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div>
        <LinksList />
        <Route path="/" exact component={Home} />
        <Route path="/teams-class/" component={TeamsClass} />
        <Route path="/teams-hooks/" component={TeamsHooks} />
      </div>
    </Router>
  );
};

export default App;
