import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { FaTooth } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import HamburgerMenu from "../../common/HamburgerMenu";

const Navbar = () => {
  const { state, toggleTheme } = useContext(GlobalContext);

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <>
      <div
        className={`fixed w-full shadow-md opacity-95 border-b border-slate-300/10 ${
          state.theme === "dark"
            ? "bg-gray-800 text-gray-200 bg-gradient-to-r from-blue-500 to-slate-900"
            : "bg-slate-300 text-slate-800 bg-gradient-to-r from-blue-100 to-blue-50"
        } top-0 left-0 z-50`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <Link className=" flex items-center font-bold text-lg" to="/dentist-finder">
              <FaTooth className="mr-2" size={24} /> Dentistas
            </Link>

            <div className="hidden sm:block ">
              <Link className=" mr-4 link-btn" to="/dentist-finder//dentistas">
                Profesionales
              </Link>
              <Link className=" mr-4 link-btn" to="/dentist-finder//favoritos">
                Favoritos
              </Link>
              <Link className=" mr-4 link-btn" to="/dentist-finder//contacto">
                Contacto
              </Link>
            </div>

            <label htmlFor="theme-switch">
              <button
                className={`p-2  border  rounded-md ${
                  state.theme === "dark"
                    ? "text-white border-slate-300/10 hover:bg-slate-900"
                    : "text-gray-900 hover:bg-slate-200"
                }`}
                onClick={handleThemeChange}
              >
                <div className="flex items-center ">
                  {state.theme === "dark" ? (
                    <FiSun className=" text-yellow-400" size={18} />
                  ) : (
                    <BsFillMoonStarsFill className=" text-blue-700" size={18} />
                  )}
                  <div className="hidden sm:block mx-2">
                    Tema {state.theme === "dark" ? "Claro" : "Oscuro"}
                  </div>
                </div>
              </button>
            </label>
            <HamburgerMenu />
          </nav>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
