import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar/Navbar";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import Footer from "./components/layouts/Footer/Footer";
import GlobalContextProvider from "./components/context/GlobalContext";
import Dentists from "./components/pages/Dentists";
import NotFound from "./components/pages/NotFound";
import DentistDetailContainer from "./components/pages/Detail/DentistDetailContainer";
import ContactContainer from "./components/pages/Contact/ContactContainer";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route element={<Footer />}>
            <Route element={<Navbar />}>
              <Route path="/dentist-finder" element={<Home />} />
              <Route path="/dentistas" element={<Dentists />} />
              <Route
                path="/dentista/:id"
                element={<DentistDetailContainer />}
              />
              <Route path="/contacto" element={<ContactContainer />} />
              <Route path="/favoritos" element={<Favorites />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;

// https://jsonplaceholder.typicode.com/users/:id Trae los usuarios por id
// https://jsonplaceholder.typicode.com/users  Trae todos los usuarios

// [
//   {
//     "id": 1,
//     "name":"Leanne Graham",
//     "username":"Bret",
//     "email":"leanne@example.com",
//     "address": {
//       "name":"Light",
//     "suit":"Apt. 556",
//     "City":"Bogota",
//     "zipcode":"92998-3874"
//     }
//   }
// ]
