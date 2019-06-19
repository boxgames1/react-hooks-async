import React, { useEffect, useState } from "react";
import ReactPerformance from "react-performance";
import TeamsTable from "./TeamsTable";
import { getTeams } from "../helpers/ApiConsumer";

const TeamsHooks = () => {
  const [error, setError] = useState(null);
  const [teams, setTeams] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTeams({ setError, setTeams, setLoading });
  }, []);

  return <TeamsTable teams={teams} error={error} loading={loading} />;
};

const fetchTeams = async ({ setError, setTeams, setLoading }) => {
  try {
    setLoading(true);
    const response = await getTeams();
    const teams = await response.json();
    setLoading(false);
    setTeams(teams);
  } catch (error) {
    setLoading(false);
    setError(error);
  }
};

export default ReactPerformance.measure({
  getId: "teams_with_hooks_useState",
  Component: TeamsHooks,
  isCollapsed: false
});
