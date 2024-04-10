import Header from "../component/Header";
import PokemonsByGeneration from "../component/PokemonsByGeneration";

const PokemonsByGenerationPage = () => {
  return (
    <>
      <Header />
      <PokemonsByGeneration generation={1} />
      <PokemonsByGeneration generation={2} />
      <PokemonsByGeneration generation={3} />
    </>
  );
};

export default PokemonsByGenerationPage;
