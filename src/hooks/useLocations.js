import { useQuery } from "@tanstack/react-query";
import base from "../api/locationAPI";

const getLocations = async (_ctx) => {
  try {
    const [, filter] = _ctx.queryKey;
    const { data } = await base.get("", {
      params: filter,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const useLocations = (filter) =>
  useQuery(["locations", filter], getLocations, {
    refetchOnWindowFocus: false,
  });
