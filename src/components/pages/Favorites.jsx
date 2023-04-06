import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CardDentist from "../common/CardDentist";

const Favorites = () => {
  const { state } = useContext(GlobalContext);
  const { favorites } = state;

  return (
    <div>
      <h1>Favoritos</h1>
      <hr />
      {favorites.map((favorite, i) => (
        <CardDentist key={i} dentist={favorite} />
      ))}
    </div>
  );
};

export default Favorites;
