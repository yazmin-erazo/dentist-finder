import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { state } = useContext(GlobalContext);

  return (
    <>
      <Outlet />
      <footer
        className={`${
          state.theme === "dark" ? "bg-gray-950 text-white" : "bg-slate-200"
        } fixed bottom-0 w-full`}
      >
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row-reverse justify-between ">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Yazmin Erazo
          </p>

          <div className="flex justify-center sm:justify-start">
            <a
              href="https://github.com/Yazmin-Erazo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500"
            >
              <span className="sr-only">Github</span>
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yazmin-erazo/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-gray-500"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
