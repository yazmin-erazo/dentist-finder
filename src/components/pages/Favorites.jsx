import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import CardDentist from "../common/CardDentist";
import { generateDescription } from "../utils";

const Favorites = () => {
  const { state } = useContext(GlobalContext);
  const { favorites } = state;

  return (
    <div>
      <h1>Favoritos</h1>
      {favorites.map((dentist) => (
        <CardDentist
          key={dentist.login.uuid}
          dentist={{
            ...dentist,
            description: generateDescription(dentist.name.first),
          }}
        >
          <Link to={`/dentista/${dentist.login.uuid}`} key={dentist.login.uuid}>
            <p>{dentist.name.first}</p>
            <p>{dentist.description}</p>
          </Link>
        </CardDentist>
      ))}
    </div>
  );
};

export default Favorites;





