import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// components
import Header from "./shared/Header";

// context
import UseFilter from "./context/filterContext";
import Locations from "./pages/locations/Locations";
import LocationProvider from "./context/locationContext";

// pages
const HomePage = lazy(() => import("./pages/home/HomePage"));
const CharacterPage = lazy(() => import("./pages/character/CharacterPage"));
const Character = lazy(() => import("./pages/character-id/Character"));
const NotFound = lazy(() => import("./pages/404/NotFound"));

const App = () => {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <UseFilter>
        <LocationProvider>
          <BrowserRouter>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<CharacterPage />} />
                <Route path="/characters/:id" element={<Character />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </LocationProvider>
      </UseFilter>
    </main>
  );
};

export default App;
