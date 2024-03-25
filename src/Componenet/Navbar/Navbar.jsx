import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="hover:bg-[#23BE0A]">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="hover:bg-[#23BE0A]">
        <NavLink to={"/listedBooks"}>Listed Books</NavLink>
      </li>
      <li className="hover:bg-[#23BE0A]">
        <NavLink to={"/pagesToRead"}>Pages to Read</NavLink>
      </li>
      <li className="hover:bg-[#23BE0A]">
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li className="hover:bg-[#23BE0A]">
        <NavLink to={"/services"}>Services</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <NavLink to={"/"} className="btn btn-ghost text-3xl font-bold">
          Book Vibe
        </NavLink>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <a className="btn bg-green-500 text-white">Sign In</a>
        <a className="btn bg-blue-500 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
