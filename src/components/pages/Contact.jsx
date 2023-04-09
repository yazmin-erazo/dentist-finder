import { useContext, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GlobalContext } from "../context/GlobalContext";
import SuccessMessage from "../common/SuccessMessage";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { state, toggleTheme } = useContext(GlobalContext);
  const handleThemeChange = () => {
    toggleTheme();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 6) {
      setNameError("Por favor, ingresa un nombre de al menos 6 caracteres");
      setEmailError("");
      setSuccessMessage("");
    } else if (!email.trim()) {
      setEmailError("Por favor, ingresa tu correo electrónico");
      setNameError("");
      setSuccessMessage("");
    } else if (
      (!email.includes("@") && !email.includes(".")) ||
      !emailRegex.test(email)
    ) {
      setEmailError(
        "Parece que falta el @ y el dominio en tu correo electrónico"
      );
      setNameError("");
      setSuccessMessage("");
    } else {
      setSuccessMessage(`¡Gracias por contactarnos ${name},!`);
      setNameError("");
      setEmailError("");
      setFormSubmitted(true);
      handleReset();
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
  };

  return (
    <div
      className={`mt-28 flex justify-center ${
        state.theme === "dark" ? "text-white" : "text-slate-800"
      }`}
    >
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl mb-16 flex items-center justify-center font-bold">
          Contacto
        </h1>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto max-w-md w-full px-6"
        >
          <div>
            <label htmlFor="name" className="block  font-medium mb-2">
              Nombre completo:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            />
            {nameError && (
              <span className="text-red-500 text-sm">{nameError}</span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block  font-medium mb-2 mt-3">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            />
            {emailError && (
              <span className="text-red-500 text-sm">{emailError}</span>
            )}
          </div>

          <div className="flex justify-center mt-8 mb-24">
            <button
              className="w-full mt-4 text-center  bg-slate-600 hover:bg-slate-700 text-white  font-medium px-8 py-3 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleReset}
            >
              Limpiar
            </button>
            <button
              className="w-full mt-4 ml-4 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
          {successMessage && <SuccessMessage message={successMessage} />}
        </form>
      </div>
    </div>
  );
};

export default Contact;
