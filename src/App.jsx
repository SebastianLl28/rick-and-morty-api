import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/home/HomePage";
import CharacterPage from "./pages/character/CharacterPage";
import UseFilter from "./context/filterContext";

const App = () => {
  return (
    <main className="min-h-screen bg-gray-200 text-black dark:bg-gray-950 dark:text-white">
      <UseFilter>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharacterPage />} />
          </Routes>
        </BrowserRouter>
      </UseFilter>
    </main>
  );
};

export default App;
