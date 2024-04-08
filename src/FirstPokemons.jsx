import { useState } from "react";

const FirstPokemons = () => {
  const [pokemonsFromApi, setPokemonsFromApi] = useState(null);

  fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setPokemonsFromApi(data);
    });

  return (
    <section>
      <h2>Les 100 premiers pokemons</h2>

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

export default FirstPokemons;
