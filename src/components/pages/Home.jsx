import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CardDentist from "../common/CardDentist";
import { generateDescription } from "../utils";

const Home = () => {
  const { state } = useContext(GlobalContext);
  const { dentists } = state;

  return (
    <div>
      <h1>Dentistas</h1>
      {dentists.map((dentist) => (
        <CardDentist
          key={dentist.login.uuid}
          dentist={{
            ...dentist,
            description: generateDescription(dentist.name.first),
          }}
        />
      ))}
    </div>
  );
};

export default Home;
