import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ContactPresenter from "./ContactPresenter";

const ContactContainer = () => {
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
    <ContactPresenter
      state={state}
      name={name}
      email={email}
      nameError={nameError}
      emailError={emailError}
      successMessage={successMessage}
      handleThemeChange={handleThemeChange}
      handleSubmit={handleSubmit}
      handleReset={handleReset}
      setName={setName}
      setEmail={setEmail}
    />
  );
};

export default ContactContainer;
