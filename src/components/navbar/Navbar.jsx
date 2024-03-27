import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold lg:text-3xl">
          Unique Recipes
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <div className="form-control hidden lg:block relative">
          <IoSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto pl-9 bg-gray-200 rounded-full"
          />
        </div>
        <a className="btn bg-green-400  rounded-full aspect-square p-2 text-2xl mr-1 lg:mr-0">
          <CgProfile />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
