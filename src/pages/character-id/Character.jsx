import { useParams } from "react-router-dom";
import { useCharacterById } from "../../hooks/useCharacters";
import ButtonBack from "./components/ButtonBack";
import Description from "./components/Description";

const Character = () => {
  const { id } = useParams();

  const { data: character, isLoading, isError } = useCharacterById(id);

  return (
    <div className="container mx-auto px-4 py-6 space-y-5">
      <ButtonBack />
      {!isLoading && !isError && character && (
        <Description character={character} />
      )}
    </div>
  );
};

export default Character;
