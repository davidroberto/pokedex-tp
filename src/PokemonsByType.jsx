import { useState } from "react";

const PokemonsByType = ({ type }) => {
  const [pokemonsFromApi, setPokemonsFromApi] = useState(null);

  fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setPokemonsFromApi(data);
    });

  return (
    <section>
      <h2>Les pokemons {type} :</h2>

      {pokemonsFromApi ? (
        <>
          {pokemonsFromApi.map((pokemon) => {
            return (
              <article key={pokemon.id}>
                <p>{pokemon.name}</p>
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

export default PokemonsByType;
