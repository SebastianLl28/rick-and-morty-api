import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  return (
    <header
      className={`w-full dark:bg-gray-900 z-10  ${
        isActive ? "h-screen fixed top-0" : "relative"
      }`}
    >
      <div
        className={`container mx-auto py-4 px-4 flex items-center  justify-between flex-wrap gap-x-5 ${
          isActive && "h-full"
        }`}
      >
        <div className="flex-grow lg:basis-0">
          <Link to="/">
            <img
              src="/logo.png"
              className="sm:h-20 h-14 shadow-logo cursor-pointer"
              alt=""
            />
          </Link>
        </div>
        <nav
          className={`${
            isActive ? "block order-2 relative w-full h-full" : "hidden"
          } lg:block lg:order-none`}
        >
          <ul
            className={`flex [&>li>a]:text-white items-center  ${
              isActive
                ? "flex-col content-center h-full justify-center space-y-9 text-2xl font-bold"
                : "space-x-6"
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "!text-[#00b5cc]" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/characters"
                className={({ isActive }) =>
                  isActive ? "!text-[#00b5cc]" : "text-white"
                }
              >
                characters
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/locations"
                className={({ isActive }) =>
                  isActive ? "!text-[#00b5cc]" : "text-white"
                }
              >
                locations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/episodes"
                className={({ isActive }) =>
                  isActive ? "!text-[#00b5cc]" : "text-white"
                }
              >
                episodes
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="lg:flex-grow lg:basis-0 flex justify-end">
          <Toggle />
        </div>
        <button
          className="block lg:hidden cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
              fill="currentColor"
            />
            <path
              d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
              fill="currentColor"
            />
            <path
              d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
