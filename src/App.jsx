import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import CharacterPage from "./pages/character/CharacterPage";

const App = () => {
  return (
    <main className="min-h-screen bg-gray-200 text-black dark:bg-gray-950 dark:text-white">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
