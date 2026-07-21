import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://countries.dev",
});

// Get all countries
export const getCountryData = () => {
  return api.get("/countries");
};

export const getCountryIndData = (name) =>{
  return api.get(`/name/${name}`);
};