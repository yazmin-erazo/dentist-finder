import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CardDentist from "../common/CardDentist";
import { generateDescription } from "../utils/generateDescription";

const Dentists = () => {
  const { state } = useContext(GlobalContext);
  const { dentists } = state;

  return (
    <>
      <div className="my-28 container mx-auto px-4">
        <h1 className="font-bold mb-8">Dentistas</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4">
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
      </div>
    </>
  );
};

export default Dentists;
