import { NFL_CRIME_API_ENDPOINT } from "../constants/Api";

export const getTeams = () => getFetch("/team");

const getFetch = url => {
  return fetch(`${NFL_CRIME_API_ENDPOINT}${url}`);
};
