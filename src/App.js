import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LinksList from "./components/LinksList";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={LinksList} />
        <Route path="/teams-class/" component={TeamsClass} />
        <Route path="/teams-hooks/" component={TeamsHooks} />
      </div>
    </Router>
  );
};

export default App;
