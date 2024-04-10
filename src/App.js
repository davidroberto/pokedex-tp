import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import PokemonResistancePage from "./page/PokemonResistancePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resistance" element={<PokemonResistancePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
