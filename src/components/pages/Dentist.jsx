import { useContext } from "react";
import GlobalContextProvider from "../context/GlobalContext";


const Dentist = () => {
  const { state } = useContext(GlobalContextProvider);
  const { dentists } = state;
console.log(dentists);
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

export default Dentist;
