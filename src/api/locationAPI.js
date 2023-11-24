import axios from "axios";

const base = axios.create({
  baseURL: "https://rickandmortyapi.com/api/location",
});

export default base;
