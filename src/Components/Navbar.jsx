import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/games">Games</NavLink>
      </li>
      <li>
        <NavLink to="features">Features</NavLink>
      </li>
      <li>
        <NavLink to="elements">Accessories</NavLink>
      </li>
      <li>
        <NavLink to="social">Social</NavLink>
      </li>
    </>
  );
  return (
    <div className=" navbar sticky top-0 z-10 mx-auto px-4 py-2  bg-white border rounded-none border-white/80 bg-opacity-60 backdrop-blur-4xl backdrop-saturate-200 lg:px-20 lg:py-4 text-black">
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
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-riot">Gaming Conventions</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal mr-2 px-1">{navlinks}</ul>
      </div>
      <div>
        {
          user ? <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a >
                  {user.displayName}
                  
                </a>
              </li>
              <li><a onClick={handleSignOut}>Logout</a></li>
            </ul>
          </div> : <div className="navbar-end">
            <Link to='/login' className="btn btn-outline">Login</Link>
          </div>
        }
      </div>

    </div>
  );
};

export default Navbar;
