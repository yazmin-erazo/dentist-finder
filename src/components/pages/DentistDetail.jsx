import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import FavoriteButton from "../common/FavoriteButton";
import { GlobalContext } from "../context/GlobalContext";
import { generateDescription } from "../utils/generateDescription";
import { MdPlace } from "react-icons/md";

const DentistDetail = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(GlobalContext);
  const { dentists, favorites } = state;

  const selectedDentist =
    dentists.find((dentist) => dentist.login.uuid === id) ||
    favorites.find((favorite) => favorite.login.uuid === id);

  // Apply generateDescription function to the selectedDentist object
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

  if (!selectedDentist) {
    return <div className="mt-28 text-center">No se encontró el dentista</div>;
  }

  return (
    <div className="mb-28 ">
      <div className="flex justify-center absolute items-center w-full">
        <div className="container mx-auto mt-28 z-10 text-center sm:text-left text-white text-3xl font-bold">
          <h1>Detalles</h1>
        </div>
      </div>
      <div className="relative h-64 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-300 "></div>
      </div>
      {selectedDentist && (
        <div>
          <img
            src={selectedDentist.picture.large}
            alt="Dentist profile"
            className="dentist-image rounded-full"
          />
          <div className="mt-24 text-center flex flex-col items-center">
            <h3 className=" text-3xl mb-3 font-medium">
              {selectedDentist.name.first} {selectedDentist.name.last}
            </h3>
            <p className="text-gray-500 text-md">{selectedDentist.email}</p>
            <p className="text-gray-500 text-sm">
              <span className="text-blue-400">Teléfono:</span>{" "}
              {selectedDentist.phone}
            </p>
            <div className="flex justify-center items-cemter p-4 my-4 border border-slate-300/10 text-gray-500 w-5/6 sm:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg ">
              <MdPlace size={38} className="mx-2" />
              <div>
                <p className=" text-md text-left">
                  {selectedDentist.location.city},{" "}
                  {selectedDentist.location.state}
                </p>
                <p className=" text-sm  text-left">
                  {selectedDentist.location.street.number}{" "}
                  {selectedDentist.location.street.name}
                </p>
              </div>
            </div>
            <p className="mt-4 text-lg leading-relaxed w-4/5 sm:w-1/2 lg:w-1/3 mb-8">
              {selectedDentist.description}
            </p>
            {isFavorite && (
              <p className=" text-gray-500 mb-2">Agregado favoritos</p>
            )}
            <div className=" w-20">
              <FavoriteButton
                isFavorite={isFavorite}
                onClick={handleToggleFavorite}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DentistDetail;
