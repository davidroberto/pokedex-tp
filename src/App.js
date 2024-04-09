import FirstPokemons from "./FirstPokemons";
import Header from "./Header";
import PokemonsTypes from "./PokemonsTypes";
import PokemonsByType from "./PokemonsByType";
import PokemonsByGeneration from "./PokemonsByGeneration";
import SearchPokemonByName from "./SearchPokemonByName";

function App() {
  return (
    <>
      <Header />
      <SearchPokemonByName />
      {/* <PokemonsByGeneration generation={1} />
      <PokemonsByGeneration generation={2} />
      <PokemonsByGeneration generation={3} />
      <PokemonsByGeneration generation={4} />
      <PokemonsByGeneration generation={5} />
      <FirstPokemons />
      <PokemonsTypes />
      <PokemonsByType type={"Eau"} />
      <PokemonsByType type={"Plante"} />
      <PokemonsByType type={"Acier"} /> */}
    </>
  );
}

export default App;
