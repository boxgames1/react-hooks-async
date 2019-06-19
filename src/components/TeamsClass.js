import React, { Component } from "react";
import ReactPerformance from "react-performance";
import { getTeams } from "../helpers/ApiConsumer";
import Team from "./Team";
import TeamTableHeader from "./TeamTableHeader";

class TeamsClass extends Component {
  state = {
    error: null,
    teams: null
  };
  async componentDidMount() {
    try {
      const response = await getTeams();
      const teams = await response.json();
      this.setState({
        teams
      });
    } catch (error) {
      this.setState({ error });
    }
  }
  render() {
    const { error, teams } = this.state;
    return (
      <div>
        {error
          ? `Error happened loading teams: ${error}`
          : teams && (
              <table>
                <TeamTableHeader />
                {teams.map(team => (
                  <Team {...team} />
                ))}
              </table>
            )}
      </div>
    );
  }
}

export default ReactPerformance.measure({
  getId: "teams_with_class",
  Component: TeamsClass,
  isCollapsed: false
});
