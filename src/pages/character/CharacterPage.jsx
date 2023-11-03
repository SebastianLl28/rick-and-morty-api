import Search from "./components/Search";
import Filter from "./components/Filter";
import Body from "./components/Body";

const CharacterPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <Search />
      <div className="flex gap-6 flex-col items-center sm:gap-12 xl:flex-row xl:items-stretch 2xl:gap-6">
        <Filter />
        <div className="h-96 w-[1px] bg-gray-500 hidden xl:block"></div>
        <Body />
      </div>
    </div>
  );
};

export default CharacterPage;
