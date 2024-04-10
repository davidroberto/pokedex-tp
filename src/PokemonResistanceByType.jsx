import { useEffect, useState } from "react";

const PokemonResistanceByType = () => {
  const [pokemons, setPokemons] = useState([]);

  const handleSelectType = (event) => {
    event.preventDefault();

    const selectedType = event.target.type.value;

    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + selectedType)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemons(data);
      });
  };

  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTypes(data);
      });
  }, []);

  return (
    <section>
      <h2>Trouvez les pokemons résistants à un type</h2>

      <form onSubmit={handleSelectType}>
        <select name="type">
          {types.map((type) => {
            return <option value={type.name}>{type.name}</option>;
          })}
        </select>

        <input type="submit" />
      </form>

      {pokemons.map((pokemon) => {
        return (
          <article>
            <h3>{pokemon.name}</h3>
          </article>
        );
      })}
    </section>
  );
};

export default PokemonResistanceByType;
