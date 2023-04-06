import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import FavoriteButton from "./FavoriteButton";

const CardDentist = ({ dentist }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { favorites } = state;

  const isFavorite = favorites.some((favorite) => favorite.id === dentist.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: dentist });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: dentist });
    }
  };

  return (
    <div>
      <p>{dentist.phone}</p>
      <FavoriteButton isFavorite={isFavorite} onClick={handleToggleFavorite} />
    </div>
  );
};

export default CardDentist;
