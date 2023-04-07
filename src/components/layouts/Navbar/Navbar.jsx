import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Navbar = () => {
  const { state, toggleTheme } = useContext(GlobalContext);

  const handleThemeChange = () => {
    toggleTheme();
  };
  return (
    <div>
      <h2>Navbar</h2>

      <label htmlFor="theme-switch" className="theme-switch">
        <input
          type="checkbox"
          id="theme-switch"
          checked={state.theme === "dark"}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <a>Dentistas - Favoritos - Contacto</a>

      <Outlet />
    </div>
  );
};

export default Navbar;