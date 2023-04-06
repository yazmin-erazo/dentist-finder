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
          <p>{dentist.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;