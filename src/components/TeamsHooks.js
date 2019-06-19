import React, { useEffect, useState } from "react";
import ReactPerformance from "react-performance";
import TeamsTable from "./TeamsTable";
import { getTeams } from "../helpers/ApiConsumer";

const TeamsHooks = () => {
  const [error, setError] = useState(null);
  const [teams, setTeams] = useState(null);
  useEffect(() => {
    fetchTeams(setError, setTeams);
  }, []);

  return <TeamsTable teams={teams} error={error} />;
};

const fetchTeams = async (setError, setTeams) => {
  try {
    const response = await getTeams();
    const teams = await response.json();
    setTeams(teams);
  } catch (error) {
    setError(error);
  }
};

export default ReactPerformance.measure({
  getId: "teams_with_hooks",
  Component: TeamsHooks,
  isCollapsed: false
});
