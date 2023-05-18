import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser);
    })
    .catch(error =>{
      console.log(error.message);
    })
  }
    const items = <div className="flex flex-col lg:flex-row gap-5">
        <Link className="text-lg text-gray-700" to="/">Home</Link>
        <Link className="text-lg text-gray-700" to="/allToys">All Toys</Link>
        <Link className="text-lg text-gray-700" to="/blogs">Blogs</Link>
        {
          user?.email ? <><Link className="text-lg text-gray-700" to="/myToys">My Toys</Link>
          <Link className="text-lg text-gray-700" to="/AddToy">Add a Toy</Link></> : <Link className="text-lg text-gray-700" to="/login">Login</Link>
        }
        
    </div>
  return (
    <div>
      <div className="navbar lg:pt-10 pt-5 lg:pb-6 pb-3 lg:px-8 shadow-xl mb-12">
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
          <Link to="/"><img src="https://i.ibb.co/c6StNVR/sporty-Kids.png" alt="" className="w-20 h-16" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email ? <div className="flex gap-2 cursor-pointer">
            <span className='text-white mr-0 lg:mr-3 '> <img src={user.photoURL} title = {user.displayName ? user.displayName : " "} width={50} height={50} className="rounded-full" alt="" /></span>
            <button className="d-btn btn" onClick={handleLogOut}>Sign Out</button>
          </div> : " "
          }
          
        </div>
      </div>
    </div>
  );
};

export default Header;
