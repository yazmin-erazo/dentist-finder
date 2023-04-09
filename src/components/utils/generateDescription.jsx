export const generateId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);

  return random + date;
};

// ======================================================

export const generateDescription = (name) => {
  const adjectives = [
    "amable",
    "experto",
    "profesional",
    "atento",
    "experimentado",
  ];
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const yearsOfExperience = Math.floor(Math.random() * 40) + 1;
  const complement = [
    " cuidando la salud dental de mis pacientes",
    " en ortodoncia",
    ", apasionado por brindar tratamientos dentales de calidad",
    " ayudando a mis pacientes a lograr una sonrisa saludable y hermosa",
    " especializado en ofrecer tratamientos de calidad",
    ", brindando así soluciones efectivas y de larga duración",
    "!Estoy aquí para ayudarte!",
    "que me ha permitido tratar casos de todo tipo y complejidad",
  ];
  const randomComplement =
    complement[Math.floor(Math.random() * complement.length)];
  return `Soy ${name}, un dentista ${randomAdjective} con más de ${yearsOfExperience} años de experiencia ${randomComplement} `;
};
