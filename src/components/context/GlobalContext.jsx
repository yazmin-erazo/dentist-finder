import { getDentistsData } from "../services/api";
import React, { createContext, useEffect, useReducer } from "react";

// Creamos el contexto global
export const GlobalContext = createContext();

// Estado inicial del contexto
const initialState = {
  theme: "light",
  dentists: [],
  favorites: [],
};

// Reducer que maneja los cambios en el estado global
const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favorites: state.favorites.concat(action.payload) };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

// Componente proveedor que envuelve la aplicación

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // Llamada a la API para obtener la información de los dentistas
    const fetchData = async () => {
      const data = await getDentistsData();
      dispatch({ type: "SET_DENTISTS", payload: data });
    };
    fetchData();
  }, []);

  // Recuperar los favoritos del localStorage al cargar la aplicación
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
    // Si la lista de favoritos no está vacía, agregarla al estado global
    if (favorites.length > 0) {
      dispatch({ type: "ADD_FAVORITE", payload: favorites });
    }
  }, []);

  // Guardar los favoritos en localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <GlobalContext.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
