import FirstPokemons from "./FirstPokemons";
import Header from "./Header";
import PokemonsTypes from "./PokemonsTypes";
import PokemonsByType from "./PokemonsByType";

function App() {
  return (
    <>
      <Header />
      <FirstPokemons />
      {/* <PokemonsTypes />
      <PokemonsByType type={"Eau"} />
      <PokemonsByType type={"Plante"} />
      <PokemonsByType type={"Acier"} /> */}
    </>
  );
}

export default App;
