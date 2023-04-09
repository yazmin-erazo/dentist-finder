import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import CardDentist from "../common/CardDentist";

import CardList from "../common/CardList";
import { generateDescription } from "../utils/generateDescription";

const Favorites = () => {
  const { state } = useContext(GlobalContext);
  const { favorites } = state;

  return (
    <>
      {" "}
      <div className="my-28 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Favoritos</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4">
          {favorites.map((dentist) => (
            <CardList
              key={dentist.login.uuid}
              dentist={{
                ...dentist,
                description: generateDescription(dentist.name.first),
              }}
            >
              <Link
                to={`/dentista/${dentist.login.uuid}`}
                key={dentist.login.uuid}
              >
                <p>{dentist.name.first}</p>
                <p>{dentist.description}</p>
              </Link>
            </CardList>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
