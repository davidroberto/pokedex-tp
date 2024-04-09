import { useEffect, useState } from "react";

const PokemonsByGeneration = ({ generation }) => {
  const [pokemonsFromApi, setPokemonsFromApi] = useState(null);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + generation)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonsFromApi(data);
      });
  }, []);

  return (
    <section>
      {generation === 1 ? <h1>Les vrais pokemons :</h1> : <h1>Le reste : </h1>}

      {pokemonsFromApi ? (
        <>
          {pokemonsFromApi.map((pokemon) => {
            return (
              <article key={pokemon.id}>
                <p>{pokemon.name}</p>
                <p>HP : {pokemon.stats.HP}</p>

                <p>Types : </p>

                {pokemon.apiTypes.map((type) => {
                  return <p key={type.name}>{type.name}</p>;
                })}
              </article>
            );
          })}
        </>
      ) : (
        <p>En cours de chargement</p>
      )}
    </section>
  );
};

export default PokemonsByGeneration;
