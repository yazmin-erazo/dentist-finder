import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen notfound flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold  sm:text-5xl">404</h1>
          <p className="mt-2 text-base px-8">
            Lo sentimos, no se encontro la página que buscabas.
          </p>
          <div className="mt-6 mb-16">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-8"
            >
              Volver al inicio
            </Link>
          </div>
          <img
            className="w-80 md:w-auto mx-auto"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d3820249415607.58b463d5b25ea.gif"
            alt="Ilustración de testimonios"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
