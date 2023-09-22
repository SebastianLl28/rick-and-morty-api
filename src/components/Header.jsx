import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full dark:bg-gray-900">
      {/* bg-red-200 sm:bg-red-500 */}
      <div className="container mx-auto py-4 px-4 flex items-center  justify-between flex-wrap ">
        <div className="flex-grow basis-0">
          <Link to="/">
            <img
              src="/logo.png"
              className="h-20 shadow-logo cursor-pointer"
              alt=""
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 [&>li>a]:text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "!text-[#00b5cc]" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/characters"
                className={({ isActive, isPending }) =>
                  isActive ? "!text-[#00b5cc]" : "text-white"
                }
              >
                characters
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/locations"
                className={({ isActive, isPending }) =>
                  isActive ? "!text-[#00b5cc]" : "text-white"
                }
              >
                locations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/episodes"
                className={({ isActive, isPending }) =>
                  isActive ? "!text-[#00b5cc]" : "text-white"
                }
              >
                episodes
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex-grow basis-0 flex justify-end">
          <Toggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
