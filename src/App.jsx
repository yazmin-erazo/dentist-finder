import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar/Navbar";
import Home from "./components/pages/Home";
import Dentist from "./components/pages/Dentist";
import Contact from "./components/pages/Contact";
import Favorites from "./components/pages/Favorites";
import Footer from "./components/layouts/Footer/Footer";
import "./App.css";
import GlobalContextProvider from "./components/context/GlobalContext";

function App() {
  return (

    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route element={<Footer />}>
            <Route element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/dentista" element={<Dentist />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/favs" element={<Favorites />} />
            </Route>
          </Route>
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
