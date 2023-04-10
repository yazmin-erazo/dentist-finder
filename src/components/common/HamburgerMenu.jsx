import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center sm:hidden">
      <button
        type="button"
        className="focus:outline-none"
        onClick={handleClick}
      >
        <BsList size="2em" />
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-slate-800">
          <nav className="flex flex-col justify-center items-center h-full text-white">
            <h2 className=" text-4xl font-medium mb-12">🦷</h2>
            <ul className="text-lg text-center">
              <li className="mb-4">
                <Link
                  to="/dentist-finder/dentistas"
                  className="hover:text-blue-400 link-btn"
                  onClick={handleClick}
                >
                  Profesionales
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dentist-finder/favoritos"
                  className="hover:text-blue-400 link-btn"
                  onClick={handleClick}
                >
                  Favoritos
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dentist-finder/contacto"
                  className="hover:text-blue-400 link-btn"
                  onClick={handleClick}
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="absolute top-0 right-0 mt-4 mr-4 text-white focus:outline-none"
              onClick={handleClick}
            >
              <BsX size="2em" />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
