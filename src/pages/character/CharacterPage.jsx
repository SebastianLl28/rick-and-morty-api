import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../api/characterAPI";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Body from "./components/Body";

const CharacterPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <Search />
      <div className="flex gap-6">
        <Filter />
        <div className="h-96 w-[1px] bg-gray-500"></div>
        <Body />
      </div>
    </div>
  );
};

export default CharacterPage;
