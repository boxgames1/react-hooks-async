export const NFL_CRIME_API_ENDPOINT = `${
  process.env.NODE_ENV === "development" ? "http" : "https"
}://nflarrest.com/api/v1`;
