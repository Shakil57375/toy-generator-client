import { Link } from "react-router-dom";

const Header = () => {
    const items = <div className="flex flex-col lg:flex-row gap-5">
        <Link className="text-lg text-gray-700" to="/">Home</Link>
        <Link className="text-lg text-gray-700" to="/allToys">All Toys</Link>
        <Link className="text-lg text-gray-700" to="/myToys">My Toys</Link>
        <Link className="text-lg text-gray-700" to="/AddToy">Add a Toy</Link>
        <Link className="text-lg text-gray-700" to="/blogs">Blogs</Link>
    </div>
  return (
    <div>
      <div className="navbar lg:pt-10 pt-5 lg:pb-6 pb-3 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {items}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">SportyKidz</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
