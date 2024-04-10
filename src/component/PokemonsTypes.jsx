import { useEffect, useState } from "react";

const PokemonsTypes = () => {
  const [typesFromApi, setTypesFromApi] = useState(null);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTypesFromApi(data);
      });
  }, []);

  return (
    <section>
      <h2>Les types de pokemons :</h2>

      {typesFromApi ? (
        <>
          {typesFromApi.map((type) => {
            return (
              <article>
                <p>{type.name}</p>
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

export default PokemonsTypes;
