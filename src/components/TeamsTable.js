import React from "react";
import PropTypes from "prop-types";
import TeamTableHeader from "./TeamTableHeader";
import Team from "./Team";

const TeamsTable = ({ teams, error, loading }) =>
  loading
    ? "Loading..."
    : error
    ? `Error happened loading teams: ${error}`
    : teams &&
      teams.length > 0 && (
        <table>
          <TeamTableHeader />
          <tbody>
            {teams.map(team => (
              <Team {...team} key={team.Team} />
            ))}
          </tbody>
        </table>
      );

TeamsTable.propTypes = {
  teams: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool
};

TeamsTable.defaultPropTypes = {
  teams: null,
  error: null,
  loading: false
};

export default TeamsTable;
