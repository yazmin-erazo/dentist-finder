import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const DentistDetail = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext);
  const { dentists, favorites } = state;

  const selectedDentist = 
  dentists.find((dentist) => dentist.login.uuid === id) || 
  favorites.find((dentist) => dentist.login.uuid === id);

  // Verifica si el dentista está en la lista de favoritos
  const isFavorite = favorites.some((dentist) => dentist.login.uuid === id);

  if (!selectedDentist) {
    return <div>No se encontró el dentista</div>;
  }
  
  return (
    <div>
      <h1>
        {selectedDentist.name.first}{" "}
        {selectedDentist.name.last}
      </h1>
      {selectedDentist && (
        <>
          <img src={selectedDentist.picture.large} alt="Dentist profile" />
          <p>Email: {selectedDentist.email}</p>
          <p>Teléfono: {selectedDentist.phone}</p>
          <p>Descripción: {selectedDentist.description}</p>
          {isFavorite && <p>Este dentista esta en la lista de favoritos</p>}
        </>
      )}
    </div>
  );
};

export default DentistDetail;
