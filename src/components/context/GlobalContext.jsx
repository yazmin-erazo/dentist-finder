import axios from "axios";
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
      return { ...state, favorites: [...state.favorites, action.payload] };
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
const GlobalContextProvider = ({ Children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // Llamada a la API para obtener la información de los dentistas
    axios.get("https://jsonplaceholder.typicode.com/users/").then((response) => {
        console.log(response.data); 
      dispatch({ type: "SET_DENTISTS", payload: response.data });
    });
  }, []);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <GlobalContext.Provider value={{ state, dispatch, toggleTheme }}>
      {Children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
