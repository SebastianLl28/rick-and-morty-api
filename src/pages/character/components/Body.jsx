import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../../api/characterAPI";
import Card from "./Card";

const Body = () => {
  const [characters, setCharacters] = useState({
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [
      {
        id: 0,
        name: null,
        status: null,
        species: null,
        type: null,
        gender: null,
        origin: {
          name: null,
          url: null,
        },
        location: {
          name: null,
          url: null,
        },
        image: null,
        episode: [],
        url: null,
        created: null,
      },
    ],
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const { data } = await getCharacters();
      setCharacters(data);
      return data;
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="w-full grid grid-cols-4 gap-10">
      {!isLoading &&
        !isError &&
        data &&
        characters.results.map((element) => (
          <Card
            id={element.id}
            image={element.image}
            name={element.name}
            key={element.id}
            status={element.status}
            especies={element.species}
          />
        ))}
    </div>
  );
};

export default Body;
