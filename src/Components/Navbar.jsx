import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <NavLink to="elements">Elements</NavLink>
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
        <a className="btn btn-ghost text-xl">Gaming Conventions</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal mr-2 px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
