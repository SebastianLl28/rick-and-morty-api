import { useQuery } from "@tanstack/react-query";
import base from '../api/characterAPI'

const getCharacters = async (_ctx) => {
  try {
    const [ , filter ] = _ctx.queryKey
    const { data } = await base.get("", {
      params: filter
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useCharacters = (filter) => useQuery(['characters', filter], getCharacters)