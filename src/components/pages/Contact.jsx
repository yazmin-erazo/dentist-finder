import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    } else if (!email.includes("@") && !email.includes(".") || !emailRegex.test(email)) {
      setEmailError("Parece que falta el @ y el dominio en tu correo electrónico");
      setNameError("");
      setSuccessMessage("");
    } else {
      setSuccessMessage(
        `Gracias ${name}, te contactaremos cuando antes vía mail`
      );
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
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <span className="error">{nameError}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>

        {successMessage && <p>{successMessage}</p>}
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleReset}>
          Limpiar
        </button>
      </form>
    </div>
  );
};

export default Contact;
