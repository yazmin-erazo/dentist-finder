import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";
import { MdPlace } from "react-icons/md";

const CardList = ({ dentist }) => {
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
      className={`grid card-dentist mt-4 p-4 rounded-lg shadow-md border border-slate-300/10 ${state.theme}`}
      style={{ gridTemplateColumns: "auto 50px" }}
    >
      {/* Define el Link para navegar a la página del detalle del dentista */}
      <Link to={`/dentista/${dentist.login.uuid}`} className="grid">
        <div className="flex ">
          <div className="mr-6">
            <img
              src={dentist.picture.large}
              alt="Dentist profile"
              style={{
                borderRadius: "8%",
                border: "1px solid rgba(203, 213, 224, 0.1)",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                transition: "all 0.2s ease-in-out",
              }}
            />
          </div>
          <div className="mr-6 w-28 sm:w-48 md:w-48">
            <p className="text-lg font-medium mb-2 truncate">
              {dentist.name.first} {dentist.name.last}
            </p>
            <div className="text-sm flex items-center mb-2  text-slate-500 ">
              <MdPlace size={18} />
              {dentist.location.city}
            </div>
            <div>
              <div className="text-sm font-light truncate text-slate-400">
                {dentist.description}
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div>
        <FavoriteButton
          className={`no-style-button ${state.theme} `}
          isFavorite={isFavorite}
          onClick={handleToggleFavorite}
        />
      </div>
    </div>
  );
};

export default CardList;
