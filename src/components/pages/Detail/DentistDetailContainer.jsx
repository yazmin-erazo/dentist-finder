import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { generateDescription } from "../../utils/generateDescription";
import { GlobalContext } from "../../context/GlobalContext";
import DentistDetailPresenter from "./DentistDetailPresenter";

const DentistDetailContainer = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(GlobalContext);
  const { dentists, favorites } = state;

  const selectedDentist =
    dentists.find((dentist) => dentist.login.uuid === id) ||
    favorites.find((favorite) => favorite.login.uuid === id);

  // Aplica la función generarDescripción al objeto selectedDentist
  if (selectedDentist) {
    selectedDentist.description = generateDescription(
      selectedDentist.name.first
    );
  }
  // Verifica si el dentista está en la lista de favoritos
  const isFavorite = favorites.some((dentist) => dentist.login.uuid === id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: selectedDentist });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: selectedDentist });
    }
  };

  //   if (!selectedDentist) {
  //     return <div className="mt-28 text-center">No se encontró el dentista</div>;
  //   }

  return (
    <DentistDetailPresenter
      selectedDentist={selectedDentist}
      isFavorite={isFavorite}
      handleToggleFavorite={handleToggleFavorite}
      theme={state.theme}
    />
  );
};

export default DentistDetailContainer;
