import { useState } from "react";
import { BsList, BsX } from "react-icons/Bs";
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
            <h2 className="text-xl font-medium mb-6">🦷</h2>
            <ul className="text-lg text-center">
              <li className="mb-4">
                <Link
                  to="/dentistas"
                  className="hover:text-blue-400"
                  onClick={handleClick}
                >
                  Profesionales
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/favoritos"
                  className="hover:text-blue-400"
                  onClick={handleClick}
                >
                  Favoritos
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/contacto"
                  className="hover:text-blue-400"
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
