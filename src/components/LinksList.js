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
        <Link to="/teams-hooks/">Teams with useState Hook</Link>
      </li>
      <li>
        <Link to="/teams-hooks-reducer/">Teams with useReducer Hook</Link>
      </li>
      <li>
        <Link to="/teams-hooks-context/">Teams with useContext Hook</Link>
      </li>
    </ul>
    <hr />
  </nav>
);

export default LinksList;
