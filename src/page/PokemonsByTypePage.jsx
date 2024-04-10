import Header from "../component/Header";
import PokemonsByType from "../component/PokemonsByType";

const PokemonsByTypePage = () => {
  return (
    <>
      <Header />
      <PokemonsByType type={"Acier"} />
      <PokemonsByType type={"Plante"} />
    </>
  );
};

export default PokemonsByTypePage;
