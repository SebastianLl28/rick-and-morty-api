import { useNavigate } from "react-router-dom";

const Character = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-4xl font-bold leading-relaxed">characters</h2>
      <div className="grid justify-center gap-5 relative sm:grid-cols-2 md:grid-cols-3 lg:justify-items-center lg:grid-cols-4">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
          className="rounded-md"
          loading="lazy"
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt=""
          className="rounded-md"
          loading="lazy"
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          alt=""
          className="rounded-md"
          loading="lazy"
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          alt=""
          className="rounded-md hidden sm:block"
          loading="lazy"
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
          alt=""
          className="rounded-md hidden sm:block"
          loading="lazy"
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
          alt=""
          className="rounded-md hidden sm:block"
          loading="lazy"
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/7.jpeg"
          alt=""
          className="rounded-md hidden md:block"
          loading="lazy"
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/8.jpeg"
          alt=""
          className="rounded-md hidden md:block"
          loading="lazy"
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/9.jpeg"
          alt=""
          className="rounded-md hidden md:block lg:hidden"
          loading="lazy"
        />
        <div className="absolute w-full h-full bg-gradient-to-t to-black/0 from-black/80" />
        <div className="absolute -bottom-5 z-10 flex w-full justify-center">
          <button
            className="bg-gray-900 font-bold py-2 px-5 z-10 rounded-md shadow"
            onClick={() => navigate("/characters")}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Character;
