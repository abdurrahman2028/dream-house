import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/pngwing.png";
import "./Header.css";
import { useContext } from "react";
import { authContext } from "../../Authentication/Provider/AuthProvider";
import userLogo from "../../assets/User-Profile.png";

const Header = () => {
  const { user, logout } = useContext(authContext);
  const list = (
    <>
      <li>
        <NavLink
          to="/"
          rel="noopener noreferrer"
          id="nav-link"
          className="flex items-center px-4 -mb-1 text-zinc-800 text-[14.5px] font-medium"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/featured"
          rel="noopener noreferrer"
          id="nav-link"
          className="flex items-center px-4 -mb-1 text-zinc-800 text-[14.5px] font-medium"
        >
          Featured
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/explore"
          rel="noopener noreferrer"
          id="nav-link"
          className="flex items-center px-4 -mb-1 text-zinc-800 text-[14.5px] font-medium"
        >
          Explore
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          rel="noopener noreferrer"
          id="nav-link"
          className="flex items-center px-4 -mb-1 text-zinc-800 text-[14.5px] font-medium"
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="absolute top-0 blur-[25px] bg-neutral-100 lg:px-52 h-[40px] w-full flex items-center justify-center "></div>
      <div className="relative navbar lg:px-52 bg-neutral-100/60 px-10 h-20 flex items-center justify-center ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {list}
            </ul>
          </div>
          <Link to="/">
            <img className="w-14" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7 ">{list}</ul>
        </div>
        <div className="navbar-end gap-5">
          {user ? (
            <div className={` dropdown dropdown-end`}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-40 rounded-full">
                  <img alt="Logo" title={user.displayName} src={user?.photoURL || userLogo} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/profile" className="justify-between">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          )
          :
          (
            <NavLink
              to="/login"
              id="nav-link"
              className={` btn`}
            >
              Log in
            </NavLink>
          )
        }
        </div>
      </div>
    </>
  );
};

export default Header;
