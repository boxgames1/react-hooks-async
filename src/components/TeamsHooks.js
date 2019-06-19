import React from "react";
import ReactPerformance from "react-performance";

const TeamsHooks = () => {
  return <div />;
};

export default ReactPerformance.measure({
  getId: "teams_with_hooks",
  Component: TeamsHooks,
  isCollapsed: false
});
