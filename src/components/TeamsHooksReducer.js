import React, { useReducer, useEffect } from "react";
import ReactPerformance from "react-performance";
import TeamsTable from "./TeamsTable";
import { getTeams } from "../helpers/ApiConsumer";

const TeamsHooksReducer = () => {
  const [state, dispatch] = useReducer(teamsFetchReducer, {
    loading: false,
    error: null,
    teams: null
  });

  const { loading, error, teams } = state;

  useEffect(() => {
    fetchTeams(dispatch);
  }, []);

  return <TeamsTable teams={teams} error={error} loading={loading} />;
};

const fetchTeams = async dispatch => {
  try {
    dispatch({ type: "FETCH_INIT" });
    const response = await getTeams();
    const teams = await response.json();
    dispatch({ type: "FETCH_SUCCESS", payload: teams });
  } catch (error) {
    dispatch({ type: "FETCH_ERROR", payload: error });
  }
};

const teamsFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        teams: action.payload
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      throw new Error();
  }
};

export default ReactPerformance.measure({
  getId: "teams_with_hooks_useReducer",
  Component: TeamsHooksReducer,
  isCollapsed: false
});
