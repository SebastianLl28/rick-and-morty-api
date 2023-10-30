import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

const ButtonBack = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (!document.startViewTransition) {
      navigate(`/characters`);
      return;
    }
    document.startViewTransition(() =>
      flushSync(() => navigate(`/characters`))
    );
  };

  return (
    <a
      onClick={handleClick}
      className="border-2 cursor-pointer border-white py-1 px-4 rounded-xl backdrop-blur-lg bg-white/20 transition-colors duration-500 hover:bg-white hover:text-gray-950 flex gap-1 w-min"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
          fill="currentColor"
        />
      </svg>
      Volver
    </a>
  );
};

export default ButtonBack;
