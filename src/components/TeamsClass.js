import React, { Component } from "react";
import ReactPerformance from "react-performance";

class TeamsClass extends Component {
  render() {
    return <div />;
  }
}

export default ReactPerformance.measure({
  getId: "teams_with_class",
  Component: TeamsClass,
  isCollapsed: false
});
