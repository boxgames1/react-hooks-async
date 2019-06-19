import { NFL_CRIME_API_ENDPOINT } from "../constants/Api";

export const getPlayers = () => GETFetch("/player");

export const getTeams = () => GETFetch("/team");

const GETFetch = url => {
  return fetch(`${NFL_CRIME_API_ENDPOINT}${url}`);
};
