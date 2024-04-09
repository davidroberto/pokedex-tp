import { useState } from "react";

const SearchPokemonByName = () => {
  const [pokemonFound, setPokemonFound] = useState(null);

  const handleSearchPokemon = (event) => {
    event.preventDefault();

    const pokemonToSearch = event.target.search.value;

    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonToSearch)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return false;
        }
      })

      // la fonction de ce then récupère ce que le then précédent a retourné
      .then((data) => {
        setPokemonFound(data);
      });
  };

  return (
    <section>
      <h2>Cherchez un pokemon : </h2>
      <form onSubmit={handleSearchPokemon}>
        <input type="text" name="search" />
        <input type="submit" />
      </form>

      {pokemonFound === false && <p>Pokemon non trouvé</p>}

      {pokemonFound && (
        <article>
          <h3>{pokemonFound.name}</h3>
          <img src={pokemonFound.image} alt={pokemonFound.name} />
          <p>HP : {pokemonFound.stats.HP}</p>

          <p>Types : </p>

          {pokemonFound.apiTypes.map((type) => {
            return <p key={type.name}>{type.name}</p>;
          })}
        </article>
      )}
    </section>
  );
};

export default SearchPokemonByName;
