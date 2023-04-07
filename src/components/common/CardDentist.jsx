import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";

const CardDentist = ({ dentist }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { favorites } = state;

  // Verifica si el dentista actual es un favorito
  const isFavorite = favorites.some((favorite) => favorite.id === dentist.id);

  // Define la función para agregar o remover un dentista de los favoritos
  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: dentist });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: dentist });
    }
  };

  return (
    <div>
      {/* Define el Link para navegar a la página del detalle del dentista */}
      <Link to={`/dentista/${dentist.login.uuid}`}> 
        <p>{dentist.name.first}</p>
        <p>{dentist.description}</p>
      </Link>
      <FavoriteButton isFavorite={isFavorite} onClick={handleToggleFavorite} />
    </div>
  );
};

export default CardDentist;