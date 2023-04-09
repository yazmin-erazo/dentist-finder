import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-28 container mx-auto px-4 flex flex-col justify-centre items-center sm:justify-start sm:items-start sm:text-left">
      <div className="mb-8 w-16 h-16 flex justify-center items-center rounded-full border border-slate-300/10">
        <h1>🦷</h1>
      </div>
      <main>
        <section className="mb-12 text-center sm:text-left">
          <div className="container">
            <h1 className="banner-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Cuida tu sonrisa, cuida tu salud
            </h1>
            <p className="banner-subtitle text-lg md:text-xl lg:text-2xl mb-8">
              Encuentra el mejor dentista para ti y cuida tu boca como se
              merece.
            </p>
            <Link
              to="/dentistas"
              className="banner-cta inline-block px-8 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-full font-medium"
            >
              Buscar dentista
            </Link>
          </div>
        </section>

        <section>
          <div className="container flex text-center sm:text-left flex-col md:flex-row items-center justify-center mt-16 sm:mt-24 md:mt-36 mb-12">
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Testimonios de nuestros clientes
              </h2>
              <p className="text-gray-500 mb-6">
                Descubre cómo han mejorado la salud bucal de nuestros clientes
                con nuestro servicio de calidad.
              </p>
              <div className="flex justify-center sm:justify-start mb-8 md:mb-0">
                <Link
                  to="*"
                  className="inline-block px-8 py-3 text-white bg-slate-500 hover:bg-slate-600 rounded-full font-medium"
                >
                  Ver más
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="w-full bg-white rounded-lg p-8 shadow-lg">
                <p className="text-gray-500 mb-4">
                  "Muy buen trato y atención al cliente. Además, el lugar es
                  limpio y moderno. Definitivamente recomendaría este dentista."
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://randomuser.me/api/portraits/women/51.jpg"
                    alt="Testimonio"
                  />
                  <div>
                    <p className="font-medium text-gray-700">María Gómez</p>
                    <p className="text-gray-500 text-sm">Paciente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
