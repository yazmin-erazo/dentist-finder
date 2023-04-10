import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";
import { MdPlace } from "react-icons/md";

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
    <div
      className={`card-dentist mt-4 p-4 rounded-lg shadow-md border border-slate-300/10 ${state.theme}`}
    >
      {/* Define el Link para navegar a la página del detalle del dentista */}
      <Link to={`/dentist-finder/dentista/${dentist.login.uuid}`}>
        <div className="relative">
          <div className="flex flex-col items-center w-full mb-4">
            <img
              src={dentist.picture.large}
              alt="Dentist profile"
              className="rounded-full border z-10"
            />
            <div className="absolute top-0 w-full h-1/3 border-b border-b-slate-300/10 "></div>
            <p className="text-lg font-medium my-2">
              {dentist.name.first} {dentist.name.last}
            </p>

            <p className="text-md text-center flex items-center justify-center mb-2 text-slate-500 ">
              <MdPlace size={18} className="mx-2" />
              {dentist.location.city}
            </p>
          </div>
        </div>
      </Link>
      {/* <div className="py-4 bg-slate-700 flex justify-center rounded-md w-full"> */}
      <FavoriteButton isFavorite={isFavorite} onClick={handleToggleFavorite} />
    </div>
  );
};

export default CardDentist;