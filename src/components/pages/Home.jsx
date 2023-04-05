import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


const Home = () => {
  const { state } = useContext(GlobalContext);
  const { dentists } = state;
  return (
    <div>
      <h1>Dentistas</h1>
      {dentists.map((dentist) => (
        <div key={dentist.id}>
          <h2>{dentist.name}</h2>
          <p>{dentist.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;