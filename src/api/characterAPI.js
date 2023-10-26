import axios from "axios";

const base = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

export default base