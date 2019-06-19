/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useContext, useState } from "react";
import ReactPerformance from "react-performance";
import TeamsTable from "./TeamsTable";
import { getTeams } from "../helpers/ApiConsumer";

const defaultValues = {
  error: null,
  teams: null,
  loading: false
};

const TeamsContext = createContext();

const TeamContextProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <TeamsContext.Provider value={[state, setState]}>
      {children}
    </TeamsContext.Provider>
  );
};

const TeamsHooksConsumer = () => {
  const [state, setState] = useContext(TeamsContext);
  useEffect(() => {
    fetchTeams(state, setState);
  }, []);

  return <TeamsTable {...state} />;
};

const TeamsHooksContext = () => (
  <TeamContextProvider>
    <TeamsHooksConsumer />
  </TeamContextProvider>
);

const fetchTeams = async (state, setState) => {
  try {
    setState({ ...state, loading: true });
    const response = await getTeams();
    const teams = await response.json();
    setState({ ...state, loading: false, teams });
  } catch (error) {
    setState({ ...state, loading: false, error });
  }
};

export default ReactPerformance.measure({
  getId: "teams_with_hooks_useContext",
  Component: TeamsHooksContext,
  isCollapsed: false
});
