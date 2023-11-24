import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/home/HomePage";
import CharacterPage from "./pages/character/CharacterPage";
import UseFilter from "./context/filterContext";
import Character from "./pages/character-id/Character";
import NotFound from "./pages/404/NotFound";
import Locations from "./pages/locations/Locations";
import LocationProvider from "./context/locationContext";

const App = () => {
  return (
    <main className="min-h-screen bg-gray-200 text-black dark:bg-gray-950 dark:text-white">
      <UseFilter>
        <LocationProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/characters" element={<CharacterPage />} />
              <Route path="/characters/:id" element={<Character />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LocationProvider>
      </UseFilter>
    </main>
  );
};

export default App;
