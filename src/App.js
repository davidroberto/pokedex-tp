import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import PokemonResistancePage from "./page/PokemonResistancePage";
import PokemonsByGenerationPage from "./page/PokemonsByGenerationPage";
import PokemonsByTypePage from "./page/PokemonsByTypePage";
import PokemonsTypesPage from "./page/PokemonsTypesPage";
import PokemonsSearchPage from "./page/PokemonsSearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resistance" element={<PokemonResistancePage />} />
        <Route path="/generations" element={<PokemonsByGenerationPage />} />
        <Route path="/by-type" element={<PokemonsByTypePage />} />
        <Route path="/types" element={<PokemonsTypesPage />} />
        <Route path="/search" element={<PokemonsSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
