import { useQuery } from "@tanstack/react-query";
import base from "../api/characterAPI";
import { useContext } from "react";
import { FilterContext } from "../context/filterContext";

const getCharacters = async (_ctx) => {
  try {
    const [, filter] = _ctx.queryKey;
    const { data } = await base.get("", {
      params: filter,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useCharacters = () => {
  const { initialState } = useContext(FilterContext);

  return useQuery(["characters", initialState], getCharacters, {
    refetchOnWindowFocus: false,
  });
};

const getCharacterById = async (_ctx) => {
  try {
    const [, id] = _ctx.queryKey;
    const { data } = await base.get(`/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useCharacterById = (id) =>
  useQuery(["character", id], getCharacterById, {
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
