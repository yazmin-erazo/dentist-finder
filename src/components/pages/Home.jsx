import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CardDentist from "../common/CardDentist";

const Home = () => {
  const { state } = useContext(GlobalContext);
  const { dentists, favorites } = state;

  return (
    <div>
      <h1>Dentistas</h1>
      <h2>Tus Favoritos</h2>

      {favorites.map((favorite, i) => (
        <CardDentist key={i} dentist={favorite} />
      ))}
      <hr />
      {dentists.map((dentist) => (
        // La key la pongo asi porque hay usuarios random que no cuentan con el id.value
        <CardDentist key={dentist.dob.date} dentist={dentist} />
      ))}
    </div>
  );
};

export default Home;
