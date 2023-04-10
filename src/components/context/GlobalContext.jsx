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
      // Cambia el tema actual del estado de "light" a "dark"
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DENTISTS":
      // Establece la lista de dentistas en el estado global
      return { ...state, dentists: action.payload };
    case "ADD_FAVORITE":
      // Agrega un dentista a la lista de favoritos en el estado global
      console.log(state);
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
  // const [state, dispatch] = useReducer(appReducer, initialState);

  // ========================== LOCAL STORAGE ============================
  
  // Configura el estado global usando el reducer y el estado inicial
  const savedTheme = localStorage.getItem("theme") || "light"; // Recupera el valor del tema del almacenamiento local o establece el valor predeterminado "light"

  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    theme: savedTheme, // Establece el valor del tema recuperado del almacenamiento local como el valor inicial del estado
  });

  // ========================== API ============================

  useEffect(() => {
    // Llamada a la API para obtener la información de los dentistas
    const fetchData = async () => {
      const data = await getDentistsData();
      // Actualiza la lista de dentistas en el estado global
      dispatch({ type: "SET_DENTISTS", payload: data });
    };
    // Ejecuta la función fetchData una sola vez al cargar el componente
    fetchData();
  }, []);

  // ========================== FAVS ============================

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

  // ========================== THEME ============================

  // Cambiar el tema actual y guardarlo en localStorage al actualizar el estado de "theme"
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  useEffect(() => {
    // Recuperar el tema seleccionado del localStorage al cargar la aplicación
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch({ type: "TOGGLE_THEME" });
    }
  }, []);

  // Guardar el tema seleccionado en localStorage al actualizar el estado de "theme"
  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  useEffect(() => {
    // Agrega una clase al body que corresponde al tema actual
    document.body.classList.remove("light", "dark");
    document.body.classList.add(state.theme);
  }, [state.theme]);


  // ========================== FIN ============================

  // Retorna el proveedor de contexto global con el estado, dispatch y la función
  return (
    <GlobalContext.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
