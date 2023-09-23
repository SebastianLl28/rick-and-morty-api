import axios from "axios";

const base = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

export const getCharacters = async () => {
  try {
    const data = await base.get("");
    return data;
  } catch (error) {
    console.log(error);
  }
};
