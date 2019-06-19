import React from "react";
import { Link } from "react-router-dom";

const LinksList = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/teams-class/">Teams with class</Link>
      </li>
      <li>
        <Link to="/teams-hooks/">Teams with Hooks</Link>
      </li>
    </ul>
  </nav>
);

export default LinksList;
