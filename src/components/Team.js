import React from "react";
import ReactPerformance from "react-performance";
import PropTypes from "prop-types";

const Team = ({
  Team,
  Team_preffered_name,
  Team_name,
  Team_city,
  Team_Conference,
  Team_Conference_Division,
  Team_logo_id,
  arrest_count
}) => (
  <tr>
    <td>{Team}</td>
    <td>{Team_preffered_name}</td>
    <td>{Team_name}</td>
    <td>{Team_city}</td>
    <td>{Team_Conference}</td>
    <td>{Team_Conference_Division}</td>
    <td>{Team_logo_id}</td>
    <td>{arrest_count}</td>
  </tr>
);

Team.propTypes = {
  Team: PropTypes.string.isRequired,
  Team_preffered_name: PropTypes.string.isRequired,
  Team_name: PropTypes.string.isRequired,
  Team_city: PropTypes.string.isRequired,
  Team_Conference: PropTypes.string.isRequired,
  Team_Conference_Division: PropTypes.string.isRequired,
  Team_logo_id: PropTypes.string.isRequired,
  arrest_count: PropTypes.string.isRequired
};

export default ReactPerformance.measure({
  getId: "team_component",
  Component: Team,
  isCollapsed: false
});
