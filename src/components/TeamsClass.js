import React, { Component } from "react";
import ReactPerformance from "react-performance";
import { getTeams } from "../helpers/ApiConsumer";
import TeamsTable from "./TeamsTable";

class TeamsClass extends Component {
  state = {
    error: null,
    teams: null,
    loading: false
  };
  async componentDidMount() {
    try {
      this.setState({
        loading: true
      });
      const response = await getTeams();
      const teams = await response.json();
      this.setState({
        teams,
        loading: false
      });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }
  render() {
    const { error, teams, loading } = this.state;
    return <TeamsTable teams={teams} error={error} loading={loading} />;
  }
}

export default ReactPerformance.measure({
  getId: "teams_with_class",
  Component: TeamsClass,
  isCollapsed: false
});
